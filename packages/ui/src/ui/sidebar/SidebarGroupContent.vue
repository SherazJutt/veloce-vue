<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('w-full text-sm', props.class)" data-slot="sidebar-group-content" data-sidebar="group-content">
    <slot />
  </div>
</template>
