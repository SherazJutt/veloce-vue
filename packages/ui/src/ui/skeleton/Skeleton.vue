<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";

interface SkeletonProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div :class="cn('bg-primary/10 animate-pulse rounded-md', props.class)" data-slot="skeleton" />
</template>
