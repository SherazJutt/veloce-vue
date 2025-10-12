export const props = {
  position: { type: String as () => "top" | "bottom", default: "bottom", options: ["top", "bottom"] },
  bodyClass: { type: String, default: "" },
  contentClass: { type: String, default: "" },
} as const;
