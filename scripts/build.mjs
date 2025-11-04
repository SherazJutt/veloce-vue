import { execSync } from "node:child_process";
import { rmSync, cpSync, writeFileSync, existsSync, mkdirSync, readFileSync, renameSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

//  set working directory to packages/ui
process.chdir(resolve("packages/ui"));

console.log("📦 Building JS bundle with Vite (includes type generation)...");
execSync("pnpm vite build", { stdio: "inherit" });

// Clean up and organize build output
const buildDir = resolve("../../build/package");

// Rename CSS file to styles.css for cleaner naming
const files = readdirSync(buildDir);
const cssFile = files.find((f) => f.endsWith(".css") && f !== "styles.css");
if (cssFile) {
  const oldPath = resolve(buildDir, cssFile);
  const newPath = resolve(buildDir, "styles.css");
  if (existsSync(oldPath)) {
    renameSync(oldPath, newPath);
    console.log(`✨ Renamed ${cssFile} to styles.css`);
  }
}

// Move type definitions to root for cleaner structure
const exportsDir = resolve(buildDir, "exports");
if (existsSync(exportsDir)) {
  const typeFiles = ["ui.d.ts", "icons.d.ts", "config.d.ts"];
  typeFiles.forEach((file) => {
    const sourcePath = resolve(exportsDir, file);
    const destPath = resolve(buildDir, file);
    if (existsSync(sourcePath)) {
      cpSync(sourcePath, destPath);
      console.log(`✨ Moved ${file} to root`);
    }
  });
}

const rootPkg = JSON.parse(readFileSync(resolve("package.json"), "utf-8"));

console.log("🧾 Creating package.json...");

const pkg = {
  name: "veloce",
  version: rootPkg.version,
  private: false,
  type: "module",

  description: "A Vue 3 library built with Vite + TypeScript + Tailwind CSS.",
  license: "MIT",
  author: "Sheraz <sherazarshad419@gmail.com>",

  repository: {
    type: "git",
    url: "git+https://github.com/SherazJutt/veloce-vue.git", // repo URL
  },
  bugs: {
    url: "https://github.com/SherazJutt/veloce-vue/issues", // issues URL
  },
  homepage: "https://github.com/SherazJutt/veloce-vue#readme", // homepage URL

  // Entry points
  main: "./index.js",
  module: "./index.js",
  types: "./index.d.ts",
  style: "./styles.css",

  // Export map for modern tooling (clean structure)
  exports: {
    ".": {
      types: "./index.d.ts",
      import: "./index.js",
      default: "./index.js",
    },
    "./ui": {
      types: "./ui.d.ts",
      import: "./ui.js",
      default: "./ui.js",
    },
    "./icons": {
      types: "./icons.d.ts",
      import: "./icons.js",
      default: "./icons.js",
    },
    "./config": {
      types: "./config.d.ts",
      import: "./config.js",
      default: "./config.js",
    },
    "./styles.css": "./styles.css",
  },

  files: ["index.js", "index.d.ts", "ui.js", "ui.d.ts", "icons.js", "icons.d.ts", "config.js", "config.d.ts", "styles.css", "*.js.map", "components/**/*.d.ts", "ui/**/*.d.ts", "utils/**/*.d.ts"],

  sideEffects: [
    "./styles.css", // ensures CSS isn’t tree-shaken
  ],

  peerDependencies: {
    vue: "^3.3.0",
  },

  keywords: ["vue3", "tailwindcss", "component library", "vue", "vuejs", "vue.js", "typescript", "veloce-vue", "ui", "tailwind", "framework", "ui-framework"],
};

writeFileSync(`../../build/package/package.json`, JSON.stringify(pkg, null, 2));

console.log("Build complete. Ready for publish!");
