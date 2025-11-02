import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.url),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
      meta: {
        title: "Home - Veloce Vue UI Components",
      },
    },
    {
      path: "/button",
      name: "button",
      component: () => import("../pages/ButtonPage.vue"),
      meta: {
        title: "Button Component - Veloce Vue",
      },
    },
    {
      path: "/accordion",
      name: "accordion",
      component: () => import("../pages/AccordionPage.vue"),
      meta: {
        title: "Accordion Component - Veloce Vue",
      },
    },
  ],
});

export default router;
