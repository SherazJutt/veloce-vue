<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

const props = defineProps({
	modelValue: { type: String, default: "" }, // v-model binding
	options: { type: Array as () => string[], required: true }, // Select options
	variant: { type: String as () => "outlined" | "text" | "ghost" | "solid", default: "solid" },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedOption = ref(props.modelValue);

const selectOption = (option: string) => {
	selectedOption.value = option;
	emit("update:modelValue", option);
	isOpen.value = false;
};
</script>

<template>
	<div class="relative">
		<!-- Dropdown trigger -->
		<Button :icon-class="isOpen ? 'rotate-180' : ''" icon="ci:chevron-down" class="w-full !px-3" :variant="variant" :label="selectedOption || 'Select'" @click="isOpen = !isOpen" />

		<!-- Dropdown menu -->
		<ul v-if="isOpen" class="absolute top-full z-10 mt-1 flex w-full list-none flex-col rounded border border-gray-200 bg-white shadow-md shadow-slate-500/10">
			<li v-for="(option, index) in options" :key="index" :class="option === selectedOption && 'bg-primary/10'" class="hover:bg-primary/5 cursor-pointer px-4 py-2" @click="selectOption(option)">
				{{ option }}
			</li>
		</ul>
	</div>
</template>
