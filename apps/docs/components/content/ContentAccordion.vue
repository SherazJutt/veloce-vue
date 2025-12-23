<template>
  <Accordion v-if="type === 'default'" :items="itemsContent" />
  <Accordion v-if="type === 'rounded-none'" :items="items" rounded="none" />
  <Accordion v-if="type === 'shadow'" :items="itemsContent" shadow />
  <Accordion v-if="type === 'multiple'" :items="MultipleOpenItems" :multiple="true" />
  <Accordion v-if="type === 'bordered'" :items="itemsContent" :bordered="false" />
</template>
<script setup lang="ts">
import { Accordion } from "veloce-vue/ui";
import { type AccordionItem } from "veloce-vue/types";
import { Moon, Sun, Hamburger } from "veloce-vue/icons";

const props = defineProps({
  type: {
    type: String as () => "default" | "rounded-none" | "shadow" | "multiple" | "bordered",
    required: false,
  },
});

const itemsContent: AccordionItem[] = [
  {
    title: "Item 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
  },
  {
    title: "Item 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
  },
  {
    title: "Item 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, eos! Voluptas explicabo odit quis earum nobis! Totam, molestias, magni beatae illum assumenda ipsum quas a nemo, tenetur perferendis minima quis!",
  },
];

const items: AccordionItem[] = itemsContent.map((item, index) => ({
  ...item,
  icon: [Moon, Sun, Hamburger][index],
}));

const MultipleOpenItems: AccordionItem[] = itemsContent.map((item, index) => ({
  ...item,
  icon: [Moon, Sun, Hamburger][index],
  active: index < 2,
}));
</script>
