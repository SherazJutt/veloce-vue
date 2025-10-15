<script setup lang="ts">
import { defineProps } from "vue";
import { props } from "./props";
import Icon from "../icon/index.vue";

defineProps(props);
</script>

<template>
  <div :class="direction === 'horizontal' ? 'h-[1px] w-full' : direction === 'vertical' ? 'h-full w-[1px]' : ''" class="relative bg-gray-200" :style="{ backgroundColor: color }">
    <span v-if="direction === 'horizontal' && label && !icon" class="absolute inset-0 m-auto flex w-fit items-center justify-center rounded-sm border border-gray-100 bg-white px-1 py-2 text-sm" :style="{ color: color, borderColor: color }">Test label</span>
    <span v-if="direction === 'horizontal' && !label && icon" class="absolute inset-0 m-auto flex h-fit w-fit shrink-0 items-center justify-center bg-white p-1">
      <Icon :icon="icon" class="size-6" :style="{ color: color }" />
    </span>
  </div>
</template>
