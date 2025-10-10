import { IconsList } from "../components/icon";

export function generateStoryControls(props: Record<string, any>) {
  const args: Record<string, any> = {};
  const argTypes: Record<string, any> = {};

  for (const [key, val] of Object.entries(props)) {
    // this will skip the iconClass completely from the args and argTypes
    // --- skip iconClass
    if (key === "iconClass") {
      continue;
    }

    // --- default value (this will set the default value for the args)
    args[key] = val.default;

    // this will set the icon control to select with the options from the IconsList
    if (key === "icon") {
      argTypes[key] = { control: "select", options: IconsList };
      continue;
    }

    // --- select controls (union-like)
    if (val.options) {
      argTypes[key] = { control: "select", options: val.options };
      continue;
    }

    // --- boolean
    if (typeof val.default === "boolean") {
      argTypes[key] = { control: "boolean" };
      continue;
    }

    // --- string
    if (typeof val.default === "string") {
      argTypes[key] = { control: "text" };
      continue;
    }

    // --- number
    if (typeof val.default === "number") {
      argTypes[key] = { control: "number" };
      continue;
    }

    // --- fallback (no control)
    argTypes[key] = { control: false };
  }

  return { args, argTypes };
}
