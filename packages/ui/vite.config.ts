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
      include: ["src/exports/**/*.ts", "src/ui/**/*.vue", "src/ui/**/*.ts", "src/components/**/*.vue", "src/components/**/*.ts", "src/utils/**/*.ts", "src/lib/**/*.ts"],
      exclude: ["node_modules/**", "**/*.spec.ts", "**/*.test.ts"],
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
