<script setup lang="ts">
const props = defineProps({
  icon: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  helpText: { type: String, default: "" },
  type: { type: String, default: "text", options: ["text", "password"] },
});

const model = defineModel();
</script>
<template>
  <div :class="{ 'mb-6': helpText }" class="relative h-[42px]">
    <input :type="type" v-model="model" class="hover:border-primary/60 peer outline-primary h-full w-full rounded-md border border-gray-200 px-3 duration-200" placeholder=" " />
    <div :class="model ? '-top-2.5 text-sm text-black' : 'top-[9px]'" class="absolute left-3 bg-white px-[2px] text-black duration-100 peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-black">{{ placeholder }}</div>
    <div v-if="helpText" class="ml-1 pt-1 text-xs text-gray-400">{{ helpText }}</div>
  </div>
</template>
