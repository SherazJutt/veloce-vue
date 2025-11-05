<template>
  <Accordion :items="items" />
</template>
<script setup lang="ts">
import { Accordion, type AccordionItem } from "@veloce/ui";

const items: AccordionItem[] = [
  {
    title: "Item 1",
    content: "Content 1",
    icon: "moon",
  },
  {
    title: "Item 2",
    content: "Content 2",
    icon: "sun",
  },
  {
    title: "Item 3",
    content: "Content 3",
    icon: "hamburger",
  },
];
</script>
