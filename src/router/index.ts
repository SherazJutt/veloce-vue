import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../pages/home/Index.vue") },
    {
      path: "/book",
      component: () => import("../layouts/Book.vue"),
      children: [{ path: "", component: () => import("../pages/Book.vue") }],
    },
  ],
});

export default router;
