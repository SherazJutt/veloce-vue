<template>
  <Checkbox v-model="model" label="Click me" />
</template>
<script setup lang="ts">
import { Checkbox } from "@veloce/ui";
import { ref } from "vue";

const model = ref(false);
</script>
