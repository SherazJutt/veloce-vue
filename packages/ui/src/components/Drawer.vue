<template>
  <div @click="show = !show">
    <slot />
  </div>

  <!-- drawer  -->
  <div :class="[drawerdirections, defaultClasses]" class="bg-background z-50 flex flex-col justify-between duration-300">
    <div class="border-b p-2">
      <div class="flex items-center justify-between gap-2">
        <!-- title -->
        <h4 class="text-[0.95em] font-medium">{{ title }}</h4>
        <!-- close button -->
        <Button icon="close" class="p-1!" circle variant="ghost" @click="show = false" />
      </div>
      <!-- description -->
      <p class="text-muted text-sm">{{ description }}</p>
    </div>
    <div class="size-full overflow-auto p-2">
      <slot name="content" />
    </div>
    <!-- footer -->
    <div v-if="showFooter" class="border-t p-2">
      <slot name="footer" />
    </div>
  </div>
  <div :class="show ? 'opacity-100' : 'pointer-events-none'" class="z-49 fixed inset-0 bg-black/40 opacity-0 duration-200" @click="show = false"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Button } from "@veloce/ui";

const props = defineProps({
  direction: { type: String as () => "left" | "bottom" | "right", default: "bottom", options: ["left", "bottom", "right"] },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  showFooter: { type: Boolean, default: false },
  show: { type: Boolean, default: false },
});

const show = defineModel();

const drawerdirections = computed(() => {
  let currClasses = "";

  switch (props.direction) {
    case "left":
      currClasses = show.value ? "fixed top-0 left-0 bottom-0" : "fixed top-0 -left-full bottom-0";
      break;
    case "bottom":
      currClasses = show.value ? "fixed left-0 bottom-0 right-0" : "fixed left-0 right-0 -bottom-full";
      break;
    case "right":
      currClasses = show.value ? "fixed top-0 right-0 bottom-0" : "fixed top-0 -right-full bottom-0";
      break;
    default:
      alert("Invalid direction");
  }

  return currClasses;
});

const defaultClasses = computed(() => {
  let classes = "";

  switch (props.direction) {
    case "left":
      classes = "w-full max-w-[22.5rem]";
      break;
    case "bottom":
      classes = "w-full h-full max-h-[90dvh]";
      break;
    case "right":
      classes = "w-full max-w-[22.5rem]";
      break;
    default:
      break;
  }

  return classes;
});

// watch(show, () => {
//   if (show.value) {
//     document.body.classList.add("overflow-hidden");
//   } else {
//     document.body.classList.remove("overflow-hidden");
//   }
// });
</script>
