import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    enforceScriptSetupLangTS(),
    tailwindcss(),
    tsconfigPaths({ ignoreConfigErrors: true }),
    dts({
      tsconfigPath: "./tsconfig.json",
      outDir: "../../build/package",
      insertTypesEntry: true,
      copyDtsFiles: true,
      staticImport: true,
      rollupTypes: false,

      // Only generate types for public API (UI, Icons, Config)
      include: ["src/index.ts"],

      // Exclude test files and non-essential internal files
      exclude: ["node_modules/**"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@veloce": path.resolve(__dirname, "./src/exports"),
    },
  },
  build: {
    outDir: "../../build/package",
    sourcemap: true,
    cssCodeSplit: false,

    lib: {
      entry: {
        "exports/ui": path.resolve(__dirname, "src/exports/ui.ts"),
        "exports/icons": path.resolve(__dirname, "src/exports/icons.ts"),
        "exports/config": path.resolve(__dirname, "src/exports/config.ts"),
      },
      name: "veloce",
      formats: ["es"],
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
