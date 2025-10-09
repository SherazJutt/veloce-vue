<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

defineProps({
  position: { type: String as () => "left" | "top" | "right" | "bottom", default: "bottom" },
  bodyClass: { type: String, default: "" },
});
</script>

<template>
  <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <!-- Tooltip trigger -->
    <slot />

    <!-- Tooltip content -->
    <!-- prettier-ignore -->
    <div 
		v-if="isOpen" 
		:class="[
			'absolute z-10 w-max rounded-md bg-white px-3 py-2 text-sm text-primary border shadow-xl transition-opacity duration-200',
			position === 'top' && 'bottom-full left-1/2 mb-2 -translate-x-1/2',
			position === 'bottom' && 'top-full left-1/2 mt-2 -translate-x-1/2',
			position === 'left' && 'top-1/2 right-full mr-2 -translate-y-1/2',
			position === 'right' && 'top-1/2 left-full ml-2 -translate-y-1/2',
			bodyClass
		]">
		<slot name="body" />
		</div>
  </div>
</template>
