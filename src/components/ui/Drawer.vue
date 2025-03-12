<script setup lang="ts">
import { computed, ref } from "vue";
import Button from "./Button.vue";

const props = defineProps({
	direction: { type: String as () => "left" | "bottom" | "right", default: "bottom" },
});

const show = ref(false);

const drawerdirections = computed(() => {
	let currClasses = "";

	switch (props.direction) {
		case "left":
			currClasses = show.value ? "fixed top-0 left-0 bottom-0" : "fixed top-0 -left-full bottom-0";
			break;
		case "bottom":
			currClasses = show.value ? "fixed left-0 bottom-0 right-0" : "fixed left-0 right-0 -bottom-full";
			break;
		case "right":
			currClasses = show.value ? "fixed top-0 right-0 bottom-0" : "fixed top-0 -right-full bottom-0";
			break;
		default:
			alert("Invalid direction");
	}

	return currClasses;
});

const defaultClasses = computed(() => {
	let classes = "";

	switch (props.direction) {
		case "left":
			classes = "w-full max-w-[320px]";
			break;
		case "bottom":
			classes = "w-full h-full max-h-[75dvh]";
			break;
		case "right":
			classes = "w-full max-w-[320px]";
			break;
		default:
			break;
	}

	return classes;
});
</script>

<template>
	<Button label="Drawer" @click="show = !show" />

	<!-- drawer  -->
	<div :class="[drawerdirections, defaultClasses]" class="z-50 flex flex-col justify-between bg-white duration-300">
		<div class="flex items-center justify-between bg-gray-100 p-2">
			<span>Title</span>
			<Icon icon="material-symbols:close" class="cursor-pointer text-gray-400 hover:text-gray-500" @click="show = !show" />
		</div>
		<div class="flex size-full items-center justify-center bg-gray-50 p-2">Content</div>
		<div class="bg-gray-100 p-2">Footer</div>
	</div>
</template>
