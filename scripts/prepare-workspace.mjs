import fs from "fs";
import path from "path";
import uiPackageJson from "../packages/ui/package.json" with { type: "json" };
import playgroundPackageJson from "../apps/playground/package.json" with { type: "json" };

const rootDir = process.cwd();

const newPlaygroundPackageJson = {
  ...uiPackageJson,

  name: "playground",
  scripts: playgroundPackageJson.scripts,

  dependencies: {
    "vue-router": "^4.6.3",
    ...uiPackageJson.dependencies,
    ...playgroundPackageJson.peerDependencies,
  },

  devDependencies: {
    ...uiPackageJson.devDependencies,
  },
};

delete newPlaygroundPackageJson.peerDependencies;

const playgroundPkgPath = path.join(rootDir, "apps/playground/package.json");
fs.writeFileSync(playgroundPkgPath, JSON.stringify(newPlaygroundPackageJson, null, 2));

console.log("✅ Updated playground package.json");
