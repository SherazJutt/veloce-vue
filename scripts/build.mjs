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
  name: "veloce-vue",
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
    "./toast": {
      types: "./exports/toast.d.ts",
      import: "./toast.js",
      default: "./toast.js",
    },
    "./types": {
      types: "./exports/types.d.ts",
      import: "./types.js",
      default: "./types.js",
    },
    "./typography": {
      types: "./exports/typography.d.ts",
      import: "./typography.js",
      default: "./typography.js",
    },
    "./utils": {
      types: "./exports/utils.d.ts",
      import: "./utils.js",
      default: "./utils.js",
    },
    "./composables": {
      types: "./exports/composables.d.ts",
      import: "./composables.js",
      default: "./composables.js",
    },
    "./styles.css": "./veloce.css",
  },

  peerDependencies: rootPkg.peerDependencies,

  sideEffects: ["**/*.css", "**/veloce.css", "**/style.css"],

  keywords: ["veloce-vue"],
};

writeFileSync(`../../build/package/package.json`, JSON.stringify(pkg, null, 2));

console.log("Build complete. Ready for publish!");
