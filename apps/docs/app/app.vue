<template>
  <div class="space-y-4 p-8">
    <h1 class="text-3xl font-bold">Veloce UI</h1>

    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Button Component</h2>
      <Button icon="check" variant="outline">Click me</Button>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Icons</h2>
      <div class="flex gap-2">
        <Icon icon="check" class="text-green-500" />
        <Icon icon="check" class="text-green-500" />
        <Icon icon="close" class="text-red-500" />
        <Icon icon="loading" class="animate-spin text-blue-500" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import styles
import { Button } from "veloce/ui";
import { Icon } from "veloce/icons";
</script>
