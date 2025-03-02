<script setup lang="ts">
defineProps({
	label: { type: String, default: "Button" },
	loading: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
});
</script>

<template>
	<button type="button" :disabled="disabled || loading" class="bg-primary outline-primary disabled:bg-primary/75 hover:bg-primary/75 flex cursor-pointer items-center justify-center gap-2 rounded px-6 py-2 text-white transition duration-200 disabled:cursor-not-allowed">
		<span>{{ label }}</span>

		<!-- Show loading spinner only when loading is true -->
		<svg v-if="loading" class="size-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<title id="title-05">Loading</title>
			<desc id="desc-05">A rotating spinner icon indicating loading state</desc>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	</button>
</template>
