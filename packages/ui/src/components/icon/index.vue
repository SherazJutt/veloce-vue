<script setup lang="ts">
import { computed } from "vue";
import { Icons, type Icons as IconsType } from "./index.ts";

// Props
const props = defineProps<{
  icon: IconsType | (string & {}); // autocomplete for icons
  class?: string;
  size?: number | string;
}>();

const size = computed(() => props.size ?? 24);

// component to render
const IconComponent = computed(() => {
  return props.icon ? Icons[props.icon as IconsType] : "";
});
</script>

<template>
  <component :is="IconComponent" v-if="IconComponent" :class="['shrink-0', props.class]" :width="size" :height="size" />
  <slot v-else />
</template>
