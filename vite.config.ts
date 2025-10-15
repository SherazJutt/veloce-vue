import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vue(), enforceScriptSetupLangTS(), tailwindcss(), vueDevTools()],
  build: {
    outDir: path.resolve(__dirname, "./build/package"),
    sourcemap: true,
    cssCodeSplit: false,

    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "veloce-vue",
      fileName: (format) => `index.${format === "es" ? "js" : format}`,
      formats: ["es", "cjs"],
    },

    rollupOptions: {
      external: (id) => {
        // Externalize Vue and all its sub-modules
        if (id === "vue" || id.startsWith("vue/")) return true;
        // Externalize other peer dependencies (this will requires the consuming app to install the peer dependencies explicitly
        // e.g pnpm add vuedraggable)

        // return ["vuedraggable"].includes(id);
        return false;
      },
      output: {
        interop: "auto",
        globals: { vue: "Vue" },
      },
    },
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
