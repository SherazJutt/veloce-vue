<template>
  <Accordion :items="items" />
</template>
<script setup lang="ts">
import { Accordion } from "@veloce/ui";
import { type AccordionItem } from "@veloce/types";

const items: AccordionItem[] = [
  {
    title: "Item 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: "moon",
  },
  {
    title: "Item 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: "sun",
  },
  {
    title: "Item 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: "hamburger",
  },
];
</script>
