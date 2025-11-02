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
  ],
});

export default router;
