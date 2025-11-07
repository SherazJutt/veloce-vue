<template>
  <!-- sidebar -->
  <div :class="showSidebar ? 'w-[240px]' : 'w-0'" class="h-full shrink-0 overflow-hidden">
    <div class="space-y-1 p-2">
      <template v-for="component in components" :key="component.name">
        <router-link class="block" :to="{ name: component.pathName }" v-slot="{ isActive }" @click="handleItemClick">
          <Button :class="isActive ? 'text-primary!' : 'text-muted'" class="w-full justify-start" size="sm" :label="component.name" :variant="isActive ? 'soft' : 'ghost'" />
        </router-link>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@veloce/ui";

const props = defineProps({
  closeOnClick: { type: Boolean, default: false },
});

const emit = defineEmits<{ close: [] }>();

const showSidebar = defineModel();

const handleItemClick = () => {
  if (props.closeOnClick) {
    emit("close");
  }
};

const components = [
  {
    name: "Button",
    pathName: "button",
  },
  {
    name: "Accordion",
    pathName: "accordion",
  },
  {
    name: "Checkbox",
    pathName: "checkbox",
  },
  {
    name: "Drawer",
    pathName: "drawer",
  },
  {
    name: "Input",
    pathName: "input",
  },
  {
    name: "Modal",
    pathName: "modal",
  },
  {
    name: "Popover",
    pathName: "popover",
  },
  {
    name: "RangeSlider",
    pathName: "range-slider",
  },
];
</script>
