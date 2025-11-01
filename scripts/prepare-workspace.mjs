import fs from "fs"
import path from "path"
import uiPackageJson from "../packages/ui/package.json" with { type: "json" }
import playgroundPackageJson from "../apps/playground/package.json" with { type: "json" }

const rootDir = process.cwd()


const newPlaygroundPackageJson = {
    ...uiPackageJson,

    name: 'playground',
    scripts: playgroundPackageJson.scripts,

    dependencies: {
        ...uiPackageJson.dependencies,
    },

    devDependencies: {
        ...uiPackageJson.devDependencies,
    },
}


const playgroundPkgPath = path.join(rootDir, "apps/playground/package.json")
fs.writeFileSync(playgroundPkgPath, JSON.stringify(newPlaygroundPackageJson, null, 2))

console.log("✅ Updated playground package.json")
