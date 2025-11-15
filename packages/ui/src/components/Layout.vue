<template>
  <header class="flex h-14 items-center justify-between gap-4 border-b px-4">
    <div class="flex items-center gap-2">
      <Button :icon="Hamburger" iconClass="size-6" class="p-1!" variant="soft" @click="toggleSidebar" />
      <slot name="left-actions" />
    </div>

    <div class="header-actions flex items-center gap-2">
      <slot name="right-actions" />
    </div>
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
        <slot name="sidebar" :showSidebar="showSidebar" @close="toggleSidebar" />
      </motion.div>
    </AnimatePresence>
    <div :class="{ 'lg:ml-[240px]': showSidebar }" class="h-full overflow-auto p-2 transition-[margin-left] duration-300 ease-in-out">
      <slot name="view" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "@veloce-vue/ui";
import { Hamburger } from "@veloce-vue/icons";
import { motion, AnimatePresence } from "motion-v";

const emit = defineEmits<{ (e: "sidebar", showSidebar: boolean): void }>();

const model = defineModel<boolean>({ default: false });
const showSidebar = ref(model.value ?? false);
const isInitialLoad = ref(true);

onMounted(() => setTimeout(() => (isInitialLoad.value = false), 100));

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
  model.value = showSidebar.value;
  emit("sidebar", showSidebar.value);
};
</script>
