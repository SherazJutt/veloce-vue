import Check from "../../icons/Check.vue";
import Close from "../../icons/Close.vue";
import Loading from "../../icons/Loading.vue";
import ChevronDown from "../../icons/ChevronDown.vue";
import Alert from "../../icons/Alert.vue";
import Hamburger from "../../icons/Hamburger.vue";

// Map of all icons
export const iconsMap = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
  hamburger: Hamburger,
} as const;
