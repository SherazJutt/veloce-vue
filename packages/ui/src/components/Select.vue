<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from "vue";
import { Button } from "@veloce/ui";
import { type Variant, type Severity, type Size, type FontWeight } from "@veloce/types";
import { onClickOutside } from "@vueuse/core";
import { motion, AnimatePresence } from "motion-v";
import { Input } from "@veloce/ui";
import { Icon } from "@veloce/icons";
const props = defineProps({
  options: { type: Array as () => string[], required: true },
  variant: { type: String as () => Variant, default: "outlined" as Variant },
  severity: { type: String as () => Severity, default: "neutral" as Severity },
  size: { type: String as () => Size, default: "md" },
  showFilter: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: false },
  closeOnClickOutside: { type: Boolean, default: true },
  fontWeight: { type: String as () => FontWeight, default: "normal" },
});

const emit = defineEmits(["update:isOpen"]);

const model = defineModel<string>();

const selectedOption = computed(() => model.value);
const isOpen = ref(props.isOpen ?? false);
const isHoveringOption = ref<boolean>(false);

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => {
  props.closeOnClickOutside;
  isOpen.value = false;
  closeMenu();
});

// Keep `isOpen` in sync with external prop and emit updates
watch(
  () => props.isOpen,
  (val) => val !== isOpen.value && (isOpen.value = val),
);

watch(isOpen, (val) => {
  emit("update:isOpen", val);
});

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  if (!isOpen.value) closeMenu();
};

const selectOption = (option: string) => {
  model.value = option;
  closeMenu();
};

const closeMenu = () => {
  isOpen.value = false;
  isHoveringOption.value = false;
  searchQuery.value = "";
};

const searchQuery = ref("");

// Computed for filtering options based on search input
const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options;
  return props.options.filter((option: string) => option.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

// Size classes for options matching Button component
const optionSizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "text-sm py-1 px-2";
    case "md":
      return "text-sm py-1.5 px-2.5";
    case "lg":
      return "text-base py-2 px-3";
    case "xl":
      return "text-lg py-2.5 px-3.5";
  }
});

const buttonLabel = computed(() => selectedOption.value || "Select");
</script>

<template>
  <div class="relative" ref="target">
    <!-- select trigger -->
    <Button
      :icon-class="isOpen ? 'rotate-180 transition-transform duration-200' : 'transition-transform duration-200'"
      icon="chevron-down"
      class="justify-between! w-full capitalize"
      :variant="variant"
      :size="size"
      :label="buttonLabel"
      :font-weight="fontWeight"
      :severity="severity"
      @click="toggleOpen"
    />

    <!-- select menu -->
    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        class="bg-background absolute top-full z-10 mt-1 flex w-full list-none flex-col rounded border shadow-md shadow-slate-500/10 dark:shadow-slate-900/20"
        :initial="{ opacity: 0, scale: 1, y: -25 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 1, y: -25 }"
        :transition="{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1],
          y: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
        }"
      >
        <div v-if="showFilter" class="border-b p-2">
          <Input v-model="searchQuery" trailing-icon="search" placeholder="Search" :size="size" />
        </div>
        <ul class="h-full max-h-[220px] overflow-y-auto overflow-x-hidden p-2">
          <li
            v-for="(option, index) in filteredOptions"
            :key="index"
            :class="[optionSizeClasses, { 'dark:text-neutral-300': option !== selectedOption }, { 'bg-neutral-100/75 dark:bg-neutral-800/75': option === selectedOption && !isHoveringOption }]"
            class="flex w-full cursor-pointer items-center justify-between rounded border border-transparent text-left transition-colors duration-150 hover:bg-neutral-100/75 dark:hover:bg-neutral-800/75"
            @mouseenter="isHoveringOption = true"
            @click="selectOption(option)"
          >
            <span>{{ option }} </span>
            <Icon v-if="option === selectedOption" icon="check" class="size-5" />
          </li>
          <li v-if="filteredOptions.length === 0" :class="optionSizeClasses" class="">No options found</li>
        </ul>
      </motion.div>
    </AnimatePresence>
  </div>
</template>
