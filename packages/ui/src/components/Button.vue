<script setup lang="ts">
import { computed } from "vue";
import { Icon, type Icons } from "@veloce/icons";

const props = defineProps({
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: { type: String as () => "outlined" | "text" | "ghost" | "solid" | "gray", default: "solid" },
  icon: { type: String as () => Icons, default: "" },
  iconClass: { type: String, default: "" },
  iconPosition: { type: String as () => "left" | "right", default: "right" },
  rounded: { type: Boolean, default: false },
  size: { type: String as () => "sm" | "md" | "lg", default: "md" },
});

const classes = computed(() => {
  switch (props.variant) {
    case "outlined":
      return "!border-primary/20 text-primary bg-white hover:!border-primary hover:bg-primary/5 disabled:hover:bg-white disabled:hover:!border-primary/20 disabled:opacity-50";
    case "text":
      return "bg-transparent text-gray-700 hover:bg-gray-100/80 disabled:hover:bg-transparent disabled:opacity-50";
    case "ghost":
      return "text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 disabled:hover:bg-gray-50 disabled:opacity-50";
    case "gray":
      return "bg-gray-900 text-white hover:bg-gray-800 disabled:hover:bg-gray-900 disabled:opacity-50";
    default:
      return "bg-primary text-white hover:bg-primary/90 disabled:hover:bg-primary disabled:opacity-50"; // solid (default)
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
      'flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent text-sm transition-all duration-200 disabled:cursor-not-allowed focus:outline-none',
      { 'justify-center': !props.icon },
      {'p-1 px-2': props.size === 'sm', 'p-2 px-3': props.size === 'md', 'p-3 px-4': props.size === 'lg'},
    ]"
  >
      <span v-if="props.label" :class="{ 'order-2': props.iconPosition === 'left' }"> {{ props.label }} </span>
      <Icon v-if="props.icon && !props.loading" :icon="props.icon" :class="props.iconClass" class="duration-200 size-5 text-current" />
      <Icon v-if="props.loading" icon="loading" class="duration-200 size-5 text-current" />
  </button>
</template>
