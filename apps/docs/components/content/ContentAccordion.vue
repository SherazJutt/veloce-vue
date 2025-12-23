<template>
  <Accordion v-if="type === 'default'" :items="itemsContent" />

  <Accordion v-if="type === 'rounded-none'" :items="itemsContent" rounded="none" />
  <Accordion v-if="type === 'rounded-sm'" :items="itemsContent" rounded="sm" />
  <Accordion v-if="type === 'rounded-md'" :items="itemsContent" rounded="md" />
  <Accordion v-if="type === 'rounded-lg'" :items="itemsContent" rounded="lg" />
  <Accordion v-if="type === 'rounded-xl'" :items="itemsContent" rounded="xl" />

  <Accordion v-if="type === 'shadow'" :items="itemsContent" shadow />
  <Accordion v-if="type === 'single'" :items="SingleOpenItem" />
  <Accordion v-if="type === 'multiple'" :items="MultipleOpenItems" :multiple="true" />
  <Accordion v-if="type === 'without-border'" :items="itemsContent" :bordered="false" />
  <Accordion v-if="type === 'with-border'" :items="itemsContent" :bordered="true" />
  <Accordion v-if="type === 'with-icons'" :items="items" />
  <Accordion v-if="type === 'custom-classes'" contentClass="text-blue-600 font-semibold" headerClass="text-purple-600" :items="itemsContent" />
</template>
<script setup lang="ts">
import { Accordion } from "veloce-vue/ui";
import { type AccordionItem } from "veloce-vue/types";
import { Moon, Sun, Hamburger } from "veloce-vue/icons";

const props = defineProps({
  type: {
    type: String as () => "default" | "rounded-none" | "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-xl" | "shadow" | "single" | "multiple" | "without-border" | "with-border" | "with-icons" | "custom-classes" | "shadow-multiple",
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

const SingleOpenItem: AccordionItem[] = itemsContent.map((item, index) => ({
  ...item,
  icon: [Moon, Sun, Hamburger][index],
  active: index === 0,
}));

const MultipleOpenItems: AccordionItem[] = itemsContent.map((item, index) => ({
  ...item,
  icon: [Moon, Sun, Hamburger][index],
  active: index === 0 || index === 2,
}));
</script>
