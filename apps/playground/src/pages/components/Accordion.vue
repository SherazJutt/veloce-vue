<template>
  <Accordion :items="items" />
</template>
<script setup lang="ts">
import { Accordion } from "@veloce/ui";

const items = [
  {
    title: "Item 1",
    content: "Content 1",
  },
  {
    title: "Item 2",
    content: "Content 2",
  },
  {
    title: "Item 3",
    content: "Content 3",
  },
];
</script>
