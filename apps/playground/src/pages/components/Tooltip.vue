<template>
  <div class="flex size-full items-center justify-center gap-4">
    <Tooltip content="Tooltip Content" position="top">
      <Button label="Tooltip Top" severity="neutral" />
    </Tooltip>

    <Tooltip content="Tooltip Content" position="bottom">
      <Button label="Tooltip Bottom" severity="secondary" />
    </Tooltip>

    <Tooltip content="Tooltip Content" position="left">
      <Button label="Tooltip Left" severity="success" />
    </Tooltip>

    <Tooltip content="Tooltip Content" position="right">
      <Button label="Tooltip Right" severity="primary" />
    </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { Tooltip, Button } from "@veloce/ui";
</script>
