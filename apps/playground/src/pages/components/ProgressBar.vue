<template>
  <div class="space-y-8 p-4">
    <!-- Basic Progress Bars -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Progress Bars</h2>
      <div class="space-y-4">
        <ProgressBar :value="25" severity="primary" />
        <ProgressBar :value="50" severity="secondary" />
        <ProgressBar :value="75" severity="success" />
        <ProgressBar :value="100" severity="info" />
      </div>
    </section>

    <!-- With Values -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Values</h2>
      <div class="space-y-4">
        <ProgressBar :value="30" show-value severity="primary" />
        <ProgressBar :value="60" show-value severity="success" />
        <ProgressBar :value="90" show-value severity="warning" />
      </div>
    </section>

    <!-- Different Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Different Severities</h2>
      <div class="space-y-4">
        <ProgressBar :value="40" severity="primary" show-value />
        <ProgressBar :value="40" severity="secondary" show-value />
        <ProgressBar :value="40" severity="success" show-value />
        <ProgressBar :value="40" severity="info" show-value />
        <ProgressBar :value="40" severity="warning" show-value />
        <ProgressBar :value="40" severity="error" show-value />
        <ProgressBar :value="40" severity="neutral" show-value />
      </div>
    </section>

    <!-- Striped -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Striped</h2>
      <div class="space-y-4">
        <ProgressBar :value="50" striped severity="primary" />
        <ProgressBar :value="70" striped severity="success" />
        <ProgressBar :value="85" striped severity="warning" />
      </div>
    </section>

    <!-- Animated -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Animated</h2>
      <div class="space-y-4">
        <ProgressBar :value="progressValue" animated severity="primary" show-value />
        <ProgressBar :value="progressValue" animated striped severity="success" show-value />
      </div>
      <div class="mt-4 flex gap-2">
        <Button label="Start Animation" @click="startAnimation" />
        <Button label="Reset" @click="resetProgress" />
      </div>
    </section>

    <!-- Dynamic Progress -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Dynamic Progress</h2>
      <ProgressBar :value="dynamicProgress" severity="info" show-value />
      <div class="mt-4 flex gap-2">
        <Button label="Increase" @click="increaseProgress" />
        <Button label="Decrease" @click="decreaseProgress" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ProgressBar, Button } from "@veloce/ui";

const progressValue = ref(0);
const dynamicProgress = ref(30);

let animationInterval: ReturnType<typeof setInterval> | null = null;

const startAnimation = () => {
  if (animationInterval) {
    clearInterval(animationInterval);
  }
  progressValue.value = 0;
  animationInterval = setInterval(() => {
    if (progressValue.value < 100) {
      progressValue.value += 10;
    } else {
      if (animationInterval) {
        clearInterval(animationInterval);
        animationInterval = null;
      }
    }
  }, 500);
};

const resetProgress = () => {
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }
  progressValue.value = 0;
};

const increaseProgress = () => {
  dynamicProgress.value = Math.min(dynamicProgress.value + 10, 100);
};

const decreaseProgress = () => {
  dynamicProgress.value = Math.max(dynamicProgress.value - 10, 0);
};
</script>

