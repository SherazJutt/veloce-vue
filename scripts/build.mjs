import { execSync } from "node:child_process";
import { writeFileSync, readFileSync, readdirSync, copyFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = process.cwd();

// empty build directory
if (existsSync(resolve(ROOT, "build"))) {
  rmSync(resolve(ROOT, "build"), { recursive: true });
}

const UI_DIR = resolve(ROOT, "packages/ui");
process.chdir(UI_DIR);

console.log("💪 Building TypeScript declarations");
execSync("pnpm vue-tsc", { stdio: "inherit" });

console.log("🔄 Copying source files...");

const srcDir = resolve(UI_DIR, "src");
const destDir = resolve(ROOT, "build/package");

function copyRecursive(src, dest, excludeDirs = ["assets"]) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      if (excludeDirs.includes(entry.name)) continue;
      copyRecursive(srcPath, destPath, excludeDirs);
    } else if (entry.isFile()) {
      const ext = entry.name.split(".").pop();
      if (["vue", "ts", "css"].includes(ext)) {
        copyFileSync(srcPath, destPath);
      }
    }
  }
}

copyRecursive(srcDir, destDir);

console.log("📝 Creating package.json...");

const uiPkg = JSON.parse(readFileSync(resolve(UI_DIR, "package.json"), "utf-8"));

const publishPkg = {
  name: uiPkg.name,
  version: uiPkg.version,
  private: false,
  type: "module",

  license: "MIT",
  author: "Sheraz <sherazarshad419@gmail.com>",
  description: "A Vue 3 library built with Vite + TypeScript + Tailwind CSS.",
  repository: { type: "git", url: "git+https://github.com/SherazJutt/veloce-vue.git" },
  bugs: { url: "https://github.com/SherazJutt/veloce-vue/issues" },
  homepage: "https://github.com/SherazJutt/veloce-vue#readme",

  exports: {
    "./ui": { types: "./types/exports/ui.d.ts", import: "./exports/ui.ts" },
    "./icons": { types: "./types/exports/icons.d.ts", import: "./exports/icons.ts" },
    "./config": { types: "./types/exports/config.d.ts", import: "./exports/config.ts" },
    "./toast": { types: "./types/exports/toast.d.ts", import: "./exports/toast.ts" },
    "./types": { types: "./types/exports/types.d.ts" },
    "./typography": { types: "./types/exports/typography.d.ts", import: "./exports/typography.ts" },
    "./utils": { types: "./types/exports/utils.d.ts", import: "./exports/utils.ts" },
    "./composables": { types: "./types/exports/composables.d.ts", import: "./exports/composables.ts" },
    "./styles.css": "./styles/index.css",
  },

  peerDependencies: uiPkg.peerDependencies,
  keywords: ["veloce-vue"],
};

writeFileSync(join(destDir, "package.json"), JSON.stringify(publishPkg, null, 2));

console.log("✅ Build complete. Ready for publish!");
