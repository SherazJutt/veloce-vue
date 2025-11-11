import type { FontSize, FontWeight, LetterSpacing, LineHeight, TextColor } from "@veloce/types";

export function getTypography() {
  return { fontSizes, fontWeights, textColors, lineHeights, letterSpacings };
}

const fontSizes: Record<FontSize, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

const fontWeights: Record<FontWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  black: "font-black",
};

const textColors: Record<TextColor, string> = {
  default: "",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral-700 dark:text-neutral-300",
  muted: "text-neutral-500 dark:text-neutral-400",
};

const lineHeights: Record<LineHeight, string> = {
  xs: "leading-[1]",
  sm: "leading-[1.15]",
  md: "leading-[1.25]",
  lg: "leading-[1.5]",
  xl: "leading-[1.75]",
  "2xl": "leading-[2]",
  "3xl": "leading-[3]",
  "4xl": "leading-[4]",
  "5xl": "leading-[5]",
  "6xl": "leading-[6]",
  "7xl": "leading-[7]",
  "8xl": "leading-[8]",
  "9xl": "leading-[9]",
};

const letterSpacings: Record<LetterSpacing, string> = {
  xs: "tracking-[-0.05em]",
  sm: "tracking-[-0.025em]",
  md: "tracking-[0]",
  lg: "tracking-[0.25em]",
  xl: "tracking-[0.5em]",
  "2xl": "tracking-[0.75em]",
  "3xl": "tracking-[1em]",
  "4xl": "tracking-[1.25em]",
  "5xl": "tracking-[1.5em]",
  "6xl": "tracking-[1.75em]",
  "7xl": "tracking-[2em]",
  "8xl": "tracking-[2.25em]",
  "9xl": "tracking-[2.5em]",
};
