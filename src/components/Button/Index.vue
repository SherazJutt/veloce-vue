<script setup lang="ts">
import { computed } from "vue";
import { props as buttonProps } from "./props";
import Icon from "../Icon.vue";

const props = defineProps(buttonProps);

const classes = computed(() => {
  switch (props.variant) {
    case "outlined":
      return "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white";
    case "text":
      return "bg-transparent text-primary hover:bg-gray-200";
    case "ghost":
      return "text-primary bg-gray-100 hover:bg-gray-200";
    default:
      return "bg-primary text-white hover:bg-primary/75"; // solid
  }
});
</script>

<template>
  <button type="button" :disabled="props.disabled || props.loading" :class="[classes, { 'rounded-full': props.rounded }, 'flex cursor-pointer items-center justify-center gap-2 rounded border border-transparent px-3 py-2 transition duration-200 disabled:cursor-not-allowed disabled:opacity-50']">
    <div
      :class="{
        'justify-center': !props.icon,
      }"
      class="flex w-full items-center justify-between gap-2"
    >
      <span v-if="props.label" :class="{ 'order-2': props.iconPosition === 'left' }">
        {{ props.label }}
      </span>
      <Icon v-if="props.icon && !props.loading" :icon="props.icon" :class="props.iconClass" :size="24" />
    </div>

    <Icon v-if="props.loading" icon="loading0" fallback-icon="Alert" :size="240" />
  </button>
</template>
