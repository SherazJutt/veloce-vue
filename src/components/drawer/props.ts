export const props = {
  direction: { type: String as () => "left" | "bottom" | "right", default: "bottom", options: ["left", "bottom", "right"] },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  showFooter: { type: Boolean, default: false },
  show: { type: Boolean, default: false },
} as const;
