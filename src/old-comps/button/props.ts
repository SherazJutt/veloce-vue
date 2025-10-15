import type { PropType } from "vue";

export const variantOptions = ["outlined", "text", "ghost", "solid"] as const;

export const props = {
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String as PropType<(typeof variantOptions)[number]>,
    default: "solid",
    options: variantOptions,
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
