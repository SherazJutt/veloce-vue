<script setup lang="ts">
defineProps({
	label: { type: String, default: "" },
	labelClass: { type: String, default: "" },
	checkboxClass: { type: String, default: "" },
});
const modelValue = defineModel();
</script>

<template>
	<div class="flex w-fit cursor-pointer gap-2 select-none" @click="modelValue = !modelValue">
		<div :class="[{ 'bg-primary': modelValue }, checkboxClass]" class="border-primary m-0 size-6 rounded-sm border-2 duration-200">
			<Icon v-if="modelValue" icon="material-symbols:check-rounded" :class="{ 'text-white': modelValue }" class="size-5" />
		</div>
		<div :class="labelClass">{{ label }}</div>
	</div>
</template>
