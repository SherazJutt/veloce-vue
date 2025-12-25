<template>
  <!-- Basic -->
  <div v-if="basic" :class="props.class">
    <RangeSlider v-model="value1" />
  </div>

  <!-- With Tooltip -->
  <div v-if="withTooltip" :class="props.class">
    <RangeSlider v-model="value2" show-tooltip />
  </div>

  <!-- Tooltip Position -->
  <div v-if="tooltipPosition" :class="props.class" class="space-y-4">
    <div>
      <p class="text-muted mb-2 text-sm">Tooltip Top</p>
      <RangeSlider v-model="value3" show-tooltip tooltip-position="top" />
    </div>
    <div>
      <p class="text-muted mb-2 text-sm">Tooltip Bottom</p>
      <RangeSlider v-model="value4" show-tooltip tooltip-position="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RangeSlider } from "veloce-vue/ui";
import { ref } from "vue";

const props = defineProps({
  basic: { type: Boolean, default: false },
  withTooltip: { type: Boolean, default: false },
  tooltipPosition: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const value1 = ref(50);
const value2 = ref(30);
const value3 = ref(70);
const value4 = ref(40);
</script>

