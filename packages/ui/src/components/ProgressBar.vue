<script setup lang="ts">
import { computed } from "vue";
import type { Severity } from "@veloce-vue/types";

const props = defineProps({
  value: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  severity: { type: String as () => Severity, default: "primary" },
  striped: { type: Boolean, default: false },
  animated: { type: Boolean, default: false },
  mode: { type: String as () => "indeterminate" | "determinate", default: "determinate" },
  textColor: { type: String as () => Severity | "white", default: "white" },
});

const percentage = computed(() => {
  const val = Math.min(Math.max(props.value, 0), props.max);
  return (val / props.max) * 100;
});

const severityClasses = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
  neutral: "bg-neutral-500",
};

const textColorClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  info: "text-info",
  warning: "text-warning",
  error: "text-error",
  neutral: "text-neutral-500",
  white: "text-white",
};

const barClasses = computed(() => {
  return [severityClasses[props.severity] || severityClasses.primary, { "bg-stripes": props.striped }, { "animate-pulse": props.animated }];
});
</script>

<template>
  <div class="w-full">
    <div :class="{ 'h-4': props.mode === 'determinate', 'h-1.5': props.mode === 'indeterminate' }" class="w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
      <div :class="barClasses" class="h-full transition-all duration-500 ease-out" :style="{ width: `${percentage}%` }">
        <div v-if="props.mode === 'determinate'" :class="textColorClasses[props.textColor]" class="px-2 text-center text-xs font-medium">{{ Math.round(percentage) }}%</div>
      </div>
    </div>
  </div>
</template>
