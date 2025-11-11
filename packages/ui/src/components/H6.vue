<script setup lang="ts">
import { computed } from "vue";
import { type Severity, type FontWeight } from "@veloce/types";

const props = defineProps({
  severity: { type: String as () => Severity | "default", default: "default" },
  fontWeight: { type: String as () => FontWeight, default: "medium" },
  noMargin: { type: Boolean, default: false },
});

const colorClasses = {
  default: "text-neutral-900 dark:text-neutral-100",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral-700 dark:text-neutral-300",
};

const fontWeightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const classes = computed(() => {
  return [colorClasses[props.severity] || colorClasses.default, fontWeightClasses[props.fontWeight] || fontWeightClasses.medium, props.noMargin ? "" : "mb-1 mt-2", "text-base leading-snug "];
});
</script>

<template>
  <h6 :class="classes">
    <slot />
  </h6>
</template>
