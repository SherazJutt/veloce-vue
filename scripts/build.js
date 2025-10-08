import { execSync } from "node:child_process";
import { rmSync, cpSync, writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const buildDir = resolve("build");
const outDir = resolve("build/package");

// 🧹 1. Clean previous build
console.log("🧹 Cleaning old build...");
rmSync(buildDir, { recursive: true, force: true });

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
	private: false,
	version: rootPkg.version,
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

	main: "./index.cjs",
	module: "./index.js",
	types: "./index.d.ts",

	exports: {
		".": {
			require: "./index.cjs",
			import: "./index.js",
			types: "./index.d.ts",
		},
	},

	files: ["."],
	sideEffects: false,

	peerDependencies: {
		vue: "^3.3.0",
	},
	keywords: rootPkg.keywords,
};

writeFileSync(`${outDir}/package.json`, JSON.stringify(pkg, null, 2));

console.log("✅ Build complete. Ready for publish!");
