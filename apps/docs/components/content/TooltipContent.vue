<template>
  <!-- Positions -->
  <div v-if="positions" :class="props.class" class="grid gap-4 max-md:w-3/4 max-md:max-w-[320px] md:grid-cols-2 lg:grid-cols-4">
    <Tooltip content="Tooltip Content" position="top">
      <Button class="w-full" label="Tooltip Top" severity="neutral" />
    </Tooltip>
    <Tooltip content="Tooltip Content" position="bottom">
      <Button class="w-full" label="Tooltip Bottom" severity="secondary" />
    </Tooltip>
    <Tooltip content="Tooltip Content" position="left">
      <Button class="w-full" label="Tooltip Left" severity="success" />
    </Tooltip>
    <Tooltip content="Tooltip Content" position="right">
      <Button class="w-full" label="Tooltip Right" severity="primary" />
    </Tooltip>
  </div>

  <!-- Custom Content -->
  <div v-if="customContent" :class="props.class">
    <Tooltip position="bottom">
      <Button label="Hover for Custom Content" />
      <template #body>
        <div class="p-2">
          <p class="font-semibold">Custom Tooltip</p>
          <p class="text-muted text-xs">This is custom tooltip content</p>
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip, Button } from "veloce-vue/ui";

const props = defineProps({
  positions: { type: Boolean, default: false },
  customContent: { type: Boolean, default: false },
  class: { type: String, default: "" },
});
</script>

