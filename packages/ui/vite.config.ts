import { defineConfig, Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    tsconfigPaths({ ignoreConfigErrors: true }),
    dts({
      tsconfigPath: "./tsconfig.json",
      outDir: "../../build/package",
      entryRoot: "src",
      insertTypesEntry: false,
      copyDtsFiles: true,
      staticImport: true,
      rollupTypes: false,

      // Generate types for all public API files
      include: ["src/exports/**/*.ts", "src/components/**/*.vue", "src/components/**/*.ts"],
      exclude: ["node_modules/**", "**/*.spec.ts", "**/*.test.ts"],
    }),
  ],
  resolve: {
    alias: {
      "@veloce-vue": path.resolve(__dirname, "./src/exports"),
    },
  },
  build: {
    outDir: "../../build/package",
    sourcemap: false,
    cssCodeSplit: false,

    lib: {
      entry: {
        ui: path.resolve(__dirname, "src/exports/ui.ts"),
        icons: path.resolve(__dirname, "src/exports/icons.ts"),
        config: path.resolve(__dirname, "src/exports/config.ts"),
      },
      formats: ["es"],
    },

    rollupOptions: {
      external: (id) => {
        // Externalize Vue and all its sub-modules
        if (id === "vue" || id.startsWith("vue/")) return true;
        // Externalize peer dependencies
        if (id === "motion-v" || id.startsWith("motion-v/")) return true;
        if (id === "@vueuse/core" || id.startsWith("@vueuse/core/")) return true;
        // Externalize other peer dependencies (this will requires the consuming app to install the peer dependencies explicitly
        // e.g pnpm add vuedraggable)

        // return ["vuedraggable"].includes(id);
        return false;
      },
      output: {
        interop: "auto",
        globals: { vue: "Vue" },
        preserveModules: true, // Enable tree-shaking by preserving module structure
        preserveModulesRoot: "src",
        entryFileNames: ({ name }) => {
          // Keep ui.js, icons.js, config.js as entry points
          if (name === "ui" || name === "icons" || name === "config") {
            return `${name}.js`;
          }
          // For non-entry files, preserveModules will handle the structure
          return "[name].js";
        },
        assetFileNames: (assetInfo) => {
          // Extract CSS to veloce.css to match package.json exports
          if (assetInfo.name === "style.css" || assetInfo.name?.endsWith(".css")) {
            return "veloce.css";
          }
          return assetInfo.name || "[name].[ext]";
        },
      },
    },
  },
});
