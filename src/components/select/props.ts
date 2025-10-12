export const props = {
  modelValue: { type: String, default: "" },
  options: { type: Array as () => string[], required: true },
  variant: { type: String as () => "outlined" | "text" | "ghost" | "solid", default: "solid", options: ["outlined", "text", "ghost", "solid"] },
  showFilter: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
} as const;
