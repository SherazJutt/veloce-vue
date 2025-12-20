<script setup lang="ts">
import { computed, ref } from 'vue';
import { Icon, ChevronDown } from '../exports/icons';
import { motion, AnimatePresence } from 'motion-v';
import { type AccordionItem, type Size } from '../exports/types';

// Props definition
// `items` is an array of objects where each object represents an accordion item.
// Each item has a `title` (string), `content` (string), and an optional `slot` (string) for custom slot rendering or an optional `icon` (string) for an icon.
// `multiple` determines if multiple items can be open at the same time (default: false - single mode)
const props = defineProps({
  items: { type: Array as () => AccordionItem[], required: true },
  shadow: { type: Boolean, default: false },
  contentClass: { type: String, default: '' },
  headerClass: { type: String, default: '' },
  multiple: { type: Boolean, default: false },
  bordered: { type: Boolean, default: true },
  rounded: { type: String as () => Size | 'none', default: 'sm' },
});

// Track active state for each accordion item by index
const activeItems = ref<Record<number, boolean>>({});

// Combine props.items with active state
const accordionItems = computed(() => {
  return props.items.map((item, index) => ({ ...item, active: activeItems.value[index] ?? item.active ?? false }));
});

// Toggle active state for an accordion item by index
const toggleItem = (index: number) => {
  const isCurrentlyActive = activeItems.value[index] ?? false;
  const willBeActive = !isCurrentlyActive;

  if (props.multiple) {
    // Multiple mode: allow multiple items to be open
    activeItems.value[index] = willBeActive;
  } else {
    // Single mode: close all other items when opening a new one
    if (willBeActive) {
      // Close all items first
      Object.keys(activeItems.value).forEach((key) => {
        activeItems.value[Number(key)] = false;
      });
      // Then open the clicked item
      activeItems.value[index] = true;
    } else {
      // Just close the clicked item
      activeItems.value[index] = false;
    }
  }
};

const roundedClasses = computed(() => {
  return {
    none: '',
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  };
});
</script>

<template>
  <!-- Accordion Container -->
  <div :class="[{ shadow: props.shadow, border: props.bordered }, roundedClasses[props.rounded]]" class="bg-background w-full divide-y overflow-hidden">
    <!-- Iterate through items array -->
    <div v-for="(item, index) in accordionItems" :key="index" v-if="accordionItems.length" class="text-sm">
      <!-- Accordion Header -->
      <!-- Clicking toggles activeIndex between `index` and `null` (for collapse) -->
      <div :class="[headerClass, { 'bg-neutral-50! dark:bg-neutral-700/15!': item.active }]" class="relative flex justify-between gap-4 p-3 font-medium duration-100 hover:bg-neutral-100 dark:hover:bg-neutral-800" @click="toggleItem(index)">
        <div class="accordion-title-main flex items-center gap-2">
          <!-- leading icon -->
          <Icon v-if="item.icon" :icon="item.icon" class="accordion-title-icon size-5 duration-200" />
          <!-- Accordion Title -->
          <span class="accordion-title-text">{{ item.title }}</span>
        </div>
        <!-- Chevron Icon -->
        <Icon :icon="ChevronDown" :class="{ 'rotate-180 ': item.active }" class="accordion-chevron-icon size-5 duration-200" />
      </div>

      <!-- Accordion Body -->
      <AnimatePresence>
        <motion.div
          v-if="item.active"
          :class="{ 'bg-neutral-50! dark:bg-neutral-700/15!': item.active }"
          class="overflow-hidden"
          :initial="{ opacity: 0, height: 0 }"
          :animate="{ opacity: 1, height: 'auto' }"
          :exit="{ opacity: 1, height: 0 }"
          :transition="{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.2 },
            height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
          }"
        >
          <div :class="contentClass" class="text-muted p-3">
            <!-- If slot name is provided, render slot content -->
            <template v-if="item.slot">
              <slot :name="item.slot" />
            </template>
            <!-- Otherwise, render static content -->
            <template v-else>
              {{ item.content }}
            </template>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    <!-- Fallback message if no items provided -->
    <div class="px-3 py-6 text-center" v-else>No items to show</div>
  </div>
</template>
