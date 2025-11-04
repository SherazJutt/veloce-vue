<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <div :class="cn('flex flex-col gap-1.5 p-4', props.class)" data-slot="sheet-header">
    <slot />
  </div>
</template>
