<script setup lang="ts">
import { computed, type Component } from "vue";
import { Icon, CheckCircle, Info, Alert, Close } from "@veloce-vue/icons";
import type { Margin, Padding, Severity, Variant } from "@veloce-vue/types";
import { getMargin, getPadding } from "@veloce-vue/utils";
const { margin, marginLeft, marginRight, marginTop, marginBottom } = getMargin();
const { padding, paddingLeft, paddingRight, paddingTop, paddingBottom } = getPadding();

const props = defineProps({
  severity: { type: String as () => Severity, default: "info" },
  variant: { type: String as () => Variant, default: "solid" },
  icon: { type: Object as () => Component, default: () => null },
  closable: { type: Boolean, default: false },
  // margin
  margin: { type: String as () => Margin, default: "" },
  marginLeft: { type: String as () => Margin, default: "" },
  marginRight: { type: String as () => Margin, default: "" },
  marginTop: { type: String as () => Margin, default: "lg" },
  marginBottom: { type: String as () => Margin, default: "md" },
  // padding
  padding: { type: String as () => Padding, default: "" },
  paddingLeft: { type: String as () => Padding, default: "" },
  paddingRight: { type: String as () => Padding, default: "" },
  paddingTop: { type: String as () => Padding, default: "" },
  paddingBottom: { type: String as () => Padding, default: "" },
});

const emit = defineEmits<{
  close: [];
}>();

const defaultIcons: Record<Severity, Component> = {
  success: CheckCircle,
  info: Info,
  warning: Alert,
  error: Close,
  primary: Info,
  secondary: Info,
  neutral: Info,
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

const marginPaddingClasses = computed(() => {
  return [
    // margin
    margin[props.margin],
    marginLeft[props.marginLeft],
    marginRight[props.marginRight],
    marginTop[props.marginTop],
    marginBottom[props.marginBottom],
    // padding
    padding[props.padding],
    paddingLeft[props.paddingLeft],
    paddingRight[props.paddingRight],
    paddingTop[props.paddingTop],
    paddingBottom[props.paddingBottom],
  ];
});

const iconToShow = computed(() => {
  return props.icon || defaultIcons[props.severity] || Info;
});

const handleClose = () => {
  emit("close");
};
</script>

<template>
  <div :class="[classes, marginPaddingClasses]" class="flex items-start gap-3 rounded border p-3">
    <template v-if="$slots.icon">
      <slot name="icon" />
    </template>
    <Icon :icon="iconToShow" class="mt-0.5 size-5 shrink-0" v-else-if="iconToShow" />
    <div class="flex-1">
      <slot />
    </div>
    <Icon v-if="props.closable" :icon="Close" class="ml-auto shrink-0 cursor-pointer rounded p-0.5 duration-100 hover:bg-black/10 dark:hover:bg-white/10" @click="handleClose" />
  </div>
</template>
