<script setup lang="ts">
import { Icon, Check } from "../exports/icons";
import { computed, type Component } from "vue";

type CheckboxSize = "sm" | "md" | "lg";
type CheckboxVariant = "primary" | "secondary" | "success" | "info" | "error" | "warning";

const props = defineProps({
  label: { type: String, default: "" },
  labelClass: { type: String, default: "" },
  checkboxClass: { type: String, default: "" },
  size: { type: String as () => CheckboxSize, default: "md" },
  variant: { type: String as () => CheckboxVariant, default: "primary" },
  icon: { type: Object as () => Component, default: () => Check },
  iconClass: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

const model = defineModel<boolean>({ required: true });

const getSizeClasses = computed(() => {
  const sizes = {
    sm: {
      checkbox: "size-4",
      icon: "size-3",
      gap: "gap-1.5",
      text: "text-sm",
    },
    md: {
      checkbox: "size-5",
      icon: "size-5",
      gap: "gap-2",
      text: "text-base",
    },
    lg: {
      checkbox: "size-6",
      icon: "size-6",
      gap: "gap-2.5",
      text: "text-lg",
    },
  };
  return sizes[props.size];
});

const getVariantClasses = computed(() => {
  const variants = {
    primary: {
      bg: "bg-primary",
      border: "border-primary",
      text: "text-white",
      hover: "hover:border-primary/70",
    },
    secondary: {
      bg: "bg-secondary",
      border: "border-secondary",
      text: "text-white",
      hover: "hover:border-secondary/70",
    },
    success: {
      bg: "bg-success",
      border: "border-success",
      text: "text-white",
      hover: "hover:border-success/70",
    },
    info: {
      bg: "bg-info",
      border: "border-info",
      text: "text-white",
      hover: "hover:border-info/70",
    },
    warning: {
      bg: "bg-warning",
      border: "border-warning",
      text: "text-white",
      hover: "hover:border-warning/70",
    },
    error: {
      bg: "bg-error",
      border: "border-error",
      text: "text-white",
      hover: "hover:border-error/70",
    },
  };
  return variants[props.variant];
});
</script>

<template>
  <div :class="[getSizeClasses.gap, props.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']" class="flex w-fit items-center select-none" @click="!props.disabled ? (model = !model) : null">
    <div
      :class="[getSizeClasses.checkbox, model ? [getVariantClasses.bg, getVariantClasses.border] : [getVariantClasses.border, props.disabled ? 'opacity-50' : getVariantClasses.hover], checkboxClass]"
      class="m-0 flex items-center justify-center rounded-sm border-2 duration-200"
    >
      <Icon v-if="model" :icon="icon" :class="`${getSizeClasses.icon} ${getVariantClasses.text} ${iconClass}`" />
    </div>
    <div :class="[labelClass, getSizeClasses.text]">{{ label }}</div>
  </div>
</template>
