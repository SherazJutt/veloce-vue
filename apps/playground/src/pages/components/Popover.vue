<template>
  <div class="flex size-full items-center justify-center gap-4">
    <Popover position="bottom">
      <Button label="Open" />
      <template #body>
        <p class="mb-2 text-sm">Hello</p>
        <Button label="Close" />
      </template>
    </Popover>

    <Popover position="top">
      <Button label="Open (Top)" />
      <template #body>
        <p class="mb-2 text-sm">Popover from the top</p>
        <Button label="Close" variant="soft" />
      </template>
    </Popover>
  </div>
</template>
<script setup lang="ts">
import { Popover, Button } from "@veloce-vue/ui";
</script>
