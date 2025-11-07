<template>
  <div class="flex flex-col gap-2">
    <Select :is-open="true" v-model="model" :options="options" :show-filter="true" />
  </div>
</template>
<script setup lang="ts">
import { Select } from "@veloce/ui";
import { ref } from "vue";

const model = ref("");
const options = ref([
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  "Option 9",
  "Option 10",
  "Option 11",
  "Option 12",
  "Option 13",
  "Option 14",
  "Option 15",
  "Option 16",
  "Option 17",
  "Option 18",
  "Option 19",
  "Option 20",
  "Option 21",
  "Option 22",
  "Option 23",
  "Option 24",
  "Option 25",
  "Option 26",
  "Option 27",
  "Option 28",
  "Option 29",
]);
</script>
