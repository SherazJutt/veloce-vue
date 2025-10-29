<script setup lang="ts">
import { AccordionRoot, AccordionContent, AccordionItem, AccordionTrigger } from "./index";

const props = defineProps<{
  defaultOpen?: boolean;
  items: { value: string; title: string; content: string }[];
  allowMultiple?: boolean;
  border?: boolean;
}>();
</script>

<template>
  <AccordionRoot :type="props.allowMultiple ? 'multiple' : 'single'" v-if="props.items.length" :class="{ border: props.border }" class="w-full" collapsible :default-value="props.defaultOpen ? props.items[0]?.value : undefined">
    <AccordionItem v-for="item in props.items" :key="item.value" :value="item.value">
      <AccordionTrigger class="px-2 py-3">{{ item.title }}</AccordionTrigger>
      <AccordionContent class="px-2 pb-3">
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>

  <!-- Fallback message if no items provided -->
  <div class="px-3 py-6 text-center text-gray-500" v-else>No items to show</div>
</template>
<style></style>
