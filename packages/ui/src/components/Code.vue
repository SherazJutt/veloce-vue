<script setup lang="ts">
import { computed } from "vue";
import type { Severity, Size } from "@veloce/types";

const props = defineProps({
  severity: { type: String as () => Severity | "default", default: "default" },
  size: { type: String as () => Size, default: "md" },
  block: { type: Boolean, default: false },
});

const colorClasses = {
  default: "text-neutral-800 dark:text-neutral-200",
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral-700 dark:text-neutral-300",
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const classes = computed(() => {
  const baseClasses = [colorClasses[props.severity] || colorClasses.default, sizeClasses[props.size] || sizeClasses.md, "font-mono"];

  if (props.block) {
    baseClasses.push("block p-3 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mb-4");
  } else {
    baseClasses.push("px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700");
  }

  return baseClasses;
});
</script>

<template>
  <code :class="classes">
    <slot />
  </code>
</template>
