<script setup lang="ts">
import { computed } from "vue";
import Check from "../icons/check.vue";
import Close from "../icons/close.vue";
import Loading from "../icons/loading.vue";
import ChevronDown from "../icons/chevron-down.vue";
import Alert from "../icons/alert.vue";

// Map of all icons
const icons = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
} as const;

// icons names for autocomplete
export type IconNames = keyof typeof icons;

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
