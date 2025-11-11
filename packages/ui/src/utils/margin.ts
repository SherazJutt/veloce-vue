import type { Margin } from "@veloce/types";

export function getMargin() {
  return { margin, marginLeft, marginRight, marginTop, marginBottom };
}

const margin: Record<Margin, string> = {
  xs: "m-1",
  sm: "m-2",
  md: "m-4",
  lg: "m-6",
  xl: "m-8",
  "2xl": "m-12",
  "3xl": "m-16",
  "4xl": "m-20",
  "5xl": "m-24",
  "6xl": "m-28",
  "7xl": "m-32",
  "8xl": "m-36",
  "9xl": "m-40",
};

const marginLeft: Record<Margin, string> = {
  xs: "ml-1",
  sm: "ml-2",
  md: "ml-4",
  lg: "ml-6",
  xl: "ml-8",
  "2xl": "ml-12",
  "3xl": "ml-16",
  "4xl": "ml-20",
  "5xl": "ml-24",
  "6xl": "ml-28",
  "7xl": "ml-32",
  "8xl": "ml-36",
  "9xl": "ml-40",
};

const marginRight: Record<Margin, string> = {
  xs: "mr-1",
  sm: "mr-2",
  md: "mr-4",
  lg: "mr-6",
  xl: "mr-8",
  "2xl": "mr-12",
  "3xl": "mr-16",
  "4xl": "mr-20",
  "5xl": "mr-24",
  "6xl": "mr-28",
  "7xl": "mr-32",
  "8xl": "mr-36",
  "9xl": "mr-40",
};

const marginTop: Record<Margin, string> = {
  xs: "mt-1",
  sm: "mt-2",
  md: "mt-4",
  lg: "mt-6",
  xl: "mt-8",
  "2xl": "mt-12",
  "3xl": "mt-16",
  "4xl": "mt-20",
  "5xl": "mt-24",
  "6xl": "mt-28",
  "7xl": "mt-32",
  "8xl": "mt-36",
  "9xl": "mt-40",
};

const marginBottom: Record<Margin, string> = {
  xs: "mb-1",
  sm: "mb-2",
  md: "mb-4",
  lg: "mb-6",
  xl: "mb-8",
  "2xl": "mb-12",
  "3xl": "mb-16",
  "4xl": "mb-20",
  "5xl": "mb-24",
  "6xl": "mb-28",
  "7xl": "mb-32",
  "8xl": "mb-36",
  "9xl": "mb-40",
};
