import { execSync } from "node:child_process";
import { rmSync, cpSync, writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Check for flag
const isPackage = process.argv.includes("--package");
const outDir = resolve(isPackage ? "build/package" : "dist");

if (!isPackage) {
  console.log("🚀 Building app...");
  execSync("pnpm vite build", { stdio: "inherit" });
  process.exit(0);
}

// -------------------------
// PACKAGE BUILD MODE
// -------------------------
console.log("📦 Building package...");

// 🧹 1. Clean previous build
console.log("🧹 Cleaning old build...");
rmSync(outDir, { recursive: true, force: true });

// 📁 2. Ensure output directory exists
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
  console.log("📁 Created build/package directory.");
}

// ⚙️ 3. Build JS bundle with Vite (library mode)
console.log("📦 Building JS bundle with Vite...");
execSync("pnpm vite build --mode package", { stdio: "inherit" });

// 🧠 4. Generate TypeScript declarations
console.log("✍️ Generating TypeScript declarations...");
execSync("pnpm exec vue-tsc --declaration --emitDeclarationOnly --outDir build/package", { stdio: "inherit" });

// 🧾 5. Read root package.json
const rootPkgPath = resolve("package.json");
const rootPkg = JSON.parse(readFileSync(rootPkgPath, "utf-8"));

// 📋 6. Copy docs
["README.md", "LICENSE"].forEach((file) => {
  if (existsSync(file)) cpSync(file, `${outDir}/${file}`);
});

// 🧱 7. Create output package.json
console.log("🧾 Creating package.json...");
const pkg = {
  name: "veloce-vue",
  version: rootPkg.version,
  private: false,
  type: "module",
  description: "A Vue 3 library built with Vite + TypeScript + Tailwind CSS.",
  license: "MIT",
  author: "Sheraz <sherazarshad419@gmail.com>",
  repository: {
    type: "git",
    url: "git+https://github.com/SherazJutt/veloce-vue.git",
  },
  bugs: {
    url: "https://github.com/SherazJutt/veloce-vue/issues",
  },
  homepage: "https://github.com/SherazJutt/veloce-vue#readme",
  main: "./index.cjs",
  module: "./index.js",
  types: "./exports.d.ts",
  style: "./veloce-vue.css",
  exports: {
    ".": {
      import: "./index.js",
      require: "./index.cjs",
      types: "./exports.d.ts",
      default: "./index.js",
    },
    "./styles.css": "./veloce-vue.css",
  },
  files: ["**/*"],
  sideEffects: ["./veloce-vue.css"],
  peerDependencies: {
    vue: "^3.3.0",
  },
  keywords: ["vue3", "tailwindcss", "component library", "vue", "vuejs", "vue.js", "typescript", "veloce-vue", "ui", "tailwind", "framework", "ui-framework"],
};

writeFileSync(`${outDir}/package.json`, JSON.stringify(pkg, null, 2));

console.log("✅ Package build complete. Ready for publish!");
