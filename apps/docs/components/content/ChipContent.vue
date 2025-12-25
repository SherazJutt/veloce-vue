<template>
  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="flex flex-wrap gap-3">
    <Chip label="Primary" />
    <Chip label="Secondary" severity="secondary" />
    <Chip label="Success" severity="success" />
    <Chip label="Info" severity="info" />
    <Chip label="Warning" severity="warning" />
    <Chip label="Error" severity="error" />
    <Chip label="Neutral" severity="neutral" />
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Chip label="Small" size="sm" />
    <Chip label="Medium" size="md" />
    <Chip label="Large" size="lg" />
    <Chip label="Extra Large" size="xl" />
  </div>

  <!-- With Icons -->
  <div v-if="withIcons" :class="props.class" class="flex flex-wrap gap-3">
    <Chip :icon="Check" label="Apple" />
    <Chip :icon="Check" label="Facebook" severity="info" />
    <Chip :icon="Check" label="Google" severity="success" />
    <Chip :icon="Check" label="Microsoft" severity="warning" />
    <Chip :icon="Check" label="GitHub" severity="error" />
  </div>

  <!-- Removable -->
  <div v-if="removable" :class="props.class" class="flex flex-wrap gap-3">
    <Chip v-for="chip in chips" :key="chip.label" :label="chip.label" :severity="chip.severity" removable @remove="removeChip(chip)" />
  </div>

  <!-- Rounded -->
  <div v-if="rounded" :class="props.class" class="flex flex-wrap gap-3">
    <Chip label="Default" />
    <Chip label="Rounded" rounded />
    <Chip label="Rounded" rounded severity="success" />
    <Chip :icon="Check" label="Rounded" rounded severity="info" />
  </div>

  <!-- Custom Slots -->
  <div v-if="customSlots" :class="props.class" class="flex flex-wrap gap-3">
    <Chip severity="primary">
      <span class="font-bold">Custom</span>
      <span class="text-xs opacity-75">Content</span>
    </Chip>
    <Chip :icon="Check" severity="success"> Custom Slot </Chip>
  </div>
</template>

<script setup lang="ts">
import { Chip } from "veloce-vue/ui";
import { Check } from "veloce-vue/icons";
import { ref } from "vue";

const props = defineProps({
  severities: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  withIcons: { type: Boolean, default: false },
  removable: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  customSlots: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const chips = ref([
  { label: "Apple", severity: "primary" as const },
  { label: "Facebook", severity: "info" as const },
  { label: "Google", severity: "success" as const },
  { label: "Microsoft", severity: "warning" as const },
  { label: "GitHub", severity: "error" as const },
]);

const removeChip = (chip: { label: string; severity: string }) => {
  chips.value = chips.value.filter((c) => c.label !== chip.label);
};
</script>

