<template>
  <div class="flex flex-wrap gap-6">
    <Icon v-for="icon in iconsList" :key="icon" :icon="icon" class="size-8" />
  </div>
</template>

<script setup lang="ts">
import { Icon, iconsList } from "@veloce/icons";
</script>
