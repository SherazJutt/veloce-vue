<template>
  <div class="pb-16">
    <H4 text="Default Accordion" margin-bottom="md" />
    <Accordion :items="items" />

    <H4 text="Rounded none" margin-bottom="md" />
    <Accordion :items="items" rounded="none" />

    <H4 text="shadow" margin-bottom="md" />
    <Accordion :items="items" shadow />

    <H4 text="Multiple Open" margin-bottom="md" />
    <Accordion :items="MultipleOpenItems" :multiple="true" />

    <H4 text="No Border" margin-bottom="md" />
    <Accordion :items="items" :bordered="false" />
  </div>
</template>
<script setup lang="ts">
import { Accordion } from "@veloce/ui";
import { H4 } from "@veloce/typography";
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

const MultipleOpenItems: AccordionItem[] = [
  {
    title: "Item 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: "moon",
    active: true,
  },
  {
    title: "Item 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: "sun",
    active: true,
  },
  {
    title: "Item 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
    icon: "hamburger",
  },
];
</script>
