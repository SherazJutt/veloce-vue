<script setup lang="ts">
import { Button } from "@veloce/ui";
import { motion, AnimatePresence } from "motion-v";
import { useWindowSize } from "@vueuse/core";

const show = defineModel();

const { width } = useWindowSize();
</script>

<template>
  <div class="w-fit" @click="show = true">
    <slot />
  </div>

  <!-- Modal backdrop -->
  <AnimatePresence :initial="false">
    <motion.div
      v-if="show"
      class="modal-backdrop z-99999999 fixed left-0 top-0 flex items-center justify-center backdrop-blur-[2px]"
      :initial="{ opacity: 0, scale: width < 768 ? 1 : 0.85, translateX: width < 768 ? '-120px' : '0' }"
      :animate="{ opacity: 1, scale: 1, translateX: '0' }"
      :exit="{ opacity: 0, scale: 1, translateX: '-120px' }"
      :transition="{
        duration: 0.15,
        scale: { type: 'spring', visualDuration: 0.2, bounce: 0.25 },
      }"
    >
      <!-- Modal -->
      <div class="bg-background text-muted flex max-w-[600px] flex-col overflow-hidden rounded border shadow-xl shadow-slate-700/10 sm:max-h-[95dvh] sm:w-[90%]" role="document">
        <!-- Modal header -->
        <div class="flex items-center gap-4 border-b px-4 py-2">
          <h3 class="text-primary flex-1 text-lg font-medium">Modal title</h3>
          <Button icon="close" class="p-1!" variant="ghost" circle @click="show = false" />
        </div>

        <!-- Modal body -->
        <div class="max-h-[calc(100dvh-100px)] flex-1 overflow-auto px-4 py-2 sm:max-h-[75vh]">
          <slot name="content" />
        </div>

        <!-- Modal footer -->
        <div v-if="$slots.footer" class="border-t px-4 py-2">
          <slot name="footer" />
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</template>
