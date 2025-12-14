import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["veloce-vue/styles.css"],
  components: {
    dirs: [
      {
        path: "~/components/content",
        pathPrefix: false,
      },
    ],
  },
});
