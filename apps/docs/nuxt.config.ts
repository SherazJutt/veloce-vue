import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  components: {
    dirs: [
      {
        path: "~/components/content",
        pathPrefix: false,
      },
    ],
  },
});
