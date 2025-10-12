import type { StorybookConfig } from "@storybook/vue3-vite";
import tailwindcss from "@tailwindcss/vite";
import vueDevTools from "vite-plugin-vue-devtools";

const config: StorybookConfig = {
  stories: ["../src/pages/Home/stories.@(ts)", "../src/pages/**/stories.@(ts)", "../src/**/stories.@(ts)"],

  addons: ["@storybook/addon-docs"],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss(), vueDevTools());
    return config;
  },
};
export default config;
