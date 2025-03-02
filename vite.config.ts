import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [vue(), tailwindcss(), enforceScriptSetupLangTS()],
});

// ------------------------------- Custom Plugins -----------------------------------

// Custom Vite plugin to enforce `lang="ts"` in `<script setup>`
function enforceScriptSetupLangTS(): Plugin {
	return {
		name: "enforce-script-setup-lang-ts",
		enforce: "pre",
		transform(code, id) {
			if (id.endsWith(".vue")) {
				const hasScriptSetup = code.includes("<script setup");
				const hasLangTS = code.includes('<script setup lang="ts"');

				if (hasScriptSetup && !hasLangTS) {
					throw new Error(`The file "${id}" is missing ---> (lang="ts") <--- in <script setup>.`);
				}
			}
		},
	};
}
