<template>
  <div class="flex items-center gap-2">
    <input type="checkbox" :disabled="props.disabled" v-model="model" :class="variantClasses" class="peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:transition-all checked:after:left-6 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:opacity-75 disabled:after:bg-slate-300" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { props as toggleProps } from "./props";

const props = defineProps(toggleProps);

const model = defineModel<boolean>({ default: false });

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary/25 hover:bg-primary/35 checked:after:bg-primary checked:bg-primary/25 after:bg-primary";
    case "secondary":
      return "bg-secondary/25 hover:bg-secondary/35 checked:after:bg-secondary checked:bg-secondary/25 after:bg-secondary";
    case "default":
      return "bg-gray-200 hover:bg-gray-300 after:!bg-gray-500";
    default:
      return "bg-gray-200 hover:bg-gray-300 after:!bg-gray-500";
  }
});
</script>
