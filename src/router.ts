import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),

	routes: [
		{ path: "/", name: "Home", component: () => import("./pages/index.vue") },

		{ path: "/:catchAll(.*)*", component: () => import("./pages/404.vue") },
	],
});

export default router;
