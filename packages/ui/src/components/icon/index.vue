<script setup lang="ts">
import { computed } from "vue";
import { iconsList, type Icons } from "./index.ts";

// Props
const props = defineProps<{
  icon: Icons; // autocomplete for known + allow any string
  fallbackIcon?: Icons; // same for fallback
  class?: string;
  size?: number | string;
}>();

const size = computed(() => props.size ?? 24);

// component to render
const IconComponent = computed(() => {
  const key = props.icon as Icons;
  const fallbackKey = props.fallbackIcon ? props.fallbackIcon : "alert";

  return iconsList[key] ?? iconsList[fallbackKey as Icons];
});
</script>

<template>
  <component :is="IconComponent" :class="['shrink-0', props.class]" :width="size" :height="size" />
</template>
