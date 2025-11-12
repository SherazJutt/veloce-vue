import { type Icons } from "@veloce/icons";

// =common types =============================================================

type Sizes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";

export type Size = "sm" | "md" | "lg" | "xl";
export type Variant = "outlined" | "link" | "ghost" | "solid" | "soft";
export type Severity = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";
export type Position = "left" | "right" | "top" | "bottom";
export type Direction = "horizontal" | "vertical";

export type Margin = Sizes;
export type Padding = Sizes;

// =typography types ========================================================
export type FontSize = Sizes;
export type FontWeight = "light" | "normal" | "medium" | "semibold" | "bold" | "black";
export type TextColor = Severity | "default" | "muted";
export type LineHeight = Sizes;
export type LetterSpacing = Sizes;

// =accordion types ========================================================
export type AccordionItem = { title: string; content: string; slot?: string; icon?: Icons; active?: boolean };

// =json renderer types ========================================================
type CommonTypographyProps = {
  fontSize?: FontSize;
  color?: TextColor;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  margin?: Margin;
  marginLeft?: Margin;
  marginRight?: Margin;
  marginTop?: Margin;
  marginBottom?: Margin;
  padding?: Padding;
  paddingLeft?: Padding;
  paddingRight?: Padding;
  paddingTop?: Padding;
  paddingBottom?: Padding;
};

type JsonRendererItemBase<TProps = CommonTypographyProps> = {
  props?: TProps;
  id?: string;
  slot?: string | any;
};

export type JsonRendererItem =
  | ({ component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "blockquote" } & JsonRendererItemBase<CommonTypographyProps>)
  | ({ component: "code" } & JsonRendererItemBase<CommonTypographyProps & { block?: boolean }>)
  | ({ component: "label" } & JsonRendererItemBase<CommonTypographyProps & { required?: boolean }>);
