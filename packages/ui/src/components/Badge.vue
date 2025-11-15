<script setup lang="ts">
import { computed } from "vue";
import { type Severity, type Size } from "@veloce-vue/types";

const props = defineProps({
  value: { type: [String, Number], default: "" },
  severity: { type: String as () => Severity, default: "primary" },
  size: { type: String as () => Size, default: "md" },
  dot: { type: Boolean, default: false },
});

const severityClasses = {
  primary: "bg-primary text-inverted",
  secondary: "bg-secondary text-inverted",
  success: "bg-success text-inverted",
  info: "bg-info text-inverted",
  warning: "bg-warning text-inverted",
  error: "bg-error text-inverted",
  neutral: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200",
};

const getSizeClass = (size: Size, isDot: boolean) => {
  if (isDot) {
    const dotSizes = {
      sm: "size-2",
      md: "size-2.5",
      lg: "size-3",
      xl: "size-4",
    };
    return dotSizes[size] || dotSizes.md;
  }
  const badgeSizes = {
    sm: "min-w-4 h-4 text-xs",
    md: "min-w-5 h-5 text-xs",
    lg: "min-w-6 h-6 text-sm",
    xl: "min-w-8 h-8 text-base",
  };
  return badgeSizes[size] || badgeSizes.md;
};

const classes = computed(() => {
  return [severityClasses[props.severity] || severityClasses.primary, getSizeClass(props.size, props.dot), props.dot ? "rounded-full" : "rounded-full flex items-center justify-center font-semibold"];
});
</script>

<template>
  <span :class="classes" class="flex items-center justify-center">
    <slot v-if="$slots.default" />
    <span v-else-if="!props.dot">{{ props.value }}</span>
    <slot v-if="props.dot" />
  </span>
</template>
