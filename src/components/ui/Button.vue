<script setup lang="ts">
console.log("Button");
</script>
<template>
	<button class="bg-primary outline-primary disabled:bg-primary/75 hover:bg-primary/75 flex cursor-pointer items-center justify-center gap-2 rounded px-6 py-2 text-white transition duration-200 disabled:cursor-not-allowed" type="button">
		<span>Button</span>
		<!-- loading icon -->
		<svg class="size-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="graphics-symbol" aria-labelledby="title-05 desc-05">
			<title id="title-05">Icon title</title>
			<desc id="desc-05">A more detailed description of the icon</desc>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
			<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
		</svg>
	</button>
</template>
