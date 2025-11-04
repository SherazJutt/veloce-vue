<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "@veloce/lib";
import { Skeleton } from "@/ui/skeleton";

const props = defineProps<{
  showIcon?: boolean;
  class?: HTMLAttributes["class"];
}>();

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`;
});
</script>

<template>
  <div :class="cn('flex h-8 items-center gap-2 rounded-md px-2', props.class)" data-slot="sidebar-menu-skeleton" data-sidebar="menu-skeleton">
    <Skeleton v-if="showIcon" class="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />

    <Skeleton class="max-w-(--skeleton-width) h-4 flex-1" :style="{ '--skeleton-width': width }" data-sidebar="menu-skeleton-text" />
  </div>
</template>
