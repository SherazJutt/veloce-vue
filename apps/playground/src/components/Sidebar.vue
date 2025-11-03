<template>
  <!-- sidebar -->
  <div :class="showSidebar ? 'w-[240px]' : 'w-0'" class="h-full shrink-0 overflow-hidden border-r border-gray-200 duration-200">
    <div class="space-y-2 p-2">
      <template v-for="component in components" :key="component.name">
        <router-link class="block" :to="{ name: component.pathName }">
          <Button class="w-full justify-start" variant="ghost">{{ component.name }}</Button>
        </router-link>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@ui/button";

const showSidebar = defineModel();

const components = [
  {
    name: "Button",
    pathName: "button",
  },
  {
    name: "Accordion",
    pathName: "accordion",
  },
];
</script>
