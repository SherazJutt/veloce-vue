<template>
  <div>
    <RangeSlider v-model="value" @update:model-value="(value) => console.log(value)" />
    <br />
    <RangeSlider v-model="value2" show-tooltip tooltip-position="top" />
    <br />
    <RangeSlider v-model="value3" show-tooltip tooltip-position="bottom" />
  </div>
</template>
<script setup lang="ts">
import { RangeSlider } from "@veloce/ui";
import { ref } from "vue";

const value = ref(25);
const value2 = ref(50);
const value3 = ref(75);
</script>
