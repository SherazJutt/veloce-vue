<template>
  <div :class="containerClasses" class="w-full sm:w-auto">
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
import { ref, computed, onMounted, type Ref } from "vue";
import { AnimatePresence } from "motion-v";
import Toast from "./Toast.vue";
import { setToastContainer } from "@veloce/toast";
import type { ToastItem } from "@veloce/toast";
import { useRandomId } from "@veloce/utils";

const props = defineProps({
  position: { type: String as () => "top-center" | "bottom-center" | "top-right" | "top-left" | "bottom-right" | "bottom-left", default: "top-right" },
  maxToasts: { type: Number, default: 5 },
});

const toasts: Ref<ToastItem[]> = ref<ToastItem[]>([]);

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

const addToast = (toast: ToastItem): void => {
  const newToast: ToastItem = {
    id: toast.id || useRandomId(),
    message: toast.message,
    severity: toast.severity || "info",
    icon: toast.icon,
    duration: toast.duration ?? 5000,
    closable: toast.closable ?? true,
  };

  if (props.position.includes("top")) {
    toasts.value.unshift(newToast);
  } else {
    toasts.value.push(newToast);
  }

  // Limit the number of toasts
  if (toasts.value.length > props.maxToasts) {
    toasts.value.shift();
  }
};

const removeToast = (id: string): void => {
  const index = toasts.value.findIndex((toast: ToastItem) => toast.id === id);
  if (index > -1) {
    toasts.value.splice(index, 1);
  }
};

const clearAll = (): void => {
  toasts.value = [];
};

onMounted(() => {
  setToastContainer({ addToast, removeToast, clearAll, toasts });
});

defineExpose<{
  addToast: (toast: ToastItem) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
  toasts: typeof toasts;
}>({ addToast, removeToast, clearAll, toasts });
</script>
