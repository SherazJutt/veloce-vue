<template>
  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="flex flex-wrap items-center gap-6">
    <ProgressSpinner severity="primary" />
    <ProgressSpinner severity="secondary" />
    <ProgressSpinner severity="success" />
    <ProgressSpinner severity="info" />
    <ProgressSpinner severity="warning" />
    <ProgressSpinner severity="error" />
    <ProgressSpinner severity="neutral" />
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="flex flex-wrap items-center gap-6">
    <ProgressSpinner size="sm" severity="primary" />
    <ProgressSpinner size="md" severity="primary" />
    <ProgressSpinner size="lg" severity="primary" />
    <ProgressSpinner size="xl" severity="primary" />
  </div>
</template>

<script setup lang="ts">
import { ProgressSpinner } from "veloce-vue/ui";

const props = defineProps({
  severities: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  class: { type: String, default: "" },
});
</script>

