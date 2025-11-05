<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  position: { type: String as () => "top" | "bottom", default: "bottom", options: ["top", "bottom"] },
  bodyClass: { type: String, default: "" },
  contentClass: { type: String, default: "" },
});

const isOpen = ref(false);
</script>

<template>
  <div class="relative inline-block" @mouseleave="isOpen = false">
    <!-- component to render the popover on -->
    <div class="relative" @mouseover="isOpen = true">
      <!-- arrow icon -->
      <svg
        v-if="isOpen"
        :class="{ 'top-full': position === 'bottom', 'bottom-full rotate-180': position === 'top' }"
        class="text-border absolute left-1/2 w-4 -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19" />
      </svg>
      <div :class="position === 'top' ? '-top-3.5' : '-bottom-3.5'" class="absolute left-0 right-0 mx-auto h-4"></div>

      <!-- popover trigger -->
      <slot />
    </div>

    <!-- popover content -->
    <div v-if="isOpen" :class="[bodyClass, { 'bottom-full mb-3': position === 'top' }, { 'top-full mt-3': position === 'bottom' }]" class="absolute left-1/2 z-50 w-fit -translate-x-1/2">
      <div :class="contentClass" class="bg-background w-[200px] rounded-md border p-3">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
