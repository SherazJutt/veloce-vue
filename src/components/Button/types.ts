export type ButtonVariant = "outlined" | "text" | "ghost" | "solid";
export type ButtonIconPosition = "left" | "right";

export interface ButtonProps {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: string;
  iconClass?: string;
  iconPosition?: ButtonIconPosition;
  circle?: boolean;
}
