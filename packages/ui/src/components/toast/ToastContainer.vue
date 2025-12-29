<template>
  <div :class="containerClasses" class="w-full sm:w-auto" :id="containerId">
    <AnimatePresence>
      <Toast
        v-for="(toast, index) in toasts"
        :key="toast.id"
        :icon="toast.icon"
        class="pointer-events-auto"
        :style="{ zIndex: index + 1 }"
        :id="toast.id"
        :message="toast.message"
        :severity="toast.severity"
        :duration="toast.duration"
        :closable="toast.closable"
        :position="position"
        @close="removeToast"
      />
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { AnimatePresence } from "motion-v";
import Toast from "./Toast.vue";
import type { ToastItem } from "../../composables/useToast";
import { toasts } from "../../composables/useToast";

const props = defineProps({
  position: { type: String as () => "top-center" | "bottom-center" | "top-right" | "top-left" | "bottom-right" | "bottom-left", default: "top-right" },
  maxToasts: { type: Number, default: 5 },
  containerId: { type: String, default: "default-toast-container" },
});

onBeforeMount(() => (toasts.value = []));

const containerClasses = computed(() => {
  const baseClasses = "fixed z-[9999] flex flex-col gap-3 p-4 pointer-events-none";
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
  };
  return `${baseClasses} ${positionClasses[props.position] || positionClasses["top-right"]}`;
});

const removeToast = (id: string): void => {
  const index = toasts.value.findIndex((toast: ToastItem) => toast.id === id);
  if (index > -1) {
    toasts.value.splice(index, 1);
  }
};
</script>
