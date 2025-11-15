import type { Padding } from "@veloce-vue/types";

export function getPadding() {
  return { padding, paddingLeft, paddingRight, paddingTop, paddingBottom };
}

const padding: Record<Padding, string> = {
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
  "2xl": "p-12",
  "3xl": "p-16",
  "4xl": "p-20",
  "5xl": "p-24",
  "6xl": "p-28",
  "7xl": "p-32",
  "8xl": "p-36",
  "9xl": "p-40",
};

const paddingLeft: Record<Padding, string> = {
  xs: "pl-1",
  sm: "pl-2",
  md: "pl-4",
  lg: "pl-6",
  xl: "pl-8",
  "2xl": "pl-12",
  "3xl": "pl-16",
  "4xl": "pl-20",
  "5xl": "pl-24",
  "6xl": "pl-28",
  "7xl": "pl-32",
  "8xl": "pl-36",
  "9xl": "pl-40",
};

const paddingRight: Record<Padding, string> = {
  xs: "pr-1",
  sm: "pr-2",
  md: "pr-4",
  lg: "pr-6",
  xl: "pr-8",
  "2xl": "pr-12",
  "3xl": "pr-16",
  "4xl": "pr-20",
  "5xl": "pr-24",
  "6xl": "pr-28",
  "7xl": "pr-32",
  "8xl": "pr-36",
  "9xl": "pr-40",
};

const paddingTop: Record<Padding, string> = {
  xs: "pt-1",
  sm: "pt-2",
  md: "pt-4",
  lg: "pt-6",
  xl: "pt-8",
  "2xl": "pt-12",
  "3xl": "pt-16",
  "4xl": "pt-20",
  "5xl": "pt-24",
  "6xl": "pt-28",
  "7xl": "pt-32",
  "8xl": "pt-36",
  "9xl": "pt-40",
};

const paddingBottom: Record<Padding, string> = {
  xs: "pb-1",
  sm: "pb-2",
  md: "pb-4",
  lg: "pb-6",
  xl: "pb-8",
  "2xl": "pb-12",
  "3xl": "pb-16",
  "4xl": "pb-20",
  "5xl": "pb-24",
  "6xl": "pb-28",
  "7xl": "pb-32",
  "8xl": "pb-36",
  "9xl": "pb-40",
};
