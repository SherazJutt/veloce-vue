<template>
  <!-- Positions -->
  <div v-if="positions" :class="props.class" class="flex flex-wrap items-center gap-4">
    <Popover position="bottom">
      <Button label="Open Bottom" />
      <template #body>
        <p class="mb-2 text-sm">Popover content from bottom</p>
        <Button label="Close" />
      </template>
    </Popover>
    <Popover position="top">
      <Button label="Open Top" />
      <template #body>
        <p class="mb-2 text-sm">Popover content from top</p>
        <Button label="Close" variant="soft" />
      </template>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, Button } from "veloce-vue/ui";

const props = defineProps({
  positions: { type: Boolean, default: false },
  class: { type: String, default: "" },
});
</script>

