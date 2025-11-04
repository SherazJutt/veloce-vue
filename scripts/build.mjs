import { execSync } from "node:child_process";
import { writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

//  set working directory to packages/ui
process.chdir(resolve("packages/ui"));

console.log("📦 Building JS bundle");
execSync("pnpm vite build", { stdio: "inherit" });

console.log("🧾 Creating package.json...");
const rootPkg = JSON.parse(readFileSync(resolve("package.json"), "utf-8"));

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

  exports: {
    "./ui": {
      types: "./exports/ui.d.ts",
      import: "./ui.js",
      default: "./ui.js",
    },
    "./icons": {
      types: "./exports/icons.d.ts",
      import: "./icons.js",
      default: "./icons.js",
    },
    "./config": {
      types: "./exports/config.d.ts",
      import: "./config.js",
      default: "./config.js",
    },
  },

  peerDependencies: {
    vue: "^3.3.0",
  },

  keywords: ["veloce", "veloce-vue", "veloce-ui"],
};

writeFileSync(`../../build/package/package.json`, JSON.stringify(pkg, null, 2));

console.log("Build complete. Ready for publish!");
