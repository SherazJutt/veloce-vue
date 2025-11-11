<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
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

const progressBarClasses = {
  success: "bg-success",
  info: "bg-info",
  warning: "bg-warning",
  error: "bg-error",
  primary: "bg-primary",
  secondary: "bg-secondary",
  neutral: "bg-neutral-500",
};

const classes = computed(() => {
  return severityClasses[props.severity] || severityClasses.info;
});

const progressBarClass = computed(() => {
  return progressBarClasses[props.severity] || progressBarClasses.info;
});

const iconToShow = computed(() => {
  return props.icon || defaultIcons[props.severity] || "info";
});

const isTopPosition = computed(() => {
  return props.position.startsWith("top");
});

const isLeftPosition = computed(() => {
  return props.position.includes("left");
});

const isRightPosition = computed(() => {
  return props.position.includes("right");
});

const animationProps = computed(() => {
  // Determine slide direction based on position
  let xOffset = 0;
  let yOffset = 0;

  // For center positions, slide vertically
  if (props.position.includes("center")) {
    if (isTopPosition.value) {
      yOffset = -50;
    } else {
      yOffset = 50;
    }
  } else {
    // For left/right positions, slide horizontally with slight vertical offset
    if (isTopPosition.value) {
      yOffset = -20;
    } else {
      yOffset = 20;
    }

    if (isLeftPosition.value) {
      xOffset = -100;
    } else if (isRightPosition.value) {
      xOffset = 100;
    }
  }

  return {
    initial: { opacity: 0, x: xOffset, y: yOffset, scale: 0.9 },
    animate: { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, x: xOffset, y: yOffset, scale: 0.9 },
  };
});

// Progress tracking
const elapsedTime = ref(0);
const isPaused = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | null = null;
let progressIntervalId: ReturnType<typeof setInterval> | null = null;
const startTime = ref(Date.now());
const pausedAt = ref(0);
const totalPausedTime = ref(0);

const progressPercentage = computed(() => {
  if (props.duration <= 0) return 100;
  const remaining = props.duration - elapsedTime.value;
  return Math.max(0, Math.min(100, (remaining / props.duration) * 100));
});

const updateProgress = () => {
  if (!isPaused.value && props.duration > 0) {
    const now = Date.now();
    elapsedTime.value = now - startTime.value - totalPausedTime.value;

    if (elapsedTime.value >= props.duration) {
      handleClose();
    }
  }
};

const handleClose = () => {
  emit("close", props.id);
};

const startTimer = () => {
  if (props.duration > 0) {
    // Resume from where we paused
    if (isPaused.value && pausedAt.value > 0) {
      const pauseDuration = Date.now() - pausedAt.value;
      totalPausedTime.value += pauseDuration;
      pausedAt.value = 0;
    } else {
      // Fresh start
      startTime.value = Date.now();
      elapsedTime.value = 0;
      totalPausedTime.value = 0;
    }

    isPaused.value = false;

    // Clear any existing intervals/timeouts
    clearTimer();

    // Update progress every 16ms (~60fps)
    progressIntervalId = setInterval(updateProgress, 16);

    // Fallback timeout with remaining time
    const remaining = props.duration - elapsedTime.value;
    if (remaining > 0) {
      timeoutId = setTimeout(() => {
        handleClose();
      }, remaining);
    } else {
      handleClose();
    }
  }
};

const pauseTimer = () => {
  if (isPaused.value) return; // Already paused

  isPaused.value = true;
  pausedAt.value = Date.now();

  clearTimer();
};

const clearTimer = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  if (progressIntervalId) {
    clearInterval(progressIntervalId);
    progressIntervalId = null;
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
    class="relative flex min-w-[300px] max-w-[400px] flex-col overflow-hidden rounded-lg border shadow-lg backdrop-blur-sm"
    layout
    :initial="animationProps.initial"
    :animate="animationProps.animate"
    :exit="animationProps.exit"
    :transition="{
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
      layout: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    }"
    @mouseenter="pauseTimer"
    @mouseleave="startTimer"
  >
    <div class="flex items-start gap-3 p-4">
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
    </div>

    <!-- Progress Bar -->
    <div v-if="duration > 0" class="absolute bottom-0 left-0 h-1 w-full overflow-hidden bg-black/10 dark:bg-white/10">
      <motion.div
        :class="progressBarClass"
        class="h-full"
        :style="{ width: `${progressPercentage}%` }"
        :initial="{ width: '100%' }"
        :animate="{ width: `${progressPercentage}%` }"
        :transition="{
          duration: isPaused ? 0 : 0.16,
          ease: 'linear',
        }"
      />
    </div>
  </motion.div>
</template>
