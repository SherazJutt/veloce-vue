<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex items-center justify-between gap-4 border-b p-4">
      <div class="flex items-center gap-2">
        <Button icon="hamburger" class="p-1!" @click="showSidebar = !showSidebar" />
        <router-link to="/">
          <h1 class="text-base font-medium">VeloceVue Playground</h1>
        </router-link>
      </div>
      <Button :icon="isDark ? 'sun' : 'moon'" class="p-1!" @click="toggleDark" />
    </header>
    <main class="relative flex flex-1">
      <!-- sidebar -->
      <div :class="showSidebar ? 'left-0' : '-left-full'" class="bg-background absolute bottom-0 top-0 w-[240px] shrink-0 overflow-hidden border-r duration-150">
        <Sidebar v-model="showSidebar" />
      </div>
      <div :class="showSidebar ? 'lg:ml-[240px]' : ''" class="flex-1 p-2 duration-150">
        <router-view />
      </div>
    </main>
    <footer class="border-t p-4">
      <p class="text-center text-sm">© 2025 VeloceVue. All rights reserved.</p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@veloce/ui";
import { useColorMode } from "@veloce/composables";
import Sidebar from "@/components/Sidebar.vue";

const showSidebar = ref(true);

const { isDark, toggleDark } = useColorMode();
</script>
