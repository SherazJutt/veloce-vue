import type { Margin } from "@veloce/types";

export function getMargin() {
  return { margin, marginLeft, marginRight, marginTop, marginBottom };
}

const margin: Record<Margin, string> = {
  xs: "m-1",
  sm: "m-2",
  md: "m-4",
  lg: "m-8",
  xl: "m-12",
  "2xl": "m-16",
  "3xl": "m-20",
  "4xl": "m-24",
  "5xl": "m-28",
  "6xl": "m-32",
  "7xl": "m-36",
  "8xl": "m-40",
  "9xl": "m-44",
};

const marginLeft: Record<Margin, string> = {
  xs: "ml-1",
  sm: "ml-2",
  md: "ml-4",
  lg: "ml-8",
  xl: "ml-12",
  "2xl": "ml-16",
  "3xl": "ml-20",
  "4xl": "ml-24",
  "5xl": "ml-28",
  "6xl": "ml-32",
  "7xl": "ml-36",
  "8xl": "ml-40",
  "9xl": "ml-44",
};

const marginRight: Record<Margin, string> = {
  xs: "mr-1",
  sm: "mr-2",
  md: "mr-4",
  lg: "mr-8",
  xl: "mr-12",
  "2xl": "mr-16",
  "3xl": "mr-20",
  "4xl": "mr-24",
  "5xl": "mr-28",
  "6xl": "mr-32",
  "7xl": "mr-36",
  "8xl": "mr-40",
  "9xl": "mr-44",
};

const marginTop: Record<Margin, string> = {
  xs: "mt-1",
  sm: "mt-2",
  md: "mt-4",
  lg: "mt-8",
  xl: "mt-12",
  "2xl": "mt-16",
  "3xl": "mt-20",
  "4xl": "mt-24",
  "5xl": "mt-28",
  "6xl": "mt-32",
  "7xl": "mt-36",
  "8xl": "mt-40",
  "9xl": "mt-44",
};

const marginBottom: Record<Margin, string> = {
  xs: "mb-1",
  sm: "mb-2",
  md: "mb-4",
  lg: "mb-8",
  xl: "mb-12",
  "2xl": "mb-16",
  "3xl": "mb-20",
  "4xl": "mb-24",
  "5xl": "mb-28",
  "6xl": "mb-32",
  "7xl": "mb-36",
  "8xl": "mb-40",
  "9xl": "mb-44",
};
