<template>
  <div class="space-y-4 p-8">
    <h1 class="text-3xl font-bold">Veloce UI</h1>

    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Button Component</h2>
      <Button icon="check">Click me</Button>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Import from subpath</h2>
      <ButtonUI icon="alert" variant="outline">From veloce/ui</ButtonUI>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl font-semibold">Icons</h2>
      <div class="flex gap-2">
        <Icon icon="check" class="text-green-500" />
        <Icon icon="close" class="text-red-500" />
        <Icon icon="loading" class="animate-spin text-blue-500" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import styles
import "veloce/styles.css";

// Main export
import { Button } from "veloce/ui";

// Subpath exports
import { Button as ButtonUI } from "veloce/ui";
import { Icon, type Icons } from "veloce/icons";

// Full autocomplete for icon names!
const icon: Icons = "check"; // Type: "alert" | "check" | "chevron-down" | "close" | "hamburger" | "loading"
</script>
