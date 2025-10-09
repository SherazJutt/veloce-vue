<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

defineProps({
  position: { type: String as () => "left" | "center" | "right", default: "center" },
  bodyClass: { type: String, default: "" },
  contentClass: { type: String, default: "" },
});
</script>

<template>
  <div class="relative" @mouseleave="isOpen = false">
    <!-- component to render the popover on -->
    <div class="relative" @mouseover="isOpen = true">
      <!-- arrow icon -->
      <svg v-if="isOpen" class="absolute top-full left-1/2 w-4 -translate-x-1/2 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19" />
      </svg>

      <!-- popover trigger -->
      <slot />
    </div>

    <!-- popover content -->
    <div v-if="isOpen" :class="{ 'left-0': position === 'left', 'right-0': position === 'right', 'left-1/2 -translate-x-1/2': position === 'center', bodyClass }" class="absolute z-10 pt-3">
      <div :class="contentClass" class="w-[200px] rounded-md border border-gray-200 bg-white p-3 shadow-lg">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>
