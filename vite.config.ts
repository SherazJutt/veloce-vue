import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue(), enforceScriptSetupLangTS()],
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
