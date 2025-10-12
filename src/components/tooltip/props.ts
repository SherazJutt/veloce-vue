export const props = {
  content: { type: String, default: "" },
  position: { type: String as () => "top" | "bottom" | "left" | "right", default: "bottom", options: ["top", "bottom", "left", "right"] },
  bodyClass: { type: String, default: "" },
} as const;
