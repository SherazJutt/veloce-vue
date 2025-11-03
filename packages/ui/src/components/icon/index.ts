import type { Component } from "vue";
import { iconsMap } from "./icons";

// icons names for autocomplete
export type Icons = keyof typeof iconsMap;
export const Icons: Record<Icons, Component> = iconsMap;
export const iconsList = Object.keys(iconsMap) as Icons[];

export { default as Icon } from "./Icon.vue";
