<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const progress = ref<number>(58.5714); // Initial progress
const isDragging = ref<boolean>(false);

const updateProgress = (event: MouseEvent) => {
	console.log(event);

	if (!isDragging.value) return;

	const progressBar = (event.target as HTMLElement).closest(".relative") as HTMLElement;
	if (!progressBar) return;

	const rect = progressBar.getBoundingClientRect();
	const offsetX = event.clientX - rect.left;
	const newProgress = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));

	progress.value = newProgress;
};

const startDrag = (event: MouseEvent) => {
	isDragging.value = true;
	updateProgress(event);
};

const stopDragging = () => {
	if (isDragging.value) {
		isDragging.value = false;
	}
};

// Attach and remove event listeners for drag control
onMounted(() => {
	window.addEventListener("mousemove", updateProgress);
	window.addEventListener("mouseup", stopDragging);
});

onUnmounted(() => {
	window.removeEventListener("mousemove", updateProgress);
	window.removeEventListener("mouseup", stopDragging);
});
</script>

<template>
	<div class="relative min-w-full py-1">
		<div class="h-2 rounded-full bg-gray-200" @mouseleave="isDragging = false">
			<!-- Progress Bar -->
			<div class="bg-primary absolute h-2 w-0 rounded-full" :style="{ width: progress + '%' }"></div>

			<!-- Draggable Knob -->
			<!-- prettier-ignore -->
			<div
				class="absolute top-0 -ml-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow"
				:style="{ left: progress + '%' }"
				unselectable="on"
				onselectstart="return false;"
				@mousedown="startDrag"
			></div>
		</div>
	</div>
	<div>{{ progress }}</div>
	<div>{{ isDragging }}</div>
</template>
