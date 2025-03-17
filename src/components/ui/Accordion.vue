<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
	items: { type: Array as () => { title: string; content: string; slot?: string }[], required: true },
});

const activeIndex = ref<Number | null>(null);
</script>

<template>
	<div class="w-full divide-y divide-gray-200 rounded border border-slate-200 bg-white">
		<div v-for="(item, index) in items" :key="index" v-if="items.length">
			<div :class="{ 'bg-primary/5': activeIndex === index }" class="hover:bg-primary/5 relative flex cursor-pointer justify-between gap-4 p-3 font-medium duration-100" @click="activeIndex = activeIndex === index ? null : index">
				<span class="title text-gray-600">{{ item.title }}</span>
				<Icon icon="jam:chevron-down" :class="{ 'rotate-180': activeIndex === index }" class="icon text-[1.4rem] text-gray-400 duration-200" />
			</div>
			<!-- body -->
			<div v-if="activeIndex === index" class="p-3 text-gray-500">
				<template v-if="item.slot">
					<slot :name="item.slot" />
				</template>
				<template v-else>
					{{ item.content }}
				</template>
			</div>
		</div>

		<div class="px-3 py-6 text-center text-gray-500" v-else>No items to show</div>
	</div>
</template>
