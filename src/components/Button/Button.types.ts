export interface ButtonProps {
  label?: string;
  color?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export type ButtonEmits = {
  (e: "click", event: MouseEvent): void;
};
