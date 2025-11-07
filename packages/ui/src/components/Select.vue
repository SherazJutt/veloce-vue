<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from "vue";
import { Button } from "@veloce/ui";
import { type Variant, type Severity, type Size, type FontWeight } from "@veloce/types";
import { onClickOutside } from "@vueuse/core";
import { motion, AnimatePresence } from "motion-v";
import { Input } from "@veloce/ui";

const props = defineProps({
  options: { type: Array as () => string[], required: true },
  variant: { type: String as () => Variant },
  severity: { type: String as () => Severity },
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

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => props.closeOnClickOutside && (isOpen.value = false));

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
};

const selectOption = (option: string) => {
  model.value = option;
  isOpen.value = false;
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
      <motion.ul
        v-if="isOpen"
        class="absolute top-full z-10 mt-1 flex w-full list-none flex-col rounded border shadow-md shadow-slate-500/10 dark:shadow-slate-900/20"
        :initial="{ opacity: 0, scale: 0.95, y: -10 }"
        :animate="{ opacity: 1, scale: 1, y: 0 }"
        :exit="{ opacity: 0, scale: 0.95, y: -10 }"
        :transition="{
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1],
        }"
      >
        <li v-if="showFilter" class="border-b p-2">
          <Input v-model="searchQuery" placeholder="Search" />
          <!-- <input
            type="text"
            v-model="searchQuery"
            :class="optionSizeClasses"
            class="bg-background text-foreground border-border focus:border-primary w-full rounded-sm border px-2 py-1 focus:outline-none"
            placeholder="Search"
          /> -->
        </li>
        <li
          v-for="(option, index) in filteredOptions"
          :key="index"
          :class="[optionSizeClasses, option === selectedOption ? 'bg-neutral-100' : 'text-dimmed']"
          class="cursor-pointer border border-transparent text-left transition-colors duration-150 hover:bg-neutral-100"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </motion.ul>
    </AnimatePresence>
  </div>
</template>
