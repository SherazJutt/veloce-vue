export const props = {
  direction: { type: String as () => "horizontal" | "vertical", default: "horizontal", options: ["horizontal", "vertical"] },
  color: { type: String, default: "#16476A" },
  label: { type: String, default: "" },
  icon: { type: String, default: "" },
} as const;
