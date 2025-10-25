<script setup lang="ts">
import { AccordionRoot, AccordionContent, AccordionItem, AccordionTrigger } from "./index";

const props = defineProps<{
  items: { value: string; title: string; content: string }[];
}>();
</script>

<template>
  <AccordionRoot type="single" class="w-full" collapsible :default-value="props.items[0]?.value">
    <AccordionItem v-for="item in props.items" :key="item.value" :value="item.value">
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
