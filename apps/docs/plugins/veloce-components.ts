import { defineNuxtPlugin } from "nuxt/app";
import { Button } from "veloce-vue/ui";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VeloceButton", Button);
});
