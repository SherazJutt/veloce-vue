<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(false);

defineProps({
  content: { type: String, default: "" },
  position: { type: String as () => "top" | "bottom" | "left" | "right", default: "bottom", options: ["top", "bottom", "left", "right"] },
  bodyClass: { type: String, default: "" },
});
</script>

<template>
  <div class="relative inline-block" @mouseenter="isVisible = true" @mouseleave="isVisible = false">
    <!-- Tooltip trigger -->
    <slot />

    <!-- Tooltip content -->
    <div
      v-if="isVisible"
      :class="[
        'bg-background absolute z-10 w-max rounded border px-3 py-2 text-sm shadow-md transition-opacity duration-200',
        position === 'top' && 'bottom-full left-1/2 mb-2 -translate-x-1/2',
        position === 'bottom' && 'left-1/2 top-full mt-2 -translate-x-1/2',
        position === 'left' && 'right-full top-1/2 mr-2 -translate-y-1/2',
        position === 'right' && 'left-full top-1/2 ml-2 -translate-y-1/2',
        bodyClass,
      ]"
    >
      <span v-if="content">{{ content }}</span>
      <slot name="body" v-else />
    </div>
  </div>
</template>
