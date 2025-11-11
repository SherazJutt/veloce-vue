import type { Padding } from "@veloce/types";

export function getPadding() {
  return { padding, paddingLeft, paddingRight, paddingTop, paddingBottom };
}

const padding: Record<Padding, string> = {
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-8",
  xl: "p-12",
  "2xl": "p-16",
  "3xl": "p-20",
  "4xl": "p-24",
  "5xl": "p-28",
  "6xl": "p-32",
  "7xl": "p-36",
  "8xl": "p-40",
  "9xl": "p-44",
};

const paddingLeft: Record<Padding, string> = {
  xs: "pl-1",
  sm: "pl-2",
  md: "pl-4",
  lg: "pl-8",
  xl: "pl-12",
  "2xl": "pl-16",
  "3xl": "pl-20",
  "4xl": "pl-24",
  "5xl": "pl-28",
  "6xl": "pl-32",
  "7xl": "pl-36",
  "8xl": "pl-40",
  "9xl": "pl-44",
};

const paddingRight: Record<Padding, string> = {
  xs: "pr-1",
  sm: "pr-2",
  md: "pr-4",
  lg: "pr-8",
  xl: "pr-12",
  "2xl": "pr-16",
  "3xl": "pr-20",
  "4xl": "pr-24",
  "5xl": "pr-28",
  "6xl": "pr-32",
  "7xl": "pr-36",
  "8xl": "pr-40",
  "9xl": "pr-44",
};

const paddingTop: Record<Padding, string> = {
  xs: "pt-1",
  sm: "pt-2",
  md: "pt-4",
  lg: "pt-8",
  xl: "pt-12",
  "2xl": "pt-16",
  "3xl": "pt-20",
  "4xl": "pt-24",
  "5xl": "pt-28",
  "6xl": "pt-32",
  "7xl": "pt-36",
  "8xl": "pt-40",
  "9xl": "pt-44",
};

const paddingBottom: Record<Padding, string> = {
  xs: "pb-1",
  sm: "pb-2",
  md: "pb-4",
  lg: "pb-8",
  xl: "pb-12",
  "2xl": "pb-16",
  "3xl": "pb-20",
  "4xl": "pb-24",
  "5xl": "pb-28",
  "6xl": "pb-32",
  "7xl": "pb-36",
  "8xl": "pb-40",
  "9xl": "pb-44",
};
