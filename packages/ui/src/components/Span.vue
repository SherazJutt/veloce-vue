<script setup lang="ts">
import { computed } from "vue";
import { type Severity, type FontWeight, type Size } from "@veloce/types";

const props = defineProps({
  severity: { type: String as () => Severity | "default" | "muted", default: "default" },
  fontWeight: { type: String as () => FontWeight, default: "normal" },
  size: { type: String as () => Size, default: "md" },
});

const colorClasses = {
  default: "text-neutral-700 dark:text-neutral-300",
  muted: "text-neutral-500 dark:text-neutral-400",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral-600 dark:text-neutral-400",
};

const fontWeightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const classes = computed(() => {
  return [
    colorClasses[props.severity] || colorClasses.default,
    fontWeightClasses[props.fontWeight] || fontWeightClasses.normal,
    sizeClasses[props.size] || sizeClasses.md,
  ];
});
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>

