<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center gap-4 bg-gray-100 p-4">
      <Button @click="showSidebar = !showSidebar">Toggle</Button>
      <h1 class="text-base font-medium">VeloceVue Playground</h1>
    </header>
    <main class="relative flex flex-1">
      <!-- sidebar -->
      <div :class="showSidebar ? 'left-0' : '-left-full'" class="absolute bottom-0 top-0 w-[240px] shrink-0 overflow-hidden border-r border-gray-200 bg-white transition-all duration-200">
        <Sidebar v-model="showSidebar" />
      </div>
      <div :class="showSidebar ? 'lg:ml-[240px]' : ''" class="flex-1 p-2 duration-200">
        <router-view />
      </div>
    </main>
    <footer class="bg-gray-100 p-4">
      <p class="text-center text-sm">© 2025 VeloceVue. All rights reserved.</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@ui/button";
import Sidebar from "@/components/Sidebar.vue";

const showSidebar = ref(true);
</script>
