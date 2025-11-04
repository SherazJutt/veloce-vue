<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { PanelLeft } from "lucide-vue-next";
import { cn } from "@veloce/lib";
import { Button } from "@/ui/button";
import { useSidebar } from "./utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { toggleSidebar } = useSidebar();
</script>

<template>
  <Button :class="cn('h-7 w-7', props.class)" data-sidebar="trigger" data-slot="sidebar-trigger" variant="ghost" size="icon" @click="toggleSidebar">
    <PanelLeft />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
