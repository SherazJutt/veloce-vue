<script setup lang="ts">
import { computed } from "vue";
import { icons, type IconNames } from "./index.ts";

// Props
const props = defineProps<{
  icon: IconNames | (string & {}); // autocomplete for known + allow any string
  fallbackIcon?: IconNames | (string & {}); // same for fallback
  class?: string;
  size?: number | string;
}>();

const size = computed(() => props.size ?? 24);

// component to render
const IconComponent = computed(() => {
  const key = props.icon as IconNames;
  const fallbackKey = props.fallbackIcon ? props.fallbackIcon : "alert";

  return icons[key] ?? icons[fallbackKey as IconNames];
});
</script>

<template>
  <component :is="IconComponent" :class="['shrink-0', props.class]" :width="size" :height="size" />
</template>
