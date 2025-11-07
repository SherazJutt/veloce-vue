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
          path: "checkbox",
          name: "checkbox",
          component: () => import("../pages/components/Checkbox.vue"),
        },
        {
          path: "drawer",
          name: "drawer",
          component: () => import("../pages/components/Drawer.vue"),
        },
        {
          path: "input",
          name: "input",
          component: () => import("../pages/components/Input.vue"),
        },
        {
          path: "modal",
          name: "modal",
          component: () => import("../pages/components/Modal.vue"),
        },
        {
          path: "popover",
          name: "popover",
          component: () => import("../pages/components/Popover.vue"),
        },
        {
          path: "range-slider",
          name: "range-slider",
          component: () => import("../pages/components/RangeSlider.vue"),
        },
        {
          path: "select",
          name: "select",
          component: () => import("../pages/components/Select.vue"),
        },
        {
          path: "separator",
          name: "separator",
          component: () => import("../pages/components/Separator.vue"),
        },
        {
          path: "switch",
          name: "switch",
          component: () => import("../pages/components/Switch.vue"),
        },
      ],
    },
  ],
});

export default router;
