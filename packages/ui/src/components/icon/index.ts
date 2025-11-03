import type { Component } from "vue";
import Check from "../../icons/Check.vue";
import Close from "../../icons/Close.vue";
import Loading from "../../icons/Loading.vue";
import ChevronDown from "../../icons/ChevronDown.vue";
import Alert from "../../icons/Alert.vue";
import Hamburger from "../../icons/Hamburger.vue";

// Map of all icons
const iconsMap = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
  hamburger: Hamburger,
} as const;

// icons names for autocomplete
export type Icons = keyof typeof iconsMap;
export const Icons: Record<Icons, Component> = iconsMap;
export const iconsList = Object.keys(iconsMap) as Icons[];
export { default as Icon } from "./index.vue";
