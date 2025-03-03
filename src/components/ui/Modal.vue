<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

const show = ref(false);
</script>

<template>
	<div class="w-full" @click="show = true">
		<slot />
	</div>
	<!-- Modal backdrop -->
	<div v-if="show" class="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center backdrop-blur-[2px]" aria-labelledby="header-3a content-3a" aria-modal="true" tabindex="-1" role="dialog">
		<!-- Modal -->
		<div class="max-h-[90vh] max-w-[600px] overflow-hidden rounded border border-gray-200 bg-white p-4 text-slate-500 shadow-xl shadow-slate-700/10" role="document">
			<!-- Modal header -->
			<header class="flex items-center gap-4">
				<h3 class="text-primary flex-1 text-xl font-medium">Modal title</h3>
				<Button icon="material-symbols:close-rounded" class="!p-1" variant="ghost" circle @click="show = false" />
			</header>
			<!-- Modal body -->
			<div class="mt-4 flex-1 overflow-auto">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde deleniti a neque. Id repellat autem culpa provident quam quod minima porro reiciendis et sit. Quaerat hic cum maiores accusamus!</p>
			</div>
		</div>
	</div>
</template>
