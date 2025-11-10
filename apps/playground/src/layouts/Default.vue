<template>
  <header class="flex h-14 items-center justify-between gap-4 border-b px-4">
    <div class="flex items-center gap-2">
      <Button icon="hamburger" iconClass="size-6" class="p-1!" variant="soft" @click="showSidebar = !showSidebar" />
      <router-link to="/">
        <h1 class="text-base font-medium">VeloceVue</h1>
      </router-link>
    </div>
    <Button :icon="isDark ? 'sun' : 'moon'" class="p-1!" variant="ghost" @click="toggleDark" />
  </header>
  <main class="relative h-[calc(100dvh-3.5rem)] overflow-hidden">
    <!-- sidebar -->
    <AnimatePresence>
      <motion.div
        v-if="showSidebar"
        class="bg-background absolute bottom-0 left-0 top-0 z-50 w-[240px] shrink-0 overflow-hidden border-r"
        :initial="isInitialLoad && showSidebar ? { x: 0 } : { x: -240 }"
        :animate="{ x: 0 }"
        :exit="{ x: -240 }"
        :transition="{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }"
      >
        <Sidebar v-model="showSidebar" :close-on-click="isMobile" @close="showSidebar = false" />
      </motion.div>
    </AnimatePresence>
    <div :class="{ 'lg:ml-[240px]': showSidebar }" class="h-full overflow-auto p-2 transition-[margin-left] duration-300 ease-in-out">
      <router-view />
    </div>
  </main>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { Button } from "@veloce/ui";
import { useColorMode } from "@veloce/composables";
import { useWindowSize, useStorage } from "@vueuse/core";
import { motion, AnimatePresence } from "motion-v";
import Sidebar from "@/components/Sidebar.vue";

const { isDark, toggleDark } = useColorMode();

const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 992);

const showSidebar = useStorage("showSidebar", false);
const isInitialLoad = ref(true);

onMounted(() => setTimeout(() => (isInitialLoad.value = false), 100));
</script>
