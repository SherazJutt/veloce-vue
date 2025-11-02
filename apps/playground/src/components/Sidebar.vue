<template>
  <!-- sidebar -->
  <div :class="showSidebar ? 'w-[240px]' : 'w-0'" class="h-full shrink-0 overflow-hidden border-r border-gray-200 duration-200">
    <div class="space-y-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat tempora expedita vel facere, veritatis adipisci quisquam velit totam amet reiciendis corrupti, error dolores officiis eveniet, debitis laudantium molestias ut.</div>
  </div>
</template>
<script setup lang="ts">
const showSidebar = defineModel();
</script>
