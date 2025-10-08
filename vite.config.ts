import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [vue()],
	build: {
		outDir: path.resolve(__dirname, "./build/package"),
		sourcemap: true,

		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "ui-library",
			fileName: (format) => `index.${format === "es" ? "js" : format}`,
			formats: ["es", "cjs"],
		},

		rollupOptions: {
			output: {
				interop: "auto",
				globals: {
					vue: "Vue",
				},
			},
		},
		cssCodeSplit: false,
	},
});
