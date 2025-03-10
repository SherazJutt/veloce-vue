<script setup lang="ts">
// import { useRandomId } from "../../composables/useRandomId";

defineProps({
	icon: { type: String, default: "" },
	placeholder: { type: String, default: "your name" },
	helpText: { type: String, default: "" },
	type: { type: String, default: "text" },
	required: { type: Boolean, default: false },
});

// const model = defineModel();
</script>
<template>
	<div class="relative h-[42px]">
		<input type="text" class="hover:border-primary/60 peer outline-primary h-full w-full rounded-md border border-gray-200 px-3 duration-200" />
		<div class="absolute top-3 left-3 bg-white leading-none text-gray-400 duration-100 peer-focus:-top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-black">{{ placeholder }}</div>
		<!-- <div class="peer-focus:text-primary absolute -top-2.5 left-2 block bg-white px-1 text-sm font-medium duration-200 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5">{{ placeholder }}</div> -->
	</div>
</template>
