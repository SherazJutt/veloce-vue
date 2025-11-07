<template>
  <div>
    <div class="flex flex-wrap gap-4">
      <div v-for="icon in iconsList" :key="icon" class="hover:border-border flex flex-col items-center gap-1 rounded border border-transparent p-2">
        <Icon :icon="icon" class="size-8" />
        <h5 class="text-muted text-sm">{{ icon }}</h5>
      </div>
    </div>
    <h4 class="mt-6 border-t py-3 text-center">Total icons: {{ iconsList.length }}</h4>
  </div>
</template>

<script setup lang="ts">
import { Icon, iconsList } from "@veloce/icons";
</script>
