import { type Icons } from "@veloce/icons";

// common types
export type Size = "sm" | "md" | "lg" | "xl";
export type Variant = "outlined" | "link" | "ghost" | "solid" | "soft";
export type Severity = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";
export type FontWeight = "normal" | "medium" | "semibold" | "bold";
export type Position = "left" | "right" | "top" | "bottom";
export type Direction = "horizontal" | "vertical";

// accordion types
export type AccordionItem = { title: string; content: string; slot?: string; icon?: Icons; active?: boolean };
