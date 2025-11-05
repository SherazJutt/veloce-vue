<script setup lang="ts">
import { ref } from "vue";
import { Icon, type Icons } from "@veloce/icons";

// Props definition
// `items` is an array of objects where each object represents an accordion item.
// Each item has a `title` (string), `content` (string), and an optional `slot` (string) for custom slot rendering.
const props = defineProps({
  items: { type: Array as () => { title: string; content: string; slot?: string; icon?: Icons }[], required: true },
  shadow: { type: Boolean, default: false },
});

// This ref holds the index of the currently active (opened) accordion item.
// If `null`, no accordion item is open.
const activeIndex = ref<Number | null>(null);
</script>

<template>
  <!-- Accordion Container -->
  <div :class="{ shadow: props.shadow }" class="bg-background w-full divide-y overflow-hidden rounded border">
    <!-- Iterate through items array -->
    <div v-for="(item, index) in items" :key="index" v-if="items.length" class="text-sm">
      <!-- Accordion Header -->
      <!-- Clicking toggles activeIndex between `index` and `null` (for collapse) -->
      <div class="relative flex justify-between gap-4 p-3 font-medium duration-100 hover:bg-neutral-100 dark:hover:bg-neutral-800" @click="activeIndex = activeIndex === index ? null : index">
        <div>
          <!-- leading icon -->
          <Icon v-if="item.icon" :icon="item.icon" class="size-5 duration-200" />
          <!-- Accordion Title -->
          <span>{{ item.title }}</span>
        </div>
        <!-- Chevron Icon -->
        <Icon icon="chevron-down" :class="{ 'rotate-180 ': activeIndex === index }" class="size-5 duration-200" />
      </div>

      <!-- Accordion Body -->
      <div v-if="activeIndex === index" class="text-muted p-3">
        <!-- If slot name is provided, render slot content -->
        <template v-if="item.slot">
          <slot :name="item.slot" />
        </template>
        <!-- Otherwise, render static content -->
        <template v-else>
          {{ item.content }}
        </template>
      </div>
    </div>

    <!-- Fallback message if no items provided -->
    <div class="px-3 py-6 text-center" v-else>No items to show</div>
  </div>
</template>
