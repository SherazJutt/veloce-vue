<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
	label: { type: String, default: "Button" },
	loading: { type: Boolean, default: false },
	disabled: { type: Boolean, default: false },
	variant: { type: String as () => "outlined" | "text" | "ghost" | "solid", default: "solid" },
	icon: { type: String, default: "" }, // Iconify icon name
	iconClass: { type: String, default: "" },
	iconPosition: { type: String as () => "left" | "right", default: "left" }, // Position of the icon
});

const buttonClasses = computed(() => {
	switch (props.variant) {
		case "outlined":
			return "border !border-primary text-primary bg-transparent hover:bg-primary hover:text-white";
		case "text":
			return "bg-transparent text-primary hover:bg-gray-200";
		case "ghost":
			return "text-primary bg-gray-100 hover:bg-gray-200";
		default:
			return "bg-primary text-white hover:bg-primary/75"; // Solid
	}
});
</script>

<template>
	<button type="button" :disabled="disabled || loading" :class="buttonClasses" class="flex cursor-pointer items-center justify-center gap-2 rounded border border-transparent px-6 py-2 transition duration-200 disabled:cursor-not-allowed disabled:opacity-50">
		<div :class="iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'" class="flex items-center gap-2">
			<!-- Left Icon -->
			<Icon v-if="icon && !loading" :icon="icon" :class="iconClass" />
			<!-- Label -->
			<span>{{ label }}</span>
		</div>
		<!-- Loading Spinner -->
		<Icon v-if="loading" icon="svg-spinners:90-ring-with-bg" class="size-5 animate-spin" />
	</button>
</template>
