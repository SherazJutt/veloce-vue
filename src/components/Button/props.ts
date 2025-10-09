import type { PropType, ExtractPropTypes } from "vue";

export type variant = "outlined" | "text" | "ghost" | "solid";
export type iconPosition = "left" | "right";

export const props = {
  label: { type: String, default: "Label" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: { type: String as PropType<variant>, default: "solid" },
  icon: { type: String, default: "" },
  iconClass: { type: String, default: "" },
  iconPosition: { type: String as PropType<iconPosition>, default: "right" },
  rounded: { type: Boolean, default: false },
} as const;

// Auto-derived prop types
export type PropsTypes = ExtractPropTypes<typeof props>;
