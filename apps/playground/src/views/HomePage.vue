<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Veloce Vue UI Components
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          Explore our beautiful collection of Vue components
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="component in components"
          :key="component.path"
          :to="component.path"
          class="group bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transform hover:-translate-y-1"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="text-4xl">{{ component.icon }}</div>
            <svg 
              class="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1 duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
            {{ component.name }}
          </h2>
          <p class="text-slate-600 dark:text-slate-400">
            {{ component.description }}
          </p>
          <div class="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
            View Examples →
          </div>
        </router-link>
      </div>

      <div class="mt-16 text-center">
        <div class="inline-block bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 border border-slate-200 dark:border-slate-700">
          <p class="text-slate-600 dark:text-slate-400 mb-2">
            Total Components
          </p>
          <p class="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {{ components.length }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const components = computed(() => [
  {
    name: 'Button',
    path: '/button',
    icon: '🔘',
    description: 'Interactive button component with multiple variants, sizes, and states for user actions.'
  },
  {
    name: 'Accordion',
    path: '/accordion',
    icon: '📂',
    description: 'Expandable accordion component for organizing content in collapsible sections.'
  }
]);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>

