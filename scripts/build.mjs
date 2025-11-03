import { execSync } from "node:child_process";
import { rmSync, cpSync, writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

//  set working directory to packages/ui
process.chdir(resolve("packages/ui"));

console.log("📦 Building JS bundle with Vite (includes type generation)...");
execSync("pnpm vite build", { stdio: "inherit" });

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

  // Export map for modern tooling (only ui, icons, config)
  exports: {
    ".": {
      types: "./index.d.ts",
      import: "./index.js",
      default: "./index.js",
    },
    "./ui": {
      types: "./exports/ui.d.ts",
      default: "./exports/ui.js",
    },
    "./icons": {
      types: "./exports/icons.d.ts",
      default: "./exports/icons.js",
    },
    "./config": {
      types: "./exports/config.d.ts",
      default: "./exports/config.js",
    },
    "./styles.css": "./styles.css", //  CSS import resolution
  },

  files: ["**/*"],

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
