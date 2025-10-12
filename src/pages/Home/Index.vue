<template>
  <div>
    <h1 class="py-6 text-center text-3xl font-bold">Welcome</h1>

    <div class="mt-3">
      <h3 class="text-lg font-medium">Theme Colors</h3>

      <div class="mt-2.5 flex flex-wrap">
        <div v-for="color in colors" :key="color.name" class="grow basis-1/3 p-2 text-center text-white/85 first:rounded-l-md last:rounded-r-md" :style="{ backgroundColor: `var(${color.variable})` }">
          <div>{{ color.name }} color</div>
          <div>{{ getComputedColorValue(color.variable) || "Not found" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Color {
  name: string;
  variable: string;
}

const colors = ref<Color[]>([
  { name: "Primary", variable: "--ui-color-primary" },
  { name: "Secondary", variable: "--ui-color-secondary" },
  { name: "Accent", variable: "--ui-color-accent" },
]);

const getComputedColorValue = (variable: string) => {
  // Read the computed CSS variable value
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};
</script>
