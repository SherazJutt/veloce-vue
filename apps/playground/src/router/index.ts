import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/Default.vue";

const router = createRouter({
  history: createWebHistory((import.meta as any).env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../pages/HomePage.vue"),
        },
      ],
    },
    {
      path: "/components",
      component: DefaultLayout,
      children: [
        {
          path: "button",
          name: "button",
          component: () => import("../pages/components/Button.vue"),
        },
        {
          path: "accordion",
          name: "accordion",
          component: () => import("../pages/components/Accordion.vue"),
        },
        {
          path: "sidebar",
          name: "sidebar",
          component: () => import("../pages/components/Sidebar.vue"),
        },
      ],
    },
  ],
});

export default router;
