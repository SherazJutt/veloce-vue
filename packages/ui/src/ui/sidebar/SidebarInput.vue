<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@veloce/lib";
import { Input } from "@/ui/input";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <Input :class="cn('bg-background h-8 w-full shadow-none', props.class)" data-slot="sidebar-input" data-sidebar="input">
    <slot />
  </Input>
</template>
