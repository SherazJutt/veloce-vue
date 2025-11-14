<script setup lang="ts">
import { ref } from "vue";
import { motion, AnimatePresence } from "motion-v";

defineProps({
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
      <AnimatePresence>
        <motion.svg
          v-if="isOpen"
          :class="{ 'top-full': position === 'bottom', 'bottom-full rotate-180': position === 'top' }"
          class="text-border absolute left-1/2 w-4 -translate-x-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.8 }"
          :transition="{
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
          }"
        >
          <path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19" />
        </motion.svg>
      </AnimatePresence>
      <div :class="position === 'top' ? '-top-3.5' : '-bottom-3.5'" class="absolute left-0 right-0 mx-auto h-4"></div>

      <!-- popover trigger -->
      <slot />
    </div>

    <!-- popover content -->
    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        :class="[bodyClass, { 'bottom-full mb-3': position === 'top' }, { 'top-full mt-3': position === 'bottom' }]"
        class="absolute left-1/2 z-50 w-fit -translate-x-1/2"
        :initial="{ opacity: 0, scale: 0.95, y: position === 'top' ? 10 : -10 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.95, y: position === 'top' ? 10 : -10 }"
        :transition="{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }"
      >
        <div :class="contentClass" class="bg-background w-[200px] rounded-md border p-3">
          <slot name="body" />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</template>
