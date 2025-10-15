<template>
  <div class="h-screen w-full">
    <div class="flex h-12 items-center gap-6 border-b border-gray-300 bg-gray-100 px-4">
      <Button icon="check" class="!p-0" @click="showSidebar = !showSidebar" />
      <h3>Navbar</h3>
    </div>
    <div class="flex h-[calc(100%-48px)]">
      <!-- sidebar -->
      <div :class="showSidebar ? 'w-[240px]' : 'w-0'" class="h-full shrink-0 overflow-hidden border-r border-gray-300 duration-200">
        <div class="p-2">sidebar</div>
      </div>
      <div class="h-full w-full p-2">router view</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/button/Index.vue";

const showSidebar = ref<boolean>(false);
</script>
