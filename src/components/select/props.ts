export const props = {
  modelValue: { type: String, default: "" },
  options: { type: Array as () => string[], required: true },
  variant: { type: String as () => "outlined" | "text" | "ghost" | "solid" | "gray", default: "solid", options: ["outlined", "text", "ghost", "solid", "gray"] },
  showFilter: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
  closeOnClickOutside: { type: Boolean, default: true },
} as const;
