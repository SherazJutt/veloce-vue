export const props = {
  icon: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  helpText: { type: String, default: "" },
  type: { type: String, default: "text", options: ["text", "password"] },
} as const;
