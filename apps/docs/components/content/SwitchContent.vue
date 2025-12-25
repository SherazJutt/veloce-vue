<template>
  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="flex flex-wrap items-center gap-4">
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Primary</span>
      <Switch v-model="value1" severity="primary" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Secondary</span>
      <Switch v-model="value2" severity="secondary" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Success</span>
      <Switch v-model="value3" severity="success" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Info</span>
      <Switch v-model="value4" severity="info" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Warning</span>
      <Switch v-model="value5" severity="warning" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Error</span>
      <Switch v-model="value6" severity="error" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Neutral</span>
      <Switch v-model="value7" severity="neutral" />
    </div>
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="flex flex-wrap items-center gap-6">
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Small</span>
      <Switch v-model="value8" size="sm" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Medium</span>
      <Switch v-model="value9" size="md" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Large</span>
      <Switch v-model="value10" size="lg" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Extra Large</span>
      <Switch v-model="value11" size="xl" />
    </div>
  </div>

  <!-- States -->
  <div v-if="states" :class="props.class" class="flex flex-wrap items-center gap-6">
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Unchecked</span>
      <Switch v-model="value12" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Checked</span>
      <Switch v-model="value13" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Disabled (Unchecked)</span>
      <Switch disabled v-model="value14" />
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-muted text-sm">Disabled (Checked)</span>
      <Switch disabled v-model="value15" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Switch } from "veloce-vue/ui";
import { ref } from "vue";

const props = defineProps({
  severities: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  states: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(true);
const value7 = ref(true);
const value8 = ref(true);
const value9 = ref(true);
const value10 = ref(true);
const value11 = ref(true);
const value12 = ref(false);
const value13 = ref(true);
const value14 = ref(false);
const value15 = ref(true);
</script>

