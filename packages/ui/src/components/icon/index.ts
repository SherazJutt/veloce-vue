import type { Component } from "vue";
import Check from "../../icons/check.vue";
import Close from "../../icons/close.vue";
import Loading from "../../icons/loading.vue";
import ChevronDown from "../../icons/chevron-down.vue";
import Alert from "../../icons/alert.vue";

// Map of all icons
const iconsMap = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
} as const;

// icons names for autocomplete
export type Icons = keyof typeof iconsMap;
export const Icons: Record<Icons, Component> = iconsMap;
export const iconsList = Object.keys(iconsMap) as Icons[];
export { default as Icon } from "./index.vue";
