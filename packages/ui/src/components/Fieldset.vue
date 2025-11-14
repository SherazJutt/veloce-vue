<script setup lang="ts">
import { computed, type Component } from "vue";
import { Icon, ChevronDown } from "@veloce/icons";

const props = defineProps({
  legend: { type: String, default: "" },
  icon: { type: Object as () => Component, default: () => null },
  toggleable: { type: Boolean, default: false },
  collapsed: { type: Boolean, default: false },
});

const isCollapsed = defineModel<boolean>("collapsed", { default: false });

const toggleCollapse = () => {
  if (props.toggleable) {
    isCollapsed.value = !isCollapsed.value;
  }
};
</script>

<template>
  <fieldset class="border-border bg-background w-full rounded border p-4">
    <legend
      v-if="props.legend || props.icon || props.toggleable"
      :class="{ 'cursor-pointer': props.toggleable }"
      class="flex items-center gap-2 px-2 text-sm font-semibold"
      @click="toggleCollapse"
    >
      <Icon v-if="props.icon" :icon="props.icon" class="size-4" />
      <span>{{ props.legend }}</span>
      <Icon v-if="props.toggleable" :icon="ChevronDown" :class="{ 'rotate-180': !isCollapsed }" class="size-4 transition-transform duration-200" />
    </legend>
    <div v-if="!isCollapsed || !props.toggleable" class="mt-2">
      <slot />
    </div>
  </fieldset>
</template>

