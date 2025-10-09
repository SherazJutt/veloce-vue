<script setup lang="ts">
import { computed } from "vue";
import Check from "../icons/check.vue";
import Close from "../icons/close.vue";
import Loading from "../icons/loading.vue";
import ChevronDown from "../icons/chevron-down.vue";
import Alert from "../icons/alert.vue";

const icons = {
  check: Check,
  close: Close,
  loading: Loading,
  "chevron-down": ChevronDown,
  alert: Alert,
} as const;

export type IconNames = keyof typeof icons;

const props = defineProps<{
  icon: IconNames | string;
  class?: string;
  size?: number | string;
  fallbackIcon?: IconNames | string;
}>();

const size = computed(() => props.size ?? 24);
const IconComponent = computed(() => icons[props.icon.toLocaleLowerCase() as IconNames] ?? icons[props.fallbackIcon?.toLowerCase() as IconNames]);
</script>

<template>
  <component :is="IconComponent" :class="['shrink-0', props.class]" :width="size" :height="size" />
</template>
