<template>
  <div class="grid-pattern relative w-full overflow-hidden">
    <div class="bg-grid absolute inset-0 opacity-30"></div>
    <div class="relative z-10">
      <UPageHero
        title="Build beautiful UIs with VeloceVue"
        description="A modern Vue.js UI component library built with Vue 3, TypeScript, and Tailwind CSS v4. Ship fast, flexible, and beautiful user interfaces with minimal setup."
        :links="links"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  {
    label: "Get started",
    to: "/getting-started/installation",
    trailingIcon: "i-lucide-arrow-right",
  },
  {
    label: "View on GitHub",
    to: "https://github.com/SherazJutt/veloce-vue",
    color: "neutral",
    icon: "simple-icons-github",
    size: "xl",
    variant: "outline",
  },
]);
</script>

<style>
.grid-pattern {
  min-height: 400px;
}

.bg-grid {
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgb(0 0 0 / 0.2) 1px, transparent 1px);
  background-size: 40px 40px;
}

.dark .bg-grid {
  background-image: linear-gradient(to right, rgb(255 255 255 / 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.2) 1px, transparent 1px);
}
</style>
