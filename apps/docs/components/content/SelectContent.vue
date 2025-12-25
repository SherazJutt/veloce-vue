<template>
  <!-- Basic -->
  <div v-if="basic" :class="props.class">
    <Select v-model="selected1" :options="options" />
  </div>

  <!-- Variants -->
  <div v-if="variants" :class="props.class" class="space-y-3">
    <Select v-model="selected2" :options="options" variant="solid" severity="primary" />
    <Select v-model="selected3" :options="options" variant="outlined" severity="success" />
    <Select v-model="selected4" :options="options" variant="soft" severity="info" />
  </div>

  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="space-y-3">
    <Select v-model="selected5" :options="options" severity="primary" />
    <Select v-model="selected6" :options="options" severity="secondary" />
    <Select v-model="selected7" :options="options" severity="success" />
    <Select v-model="selected8" :options="options" severity="info" />
    <Select v-model="selected9" :options="options" severity="warning" />
    <Select v-model="selected10" :options="options" severity="error" />
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="space-y-3">
    <Select v-model="selected11" :options="options" size="sm" />
    <Select v-model="selected12" :options="options" size="md" />
    <Select v-model="selected13" :options="options" size="lg" />
    <Select v-model="selected14" :options="options" size="xl" />
  </div>

  <!-- With Filter -->
  <div v-if="withFilter" :class="props.class">
    <Select v-model="selected15" :options="filterOptions" :show-filter="true" />
  </div>
</template>

<script setup lang="ts">
import { Select } from "veloce-vue/ui";
import { ref } from "vue";

const props = defineProps({
  basic: { type: Boolean, default: false },
  variants: { type: Boolean, default: false },
  severities: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  withFilter: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
const filterOptions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew"];

const selected1 = ref("");
const selected2 = ref("");
const selected3 = ref("");
const selected4 = ref("");
const selected5 = ref("");
const selected6 = ref("");
const selected7 = ref("");
const selected8 = ref("");
const selected9 = ref("");
const selected10 = ref("");
const selected11 = ref("");
const selected12 = ref("");
const selected13 = ref("");
const selected14 = ref("");
const selected15 = ref("");
</script>

