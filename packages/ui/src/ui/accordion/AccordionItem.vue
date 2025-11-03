<script setup lang="ts">
import type { AccordionItemProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { AccordionItem, useForwardProps } from "reka-ui";
import { cn } from "@veloce/lib";

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <AccordionItem :class="cn('border-b last:border-b-0', props.class)" data-slot="accordion-item" v-bind="forwardedProps">
    <slot />
  </AccordionItem>
</template>
