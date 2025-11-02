<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center gap-4 bg-gray-100 p-4">
      <Button @click="showSidebar = !showSidebar">Toggle</Button>
      <h1 class="text-base font-medium">VeloceVue Playground</h1>
    </header>
    <main class="relative flex flex-1">
      <!-- sidebar -->
      <div :class="showSidebar ? 'left-0' : '-left-full'" class="absolute bottom-0 top-0 w-[240px] shrink-0 overflow-hidden border-r border-gray-200 bg-white shadow duration-200">
        <div class="space-y-2 p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat tempora expedita vel facere, veritatis adipisci quisquam velit totam amet reiciendis corrupti, error dolores officiis eveniet, debitis laudantium molestias ut.</div>
      </div>
      <div class="flex-1 p-2">
        <p v-for="_ in 150">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ut quo molestias sequi dolorum ratione libero est? Consequuntur possimus nostrum, saepe explicabo voluptates praesentium inventore quaerat laborum fugit aperiam expedita?</p>
        <router-view />
      </div>
    </main>
    <footer class="bg-gray-100 p-4">
      <p class="text-center text-sm">© 2025 VeloceVue. All rights reserved.</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "@ui/button";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const isMobile = computed(() => width.value < 992);

const showSidebar = ref(true);
</script>
