import type { Preview } from "@storybook/vue3-vite";
import { setup } from "@storybook/vue3-vite";
import "../src/style.css";
import Icon from "../src/components/icon/index.vue";

setup((app) => {
  app.component("Icon", Icon);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
