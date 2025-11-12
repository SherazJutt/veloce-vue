<template>
  <div class="flex size-full items-center justify-center">
    <div class="grid gap-4 max-md:w-3/4 max-md:max-w-[320px] md:grid-cols-2 lg:grid-cols-4">
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
  </div>
</template>
<script setup lang="ts">
import { Tooltip, Button } from "@veloce/ui";
</script>
