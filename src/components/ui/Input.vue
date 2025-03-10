<script setup lang="ts">
import { useRandomId } from "../../composables/useRandomId";

const props = defineProps({
	icon: { type: String, default: "" },
	placeholder: { type: String, default: "your name" },
	helpText: { type: String, default: "" },
});

const model = defineModel();
const id = useRandomId(8);
</script>
<template>
	<!-- Component: Rounded input with leading icon-->
	<div class="relative my-6">
		<input type="text" v-model="model" class="peer focus:border-primary/75 relative h-10 w-full rounded border border-slate-200 px-4 py-5 pl-14 text-sm text-slate-500 placeholder-transparent transition-all outline-none autofill:bg-white focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400" :id="id" placeholder=" " />
		<label class="peer-focus:text-primary absolute -top-2 left-[50px] z-[1] cursor-text px-2 text-xs text-slate-400 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-[50px] peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-focus:-top-2 peer-focus:left-[50px] peer-focus:cursor-default peer-focus:text-xs peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-disabled:before:bg-transparent peer-required:after:content-['\00a0*']" :for="id">{{ placeholder }}</label>

		<div class="peer-focus:text-primary/75 round absolute -top-0 bottom-0 left-[1px] my-auto flex h-[calc(100%-2px)] w-12 items-center justify-center rounded-l-[3px] bg-gray-300 text-slate-500 duration-200 peer-disabled:cursor-not-allowed">
			<Icon v-if="icon" :icon="icon" class="h-5 w-5" />
		</div>

		<small v-if="helpText" class="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition"> {{ helpText }} </small>
	</div>
	<!-- End Rounded input with leading icon-->
</template>
