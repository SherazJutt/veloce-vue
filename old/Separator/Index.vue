<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  direction: { type: String as () => "horizontal" | "vertical", default: "horizontal" },
});
</script>

<template>
  <div :class="direction === 'horizontal' ? 'h-[1px] w-full' : direction === 'vertical' ? 'h-full w-[1px]' : ''" class="bg-gray-200"></div>
</template>

<style scoped>
hr {
  height: 1px;
}
</style>
