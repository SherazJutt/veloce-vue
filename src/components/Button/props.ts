import type { PropType } from "vue";

export const props = {
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String as PropType<"outlined" | "text" | "ghost" | "solid">,
    default: "solid",
    options: ["outlined", "text", "ghost", "solid"],
  },
  icon: { type: String, default: "" },
  iconClass: { type: String, default: "" },
  iconPosition: {
    type: String as PropType<"left" | "right">,
    default: "right",
    options: ["left", "right"],
  },
  rounded: { type: Boolean, default: false },
} as const;
