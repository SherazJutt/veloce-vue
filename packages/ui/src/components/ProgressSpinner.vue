<script setup lang="ts">
import { computed } from "vue";
import { type Severity, type Size } from "@veloce/types";

const props = defineProps({
  severity: { type: String as () => Severity, default: "primary" },
  size: { type: String as () => Size, default: "md" },
});

const severityClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral-500",
};

const sizeClasses = {
  sm: "size-8",
  md: "size-12",
  lg: "size-16",
  xl: "size-24",
};

const classes = computed(() => {
  return [severityClasses[props.severity] || severityClasses.primary, sizeClasses[props.size] || sizeClasses.md];
});
</script>

<template>
  <svg :class="classes" class="animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" />
    <path class="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" />
  </svg>
</template>
