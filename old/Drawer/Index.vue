<template>
  <div @click="show = !show">
    <slot />
  </div>

  <!-- drawer  -->
  <div :class="[drawerdirections, defaultClasses]" class="z-50 flex flex-col justify-between bg-white duration-300">
    <div class="flex justify-between border-b border-gray-200 p-2">
      <div>
        <h4 class="font-semibold">{{ title }}</h4>
        <p class="text-sm text-gray-500">{{ description }}</p>
      </div>
      <div class="ml-auto">
        <Button icon="material-symbols:close-rounded" class="!p-1" circle variant="text" @click="show = false" />
      </div>
    </div>
    <div class="size-full overflow-auto p-2">
      <slot name="content" />
    </div>
    <!-- footer -->
    <div v-if="footer" class="border-t border-gray-200 p-2">
      <slot name="footer" />
    </div>
  </div>
  <div :class="show ? 'opacity-100' : 'pointer-events-none'" class="fixed inset-0 z-[49] bg-black/40 opacity-0 duration-200" @click="show = false"></div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Button from "../Button/Index.vue";

const props = defineProps({
  direction: { type: String as () => "left" | "bottom" | "right", default: "bottom" },
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  footer: { type: Boolean, default: false },
});

const show = ref(false);

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
      classes = "w-full max-w-[360px]";
      break;
    case "bottom":
      classes = "w-full h-full max-h-[90dvh]";
      break;
    case "right":
      classes = "w-full max-w-[360px]";
      break;
    default:
      break;
  }

  return classes;
});

watch(show, () => {
  if (show.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});
</script>
