<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex h-14 items-center justify-between gap-4 border-b px-4">
      <div class="flex items-center gap-2">
        <Button icon="hamburger" iconClass="size-6" class="p-1!" variant="soft" @click="showSidebar = !showSidebar" />
        <router-link to="/">
          <h1 class="text-base font-medium">VeloceVue</h1>
        </router-link>
      </div>
      <Button :icon="isDark ? 'sun' : 'moon'" class="p-1!" variant="ghost" @click="toggleDark" />
    </header>
    <main class="relative flex flex-1">
      <!-- sidebar -->
      <AnimatePresence>
        <motion.div
          v-if="showSidebar"
          class="bg-background absolute bottom-0 left-0 top-0 z-50 w-[240px] shrink-0 overflow-hidden border-r"
          :initial="{ x: -240 }"
          :animate="{ x: 0 }"
          :exit="{ x: -240 }"
          :transition="{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }"
        >
          <Sidebar v-model="showSidebar" :close-on-click="isMobile" @close="closeSidebar" />
        </motion.div>
      </AnimatePresence>
      <div :class="{ 'lg:ml-[240px]': showSidebar }" class="flex-1 p-2 transition-[margin-left] duration-300 ease-in-out">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { Button } from "@veloce/ui";
import { useColorMode } from "@veloce/composables";
import { useWindowSize } from "@vueuse/core";
import { motion, AnimatePresence } from "motion-v";
import Sidebar from "@/components/Sidebar.vue";

const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 992);

// Initialize sidebar state based on screen size (default to false for mobile-first)
const showSidebar = ref(false);

// Watch window size and set initial state, then update on resize
watch(
  width,
  (newWidth) => {
    if (newWidth > 0) {
      // Only update if width is available (browser environment)
      showSidebar.value = newWidth > 992;
    }
  },
  { immediate: true },
);

const { isDark, toggleDark } = useColorMode();

// Function to close sidebar (used on mobile when item is clicked)
const closeSidebar = () => {
  if (isMobile.value) {
    showSidebar.value = false;
  }
};
</script>
