<script setup lang="ts">
import { computed } from "vue";
import { Icon, type Icons } from "@veloce/icons";
import { type Severity, type Variant } from "@veloce/types";

const props = defineProps({
  severity: { type: String as () => Severity, default: "info" },
  variant: { type: String as () => Variant, default: "solid" },
  icon: { type: String as () => Icons, default: "" },
  closable: { type: Boolean, default: false },
});

const emit = defineEmits<{
  close: [];
}>();

const defaultIcons: Record<Severity, Icons> = {
  success: "check-circle",
  info: "info",
  warning: "alert",
  error: "close",
  primary: "info",
  secondary: "info",
  neutral: "info",
};

const severityClasses = {
  success: {
    solid: "bg-success-light dark:bg-success/20 text-success border-success/30",
    outlined: "border-success text-success bg-transparent",
  },
  info: {
    solid: "bg-info-light dark:bg-info/20 text-info border-info/30",
    outlined: "border-info text-info bg-transparent",
  },
  warning: {
    solid: "bg-warning-light dark:bg-warning/20 text-warning border-warning/30",
    outlined: "border-warning text-warning bg-transparent",
  },
  error: {
    solid: "bg-error-light dark:bg-error/20 text-error border-error/30",
    outlined: "border-error text-error bg-transparent",
  },
  primary: {
    solid: "bg-primary-light dark:bg-primary/20 text-primary border-primary/30",
    outlined: "border-primary text-primary bg-transparent",
  },
  secondary: {
    solid: "bg-secondary-light dark:bg-secondary/20 text-secondary border-secondary/30",
    outlined: "border-secondary text-secondary bg-transparent",
  },
  neutral: {
    solid: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700",
    outlined: "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 bg-transparent",
  },
};

const classes = computed(() => {
  const variantKey = props.variant === "outlined" ? "outlined" : "solid";
  return severityClasses[props.severity]?.[variantKey] || severityClasses.info.solid;
});

const iconToShow = computed(() => {
  return props.icon || defaultIcons[props.severity] || "info";
});

const handleClose = () => {
  emit("close");
};
</script>

<template>
  <div :class="classes" class="flex items-start gap-3 rounded border p-3">
    <template v-if="$slots.icon">
      <slot name="icon" />
    </template>
    <Icon :icon="iconToShow" class="mt-0.5 size-5 shrink-0" v-else-if="iconToShow" />
    <div class="flex-1">
      <slot />
    </div>
    <button type="button" v-if="props.closable" class="ml-auto shrink-0 rounded p-0.5 hover:bg-black/10 dark:hover:bg-white/10" @click="handleClose">
      <Icon icon="close" class="size-4" />
    </button>
  </div>
</template>
