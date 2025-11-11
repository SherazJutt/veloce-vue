<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { Icon, type Icons } from "@veloce/icons";
import { type Severity } from "@veloce/types";
import { motion } from "motion-v";

const props = defineProps({
  id: { type: String, required: true },
  message: { type: String, default: "" },
  severity: { type: String as () => Severity, default: "info" },
  icon: { type: String as () => Icons, default: "" },
  duration: { type: Number, default: 5000 },
  closable: { type: Boolean, default: true },
  position: { type: String as () => "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center", default: "top-right" },
});

const emit = defineEmits<{
  close: [id: string];
}>();

const defaultIcons: Record<Severity, Icons> = {
  success: "check-circle",
  info: "info",
  warning: "alert",
  error: "x-circle",
  primary: "info",
  secondary: "info",
  neutral: "info",
};

const severityClasses = {
  success: "bg-success-light dark:bg-success/20 text-success border-success/30",
  info: "bg-info-light dark:bg-info/20 text-info border-info/30",
  warning: "bg-warning-light dark:bg-warning/20 text-warning border-warning/30",
  error: "bg-error-light dark:bg-error/20 text-error border-error/30",
  primary: "bg-primary-light dark:bg-primary/20 text-primary border-primary/30",
  secondary: "bg-secondary-light dark:bg-secondary/20 text-secondary border-secondary/30",
  neutral: "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700",
};

const classes = computed(() => {
  return severityClasses[props.severity] || severityClasses.info;
});

const iconToShow = computed(() => {
  return props.icon || defaultIcons[props.severity] || "info";
});

const isTopPosition = computed(() => {
  return props.position.startsWith("top");
});

const animationProps = computed(() => {
  const yOffset = isTopPosition.value ? -20 : 20;
  const exitYOffset = isTopPosition.value ? -10 : 10;
  return {
    initial: { opacity: 0, y: yOffset, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: exitYOffset, scale: 0.95 },
  };
});

let timeoutId: ReturnType<typeof setTimeout> | null = null;

const handleClose = () => {
  emit("close", props.id);
};

const startTimer = () => {
  if (props.duration > 0) {
    timeoutId = setTimeout(() => {
      handleClose();
    }, props.duration);
  }
};

const clearTimer = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearTimer();
});
</script>

<template>
  <motion.div
    :class="classes"
    class="flex min-w-[300px] max-w-[400px] items-start gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm"
    :initial="animationProps.initial"
    :animate="animationProps.animate"
    :exit="animationProps.exit"
    :transition="{
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    }"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <template v-if="$slots.icon">
      <slot name="icon" />
    </template>
    <Icon :icon="iconToShow" class="mt-0.5 size-5 shrink-0" v-else-if="iconToShow" />
    <div class="flex-1">
      <slot>
        <p class="text-sm font-medium">{{ message }}</p>
      </slot>
    </div>
    <button type="button" v-if="closable" class="ml-auto shrink-0 rounded p-0.5 transition-colors hover:bg-black/10 dark:hover:bg-white/10" @click="handleClose">
      <Icon icon="close" class="size-4" />
    </button>
  </motion.div>
</template>
