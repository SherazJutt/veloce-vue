import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths({ ignoreConfigErrors: true }),
    dts({
      tsconfigPath: "./tsconfig.json",
      outDir: "../../build/package",
      entryRoot: "src",
      copyDtsFiles: true,
      staticImport: true,
      rollupTypes: false,
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
    cssCodeSplit: true,
    lib: {
      entry: {
        ui: path.resolve(__dirname, "src/exports/ui.ts"),
        icons: path.resolve(__dirname, "src/exports/icons.ts"),
        config: path.resolve(__dirname, "src/exports/config.ts"),
        toast: path.resolve(__dirname, "src/exports/toast.ts"),
        types: path.resolve(__dirname, "src/exports/types.ts"),
        typography: path.resolve(__dirname, "src/exports/typography.ts"),
        utils: path.resolve(__dirname, "src/exports/utils.ts"),
        composables: path.resolve(__dirname, "src/exports/composables.ts"),
      },
      formats: ["es"],
    },

    rollupOptions: {
      external: ["vue", "motion-v", "@vueuse/core", "@vueuse/integrations", "universal-cookie"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({ name }) => (["ui", "icons", "config", "toast", "types", "typography", "utils", "composables"].includes(name ?? "") ? `${name}.js` : "[name].js"),
      },
    },
  },
});
