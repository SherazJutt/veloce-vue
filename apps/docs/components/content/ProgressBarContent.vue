<template>
  <!-- Basic -->
  <div v-if="basic" :class="props.class" class="space-y-4">
    <ProgressBar :value="25" severity="primary" />
    <ProgressBar :value="50" severity="secondary" />
    <ProgressBar :value="75" severity="success" />
    <ProgressBar :value="100" severity="info" />
  </div>

  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="space-y-4">
    <ProgressBar :value="40" severity="primary" />
    <ProgressBar :value="40" severity="secondary" />
    <ProgressBar :value="40" severity="success" />
    <ProgressBar :value="40" severity="info" />
    <ProgressBar :value="40" severity="warning" />
    <ProgressBar :value="40" severity="error" />
    <ProgressBar :value="40" severity="neutral" />
  </div>

  <!-- Striped -->
  <div v-if="striped" :class="props.class" class="space-y-4">
    <ProgressBar :value="50" striped severity="primary" />
    <ProgressBar :value="70" striped severity="success" />
    <ProgressBar :value="85" striped severity="warning" />
  </div>

  <!-- Animated -->
  <div v-if="animated" :class="props.class" class="space-y-4">
    <ProgressBar :value="progressValue" animated severity="primary" />
    <ProgressBar :value="progressValue" animated striped severity="success" />
  </div>

  <!-- Indeterminate -->
  <div v-if="indeterminate" :class="props.class" class="space-y-4">
    <ProgressBar mode="indeterminate" severity="primary" />
    <ProgressBar mode="indeterminate" severity="success" />
    <ProgressBar mode="indeterminate" severity="info" />
  </div>
</template>

<script setup lang="ts">
import { ProgressBar } from "veloce-vue/ui";
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  basic: { type: Boolean, default: false },
  severities: { type: Boolean, default: false },
  striped: { type: Boolean, default: false },
  animated: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const progressValue = ref(0);
let animationInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  if (props.animated) {
    animationInterval = setInterval(() => {
      if (progressValue.value < 100) {
        progressValue.value += 10;
      } else {
        progressValue.value = 0;
      }
    }, 500);
  }
});

onUnmounted(() => {
  if (animationInterval) {
    clearInterval(animationInterval);
  }
});
</script>

