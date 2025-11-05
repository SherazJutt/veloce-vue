import Check from "../../icons/Check.vue";
import Close from "../../icons/Close.vue";
import Loading from "../../icons/Loading.vue";
import ChevronDown from "../../icons/ChevronDown.vue";
import Alert from "../../icons/Alert.vue";
import Hamburger from "../../icons/Hamburger.vue";
import Sun from "../../icons/Sun.vue";
import Moon from "../../icons/Moon.vue";
import Eye from "../../icons/Eye.vue";
import EyeOff from "../../icons/EyeOff.vue";

// Map of all icons
export const iconsMap = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
  hamburger: Hamburger,
  sun: Sun,
  moon: Moon,
  eye: Eye,
  "eye-off": EyeOff,
} as const;
