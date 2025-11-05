<script setup lang="ts">
import { ref, watch } from "vue";
import { Button } from "@veloce/ui";

const show = defineModel();

// Emit change when internal state changes
// watch(show, (val) => {
//   emit("update:show", val);
//   document.body.classList.toggle("overflow-hidden", val);
// });
</script>

<template>
  <div @click="show = true">
    <slot />
  </div>

  <!-- Modal backdrop -->
  <div v-if="show" class="modal-backdrop fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center backdrop-blur-[2px]">
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
  </div>
</template>
