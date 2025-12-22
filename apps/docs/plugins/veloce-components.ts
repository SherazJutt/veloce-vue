import { defineNuxtPlugin } from "nuxt/app";
import { Button, Accordion } from "veloce-vue/ui";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("VeloceButton", Button);
  nuxtApp.vueApp.component("VeloceAccordion", Accordion);
});
