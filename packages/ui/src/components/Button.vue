<script setup lang="ts">
import { computed } from "vue";
import { Icon, type Icons } from "@veloce/icons";

const props = defineProps({
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: { type: String as () => "outlined" | "link" | "ghost" | "solid" | "soft", default: "solid" },
  icon: { type: String as () => Icons, default: "" },
  iconClass: { type: String, default: "" },
  iconPosition: { type: String as () => "left" | "right", default: "right" },
  rounded: { type: Boolean, default: false },
  size: { type: String as () => "sm" | "md" | "lg", default: "sm" },
});

const classes = computed(() => {
  switch (props.variant) {
    case "ghost":
      return "bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-100 disabled:hover:bg-transparent";
    case "outlined":
      return "border-primary! text-primary hover:bg-primary hover:text-inverted disabled:hover:bg-transparent disabled:hover:text-primary disabled:hover:bg-primary disabled:hover:text-inverted";
    case "link":
      return "text-neutral-700 hover:underline dark:text-neutral-200";
    case "soft":
      return "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700";
    default:
      return "bg-primary text-inverted hover:bg-primary/70 disabled:hover:bg-primary dark:hover:bg-primary/80"; // solid (default)
  }
});
</script>

<template>
  <!-- prettier-ignore -->
  <button 
    type="button" 
    :disabled="props.disabled || props.loading" 
    :class="[
      classes, { 'rounded-full': props.rounded }, 
      'flex cursor-pointer items-center justify-center font-medium gap-2 rounded border disabled:opacity-75 border-transparent transition-all duration-200 disabled:cursor-not-allowed focus:outline-none',
      { 'justify-center': !props.icon },
      {'p-1 px-2 text-sm': props.size === 'sm', 'p-2 px-3 text-base': props.size === 'md', 'p-3 px-4 text-lg': props.size === 'lg'},
    ]"
  >
      <span v-if="props.label" :class="{ 'order-2': props.iconPosition === 'left' }"> {{ props.label }} </span>
      <Icon v-if="props.icon && !props.loading" :icon="props.icon" :class="props.iconClass" class="duration-200 size-5 text-current" />
      <Icon v-if="props.loading" icon="loading" class="duration-200 size-5 text-current" />
  </button>
</template>
