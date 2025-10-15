import Check from "../../icons/check.vue";
import Close from "../../icons/close.vue";
import Loading from "../../icons/loading.vue";
import ChevronDown from "../../icons/chevron-down.vue";
import Alert from "../../icons/alert.vue";
import Hamburger from "../../icons/hamburger.vue";

// Map of all icons
export const icons = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
  hamburger: Hamburger,
} as const;

// icons names for autocomplete
export type IconNames = keyof typeof icons;
export const IconsList = Object.keys(icons) as IconNames[];
