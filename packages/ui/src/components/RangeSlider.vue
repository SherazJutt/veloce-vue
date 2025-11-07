<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  showTooltip: { type: Boolean, default: false },
  tooltipPosition: { type: String as () => "top" | "bottom", default: "top" },
});

const model = defineModel<number>({ required: true });

const isDragging = ref<boolean>(false);
const tooltipVisible = ref<boolean>(false);

const updateProgress = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;

  const progressBar = document.querySelector(".progress-container") as HTMLElement;
  if (!progressBar) return;

  const rect = progressBar.getBoundingClientRect();
  let clientX: number;

  // Check if the event is a touch event or mouse event
  if (event instanceof TouchEvent) {
    clientX = event.touches[0]?.clientX ?? 0;
  } else {
    clientX = event.clientX;
  }

  const offsetX = clientX - rect.left;
  const newProgress = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

  model.value = newProgress;
};

const startDrag = (event: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  tooltipVisible.value = true;
  updateProgress(event);
};

const stopDragging = () => {
  isDragging.value = false;
  tooltipVisible.value = false;
};

// Attach global event listeners
onMounted(() => {
  // Mouse events
  window.addEventListener("mousemove", updateProgress);
  window.addEventListener("mouseup", stopDragging);
  window.addEventListener("mouseleave", stopDragging);

  // Touch events
  window.addEventListener("touchmove", updateProgress, { passive: false });
  window.addEventListener("touchend", stopDragging);
  window.addEventListener("touchcancel", stopDragging);
});

onUnmounted(() => {
  // Remove Mouse events
  window.removeEventListener("mousemove", updateProgress);
  window.removeEventListener("mouseup", stopDragging);
  window.removeEventListener("mouseleave", stopDragging);

  // Remove Touch events
  window.removeEventListener("touchmove", updateProgress);
  window.removeEventListener("touchend", stopDragging);
  window.removeEventListener("touchcancel", stopDragging);
});
</script>

<template>
  <!-- Progress Bar Container -->
  <div class="progress-container relative min-w-full px-3 py-4">
    <!-- Progress Bar -->
    <div class="relative h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
      <!-- Filled Progress -->
      <div class="bg-primary absolute h-2 rounded-full" :style="{ width: model + '%' }"></div>

      <!-- Draggable Knob -->
      <div
        class="absolute top-1/2 -ml-2 flex h-4 w-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
        :style="{ left: model + '%' }"
        unselectable="on"
        onselectstart="return false;"
        @mousedown="startDrag"
        @touchstart="startDrag"
      ></div>

      <!-- Tooltip -->
      <div
        v-if="tooltipVisible && showTooltip"
        :class="[tooltipPosition === 'top' ? '-top-9' : '-bottom-9']"
        class="absolute mx-auto w-10 -translate-x-1/2 select-none rounded bg-neutral-700 px-2 py-1 text-xs text-white"
        :style="{ left: model + '%' }"
      >
        {{ Math.round(model) }}%
        <span :class="[tooltipPosition === 'top' ? '-bottom-1' : '-top-1']" class="absolute left-1/2 -ml-1 h-2 w-2 rotate-45 bg-neutral-700"></span>
      </div>
    </div>
  </div>
</template>
