<template>
  <div class="flex flex-col gap-2">
    <Select :is-open="true" v-model="model" size="md" :options="options" :show-filter="true" />
  </div>
</template>
<script setup lang="ts">
import { Select } from "@veloce/ui";
import { ref } from "vue";

const model = ref("");
const options = ref(["Option 1", "Option 2", "Option 3"]);
</script>
