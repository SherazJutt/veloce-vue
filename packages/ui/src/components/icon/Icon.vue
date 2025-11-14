<script setup lang="ts">
import { computed } from "vue";
import type { Component } from "vue";

const props = defineProps<{
  icon: Component;
  class?: string;
  size?: number | string;
}>();

const size = computed(() => props.size ?? 24);
const IconComponent = computed(() => props.icon);
</script>

<template>
  <component :is="IconComponent" v-if="IconComponent" :class="['shrink-0', props.class]" :width="size" :height="size" />
  <slot v-else />
</template>
