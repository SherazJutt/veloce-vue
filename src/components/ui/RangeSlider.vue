<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const progress = ref<number>(58.5714);
const isDragging = ref<boolean>(false);
const tooltipVisible = ref<boolean>(false);

const updateProgress = (event: MouseEvent) => {
	if (!isDragging.value) return;

	// Ensure event.target is an HTMLElement
	const progressBar = document.querySelector(".progress-container") as HTMLElement;
	if (!progressBar) return;

	const rect = progressBar.getBoundingClientRect();
	const offsetX = event.clientX - rect.left;
	const newProgress = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

	progress.value = newProgress;
};

const startDrag = (event: MouseEvent) => {
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
	window.addEventListener("mousemove", updateProgress);
	window.addEventListener("mouseup", stopDragging);
	window.addEventListener("mouseleave", stopDragging);
});

onUnmounted(() => {
	window.removeEventListener("mousemove", updateProgress);
	window.removeEventListener("mouseup", stopDragging);
	window.removeEventListener("mouseleave", stopDragging);
});
</script>

<template>
	<!-- Increased the click/drag area -->
	<div class="progress-container relative min-w-full py-4">
		<!-- Progress Bar -->
		<div class="relative h-2 rounded-full bg-gray-200">
			<!-- Filled Progress -->
			<div class="bg-primary absolute h-2 rounded-full" :style="{ width: progress + '%' }"></div>

			<!-- Draggable Knob -->
			<div class="absolute top-1/2 -ml-2 flex h-4 w-4 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow" :style="{ left: progress + '%' }" unselectable="on" onselectstart="return false;" @mousedown="startDrag"></div>
			<!-- Tooltip -->

			<div v-if="tooltipVisible" class="absolute -top-9 mx-auto w-10 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white" :style="{ left: progress + '%' }">
				{{ Math.round(progress) }}%
				<span class="absolute -bottom-1 left-1/2 -ml-1 h-2 w-2 rotate-45 bg-gray-800"></span>
			</div>
		</div>
	</div>
</template>
