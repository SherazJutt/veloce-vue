<script setup lang="ts">
import { ref, watch } from "vue";
import Button from "../button/Index.vue";
import { props as modalProps } from "./props";

const props = defineProps(modalProps);
const emit = defineEmits(["update:show"]);

const show = ref(props.show ?? false);

// Keep `show` in sync with external prop
watch(
  () => props.show,
  (val) => {
    if (val !== show.value) show.value = val;
  },
);

// Emit change when internal state changes
watch(show, (val) => {
  emit("update:show", val);
  document.body.classList.toggle("overflow-hidden", val);
});
</script>

<template>
  <div class="w-full" @click="show = true">
    <slot />
  </div>

  <!-- Modal backdrop -->
  <div v-if="show" class="modal-backdrop fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center backdrop-blur-[2px]">
    <!-- Modal -->
    <div class="flex max-w-[600px] flex-col overflow-hidden rounded border border-gray-200 bg-white text-slate-500 shadow-xl shadow-slate-700/10 sm:max-h-[95dvh] sm:w-[90%]" role="document">
      <!-- Modal header -->
      <div class="flex items-center gap-4 border-b border-gray-200 px-4 py-2">
        <h3 class="text-primary flex-1 text-xl font-medium">Modal title</h3>
        <Button icon="close" class="!p-1" variant="ghost" circle @click="show = false" />
      </div>

      <!-- Modal body -->
      <div class="max-h-[calc(100dvh-100px)] flex-1 overflow-auto px-4 py-2 sm:max-h-[75vh]">
        <slot name="content" />
      </div>

      <!-- Modal footer -->
      <div v-if="$slots.footer" class="border-t border-gray-200 px-4 py-2">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
