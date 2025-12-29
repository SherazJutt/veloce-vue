export * from "../components/icon/icons";
export { default as Icon } from "../components/icon/Icon.vue";

import * as icons from "../components/icon/icons";

export const IconsList = (): string[] => Object.keys(icons).filter((name) => name !== "Icon");

export type IconName = Exclude<keyof typeof icons, "Icon">;
