<template>
  <div>
    <h1 class="my-4 text-center text-2xl font-semibold">Components</h1>
    <Button variant="outline">Click me</Button>
    <Icon icon="check" />
    <pre>{{ iconsList }}</pre>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@veloce/ui";
import { Icon, iconsList } from "@veloce/icons";
</script>
