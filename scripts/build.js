import { execSync } from "node:child_process";
import { rmSync, cpSync, writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const outDir = resolve("build/package");

// 🧹 1. Clean previous build
console.log("🧹 Cleaning old build...");
rmSync(outDir, { recursive: true, force: true });

// 📁 2. Ensure output directory exists (fixes your issue)
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
  console.log("📁 Created build/package directory.");
}

// ⚙️ 3. Build JS bundle with Vite
console.log("📦 Building JS bundle with Vite...");
execSync("pnpm vite build", { stdio: "inherit" });

// 🧠 4. Generate TypeScript declaration files
console.log("✍️ Generating TypeScript declarations...");
execSync("pnpm exec vue-tsc --declaration --emitDeclarationOnly --outDir build/package", {
  stdio: "inherit",
});

// 📄 5. Copy docs like README & LICENSE
console.log("📋 Copying essential files...");
["README.md", "LICENSE"].forEach((file) => {
  if (existsSync(file)) cpSync(file, `${outDir}/${file}`);
});

// 🧾 6. Read root package.json
const rootPkg = JSON.parse(readFileSync(resolve("package.json"), "utf-8"));

// 🧱 7. Create output package.json dynamically
console.log("🧾 Creating package.json...");
const pkg = {
  name: "@sherazjutt/vue-components",
  version: rootPkg.version,
  private: false,
  type: "module",

  description: "A Vue 3 UI component library built with Vite + TypeScript.",
  license: "MIT",
  author: "Sheraz <sherazarshad419@gmail.com>",

  repository: {
    type: "git",
    url: "git+https://github.com/SherazJutt/vue-components.git",
  },
  bugs: {
    url: "https://github.com/SherazJutt/vue-components/issues",
  },
  homepage: "https://github.com/SherazJutt/vue-components#readme",

  // Entry points
  main: "./index.cjs",
  module: "./index.js",
  types: "./exports.d.ts",
  style: "./styles.css",

  // Export map for modern tooling
  exports: {
    ".": {
      import: "./index.js",
      require: "./index.cjs",
      types: "./exports.d.ts",
      default: "./index.js",
    },
    "./ui-library.css": "./ui-library.css", // allow CSS import resolution
  },

  files: [
    "**/*", // include everything in build/package
  ],

  sideEffects: [
    "./styles.css", // ensures CSS isn’t tree-shaken
  ],

  peerDependencies: {
    vue: "^3.3.0",
  },

  keywords: ["vue3", "tailwindcss", "component library", "vue", "vuejs", "vue.js", "typescript", "vue-components", "ui", "tailwind", "framework", "ui-framework"],
};

writeFileSync(`${outDir}/package.json`, JSON.stringify(pkg, null, 2));

console.log("Build complete. Ready for publish!");
