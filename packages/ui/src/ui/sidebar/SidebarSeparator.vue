<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";
import { Separator } from "@/ui/separator";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Separator :class="cn('bg-sidebar-border mx-2 w-auto', props.class)" data-slot="sidebar-separator" data-sidebar="separator">
    <slot />
  </Separator>
</template>
