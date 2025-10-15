import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../pages/home/Index.vue") },
    { path: "/book", component: () => import("../pages/book/Index.vue") },
  ],
});

export default router;
