<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";
import * as icons from "../../exports/icons";
import type { IconName } from "../../exports/icons";

const props = defineProps<{
  icon: IconName | Component;
  class?: string;
  size?: number | string;
}>();

const size = computed(() => props.size ?? 24);
const IconComponent = computed(() => {
  // If no icon is provided, return null
  if (!props.icon) return null;

  // If it's a string (icon name), look it up from icons
  if (typeof props.icon === "string") {
    return (icons as Record<string, Component>)[props.icon];
  }
  // Otherwise, it's already a component
  return props.icon;
});
</script>

<template>
  <component :is="IconComponent" v-if="IconComponent" :class="['shrink-0', props.class]" :width="size" :height="size" />
  <slot v-else />
</template>
