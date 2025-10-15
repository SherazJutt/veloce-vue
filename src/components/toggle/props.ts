export const props = {
  variant: { type: String as () => "primary" | "secondary" | "default", default: "default", options: ["primary", "secondary", "default"] },
  disabled: { type: Boolean, default: false },
} as const;
