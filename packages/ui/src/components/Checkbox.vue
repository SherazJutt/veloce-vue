<script setup lang="ts">
import { Icon } from "@veloce/icons";

const props = defineProps({
  label: { type: String, default: "" },
  labelClass: { type: String, default: "" },
  checkboxClass: { type: String, default: "" },
});

const model = defineModel<boolean>({ required: true });
</script>

<template>
  <div class="flex w-fit cursor-pointer select-none gap-2" @click="model = !model">
    <div :class="[{ 'bg-primary': model }, checkboxClass]" class="border-primary m-0 size-6 rounded-sm border-2 duration-200">
      <Icon v-if="model" icon="check" class="text-inverted size-5" />
    </div>
    <div :class="labelClass">{{ label }}</div>
  </div>
</template>
