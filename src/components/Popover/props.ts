export const props = {
  position: { type: String as () => "left" | "center" | "right", default: "center", options: ["left", "center", "right"] },
  bodyClass: { type: String, default: "" },
  contentClass: { type: String, default: "" },
} as const;
