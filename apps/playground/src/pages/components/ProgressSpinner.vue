<template>
  <div class="space-y-8 p-4">
    <!-- Basic Spinners -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Spinners</h2>
      <div class="flex flex-wrap items-center gap-6">
        <ProgressSpinner :stroke-width="8" severity="primary" />
        <ProgressSpinner severity="secondary" />
        <ProgressSpinner severity="success" />
        <ProgressSpinner severity="info" />
        <ProgressSpinner severity="warning" />
        <ProgressSpinner severity="error" />
        <ProgressSpinner severity="neutral" />
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="flex flex-wrap items-center gap-6">
        <ProgressSpinner size="sm" severity="primary" />
        <ProgressSpinner size="md" severity="primary" />
        <ProgressSpinner size="lg" severity="primary" />
        <ProgressSpinner size="xl" severity="primary" />
      </div>
    </section>

    <!-- Different Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Different Severities</h2>
      <div class="flex flex-wrap items-center gap-6">
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner severity="primary" />
          <span class="text-muted text-xs">Primary</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner severity="success" />
          <span class="text-muted text-xs">Success</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner severity="info" />
          <span class="text-muted text-xs">Info</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner severity="warning" />
          <span class="text-muted text-xs">Warning</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <ProgressSpinner severity="error" />
          <span class="text-muted text-xs">Error</span>
        </div>
      </div>
    </section>

    <!-- With Text -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Text</h2>
      <div class="flex items-center gap-4">
        <ProgressSpinner severity="primary" />
        <span class="text-muted">Loading...</span>
      </div>
    </section>

    <!-- Custom Stroke Width -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Custom Stroke Width</h2>
      <div class="flex flex-wrap items-center gap-6">
        <ProgressSpinner :stroke-width="2" severity="primary" />
        <ProgressSpinner :stroke-width="4" severity="primary" />
        <ProgressSpinner :stroke-width="6" severity="primary" />
        <ProgressSpinner :stroke-width="8" severity="primary" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ProgressSpinner } from "@veloce/ui";
</script>
