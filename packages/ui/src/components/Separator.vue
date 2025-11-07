<script setup lang="ts">
import { Icon } from "@veloce/icons";

const props = defineProps({
  direction: { type: String as () => "horizontal" | "vertical", default: "horizontal", options: ["horizontal", "vertical"] },
  color: { type: String, default: "" },
  label: { type: String, default: "" },
  icon: { type: String, default: "" },
});
</script>

<template>
  <div :class="direction === 'horizontal' ? 'h-px w-full' : direction === 'vertical' ? 'h-full w-px' : ''" class="relative bg-gray-200" :style="{ backgroundColor: color || 'var(--color-primary)' }">
    <template v-if="direction === 'horizontal'">
      <span v-if="label && !icon" class="absolute inset-0 m-auto flex w-fit items-center justify-center rounded-sm border border-gray-100 bg-white px-1 py-2 text-sm" :style="{ color: color, borderColor: color }">Test label</span>
      <span v-if="icon && !label" class="absolute inset-0 m-auto flex h-fit w-fit shrink-0 items-center justify-center bg-white p-1">
        <Icon :icon="icon" class="size-6" :style="{ color: color || 'var(--color-primary)' }" />
      </span>
    </template>
  </div>
</template>
