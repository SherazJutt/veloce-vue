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
        {
          path: "test",
          name: "test",
          component: () => import("../pages/test/Test.vue"),
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
        {
          path: "tooltip",
          name: "tooltip",
          component: () => import("../pages/components/Tooltip.vue"),
        },
        {
          path: "icons",
          name: "icons",
          component: () => import("../pages/components/Icons.vue"),
        },
        {
          path: "badge",
          name: "badge",
          component: () => import("../pages/components/Badge.vue"),
        },
        {
          path: "chip",
          name: "chip",
          component: () => import("../pages/components/Chip.vue"),
        },
        {
          path: "fieldset",
          name: "fieldset",
          component: () => import("../pages/components/Fieldset.vue"),
        },
        {
          path: "message",
          name: "message",
          component: () => import("../pages/components/Message.vue"),
        },
        {
          path: "progress-bar",
          name: "progress-bar",
          component: () => import("../pages/components/ProgressBar.vue"),
        },
        {
          path: "progress-spinner",
          name: "progress-spinner",
          component: () => import("../pages/components/ProgressSpinner.vue"),
        },
        {
          path: "skeleton",
          name: "skeleton",
          component: () => import("../pages/components/Skeleton.vue"),
        },
      ],
    },
  ],
});

export default router;
