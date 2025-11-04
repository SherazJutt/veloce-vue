<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <li :class="cn('group/menu-sub-item relative', props.class)" data-slot="sidebar-menu-sub-item" data-sidebar="menu-sub-item">
    <slot />
  </li>
</template>
