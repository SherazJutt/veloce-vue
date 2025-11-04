<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <li :class="cn('group/menu-item relative', props.class)" data-slot="sidebar-menu-item" data-sidebar="menu-item">
    <slot />
  </li>
</template>
