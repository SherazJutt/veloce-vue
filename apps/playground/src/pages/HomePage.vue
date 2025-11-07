<template>
  <div class="mx-auto max-w-6xl space-y-8 p-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="mb-2 text-4xl font-bold">VeloceVue</h1>
      <p class="text-muted text-lg">A modern Vue 3 component library</p>
    </div>

    <!-- Components Grid -->
    <section>
      <h2 class="mb-6 text-2xl font-semibold">Components</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <router-link v-for="component in components" :key="component.pathName" class="group" :to="{ name: component.pathName }">
          <div class="hover:border-primary bg-background flex h-full cursor-pointer flex-col rounded-lg border p-6 transition-all duration-200 hover:shadow-md">
            <h3 class="group-hover:text-primary mb-2 text-lg font-semibold">{{ component.name }}</h3>
            <p v-if="component.description" class="text-muted text-sm">{{ component.description }}</p>
            <div class="mt-auto pt-4">
              <span class="text-primary text-sm font-medium group-hover:underline">View Component →</span>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { global } from "@store/global";

const { components } = global();
</script>
