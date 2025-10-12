<script setup lang="ts">
import { ref } from "vue";
import { props } from "./props";

const isVisible = ref(false);

defineProps(props);
</script>

<template>
  <div class="relative inline-block" @mouseenter="isVisible = true" @mouseleave="isVisible = false">
    <!-- Tooltip trigger -->
    <slot />

    <!-- Tooltip content -->
    <!-- prettier-ignore -->
    <div 
		v-if="isVisible" 
		:class="[
			'absolute z-10 w-max rounded-md bg-white px-3 py-2 text-sm text-primary border shadow-xl transition-opacity duration-200',
			position === 'top' && 'bottom-full left-1/2 mb-2 -translate-x-1/2',
			position === 'bottom' && 'top-full left-1/2 mt-2 -translate-x-1/2',
			position === 'left' && 'top-1/2 right-full mr-2 -translate-y-1/2',
			position === 'right' && 'top-1/2 left-full ml-2 -translate-y-1/2',
			bodyClass
		]">
    <span v-if="!content">{{ content }}</span>
		<slot name="body" v-else />
		</div>
  </div>
</template>
