<script setup lang="ts">
import { computed, type Component } from "vue";
import { Icon, Loading } from "@veloce-vue/icons";
import { type Variant, type Severity, type Position, type Size, type FontWeight } from "@veloce-vue/types";

const props = defineProps({
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: { type: String as () => Variant, default: "solid" },
  severity: { type: String as () => Severity, default: "primary" },
  icon: { type: Object as () => Component, default: () => null },
  iconClass: { type: String, default: "" },
  iconPosition: { type: String as () => Position, default: "right" },
  rounded: { type: Boolean, default: false },
  size: { type: String as () => Size, default: "md" },
  fontWeight: { type: String as () => FontWeight, default: "medium" as FontWeight },
  neumorphic: { type: Boolean, default: false },
  highlighted: { type: Boolean, default: false },
});

const severityClasses = {
  primary: {
    ghost: "bg-transparent text-primary hover:bg-primary/10 dark:hover:bg-neutral-800",
    outlined: "border-primary! text-primary hover:bg-primary hover:text-inverted disabled:hover:text-primary disabled:hover:bg-primary disabled:hover:text-inverted",
    link: "text-primary hover:underline",
    soft: "bg-primary-light text-primary hover:bg-primary-light/80 dark:bg-primary/10 dark:text-primary dark:hover:bg-primary/20",
    solid: "bg-primary text-inverted hover:bg-primary/70 disabled:hover:bg-primary dark:hover:bg-primary/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
  secondary: {
    ghost: "bg-transparent text-secondary hover:bg-secondary/10 dark:hover:bg-neutral-800",
    outlined: "border-secondary! text-secondary hover:bg-secondary hover:text-inverted disabled:hover:text-secondary disabled:hover:bg-secondary disabled:hover:text-inverted",
    link: "text-secondary hover:underline",
    soft: "bg-secondary-light text-secondary hover:bg-secondary-light/80 dark:bg-secondary/10 dark:text-secondary dark:hover:bg-secondary/20",
    solid: "bg-secondary text-inverted hover:bg-secondary/70 disabled:hover:bg-secondary dark:hover:bg-secondary/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
  success: {
    ghost: "bg-transparent text-success hover:bg-success/10 dark:hover:bg-neutral-800",
    outlined: "border-success! text-success hover:bg-success hover:text-inverted disabled:hover:text-success disabled:hover:bg-success disabled:hover:text-inverted",
    link: "text-success hover:underline",
    soft: "bg-success-light text-success hover:bg-success-light/80 dark:bg-success/10 dark:text-success dark:hover:bg-success/20",
    solid: "bg-success text-inverted hover:bg-success/70 disabled:hover:bg-success dark:hover:bg-success/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
  info: {
    ghost: "bg-transparent text-info hover:bg-info/10 dark:hover:bg-neutral-800",
    outlined: "border-info! text-info hover:bg-info hover:text-inverted disabled:hover:text-info disabled:hover:bg-info disabled:hover:text-inverted",
    link: "text-info hover:underline",
    soft: "bg-info-light text-info hover:bg-info-light/80 dark:bg-info/10 dark:text-info dark:hover:bg-info/20",
    solid: "bg-info text-inverted hover:bg-info/70 disabled:hover:bg-info dark:hover:bg-info/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
  warning: {
    ghost: "bg-transparent text-warning hover:bg-warning/10 dark:hover:bg-neutral-800",
    outlined: "border-warning! text-warning hover:bg-warning hover:text-inverted disabled:hover:text-warning disabled:hover:bg-warning disabled:hover:text-inverted",
    link: "text-warning hover:underline",
    soft: "bg-warning-light text-warning hover:bg-warning-light/80 dark:bg-warning/10 dark:text-warning dark:hover:bg-warning/20",
    solid: "bg-warning text-inverted hover:bg-warning/70 disabled:hover:bg-warning dark:hover:bg-warning/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
  error: {
    ghost: "bg-transparent text-error hover:bg-error/10 dark:hover:bg-neutral-800",
    outlined: "border-error! text-error hover:bg-error hover:text-inverted disabled:hover:text-error disabled:hover:bg-error disabled:hover:text-inverted",
    link: "text-error hover:underline",
    soft: "bg-error-light text-error hover:bg-error-light/80 dark:bg-error/10 dark:text-error dark:hover:bg-error/20",
    solid: "bg-error text-inverted hover:bg-error/70 disabled:hover:bg-error dark:hover:bg-error/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
  neutral: {
    ghost: "bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800",
    outlined: "border-neutral-300! dark:border-neutral-700! text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 disabled:hover:text-neutral-700 disabled:hover:text-inverted",
    link: "text-neutral-700 dark:text-neutral-300 hover:underline",
    soft: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700",
    solid: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-100/80",
    neutral: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
  },
};

const classes = computed(() => {
  return severityClasses[props.severity]?.[props.variant] || severityClasses.primary.solid;
});
</script>

<template>
  <button
    type="button"
    :disabled="props.disabled || props.loading"
    :class="[
      classes,
      { 'rounded-full': props.rounded },
      { 'justify-center': !props.icon },
      { 'px-2 py-1 text-sm': props.size === 'sm', 'px-2.5 py-1.5 text-sm': props.size === 'md', 'px-3 py-2 text-base': props.size === 'lg', 'px-3.5 py-2.5 text-lg': props.size === 'xl' },
      { 'font-normal': props.fontWeight === 'normal', 'font-medium': props.fontWeight === 'medium', 'font-semibold': props.fontWeight === 'semibold', 'font-bold': props.fontWeight === 'bold' },
      { 'veloce-button-neumorphic': props.neumorphic },
      { 'bg-highlight': props.highlighted },
    ]"
    class="flex cursor-pointer items-center justify-center gap-2 rounded border border-transparent transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
  >
    <slot v-if="$slots.default" />
    <template v-else>
      <span v-if="props.label" :class="{ 'order-2': props.iconPosition === 'left' }"> {{ props.label }} </span>
      <Icon v-if="props.icon && !props.loading" :icon="props.icon" :class="props.iconClass" class="size-5 text-current duration-200" />
      <Icon v-if="props.loading" :icon="Loading" class="size-5 text-current duration-200" />
    </template>
  </button>
</template>
<style lang="scss">
.veloce-button-neumorphic {
  position: relative;

  &::after {
    content: " ";
    position: absolute;
    inset: -1px;
    border-top: inset;
    border-color: rgba(255, 255, 255, 0.125);
    border-top-width: 2px;
    border-radius: var(--radius);
  }
}
</style>
