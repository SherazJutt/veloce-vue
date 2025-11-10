<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  width: { type: String, default: "100%" },
  height: { type: String, default: "1rem" },
  rounded: { type: Boolean, default: false },
  variant: { type: String as () => "text" | "circular" | "rectangular", default: "text" },
  animation: { type: String as () => "pulse" | "wave" | "none", default: "pulse" },
});

const classes = computed(() => {
  return [{ "rounded-full": props.rounded || props.variant === "circular" }, { rounded: !props.rounded && props.variant !== "circular" }, { "animate-pulse": props.animation === "pulse" }, { "skeleton-wave": props.animation === "wave" }];
});

const style = computed(() => {
  return {
    width: props.width,
    height: props.height,
  };
});
</script>

<template>
  <div :class="classes" class="bg-neutral-200 dark:bg-neutral-800" :style="style" />
</template>

<style scoped>
.skeleton-wave {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.06) 75%);
  background-size: 200% 100%;
  animation: wave 1.5s ease-in-out infinite;
}

@media (prefers-color-scheme: dark) {
  .skeleton-wave {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.06) 25%, rgba(255, 255, 255, 0.14) 50%, rgba(255, 255, 255, 0.06) 75%);
    background-size: 200% 100%;
    animation: wave 1.5s ease-in-out infinite;
  }
}

@keyframes wave {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
