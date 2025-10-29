import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [vue(), tailwindcss(), tsconfigPaths(), enforceScriptSetupLangTS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
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
        if (id === "vue" || id.startsWith("vue/")) return true;
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
