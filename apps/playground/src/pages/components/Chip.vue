<template>
  <div class="space-y-8 p-4">
    <!-- Basic Chips -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Chips</h2>
      <div class="flex flex-wrap gap-3">
        <Chip label="Primary" />
        <Chip label="Secondary" severity="secondary" />
        <Chip label="Success" severity="success" />
        <Chip label="Info" severity="info" />
        <Chip label="Warning" severity="warning" />
        <Chip label="Error" severity="error" />
        <Chip label="Neutral" severity="neutral" />
      </div>
    </section>

    <!-- With Icons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Icons</h2>
      <div class="flex flex-wrap gap-3">
        <Chip :icon="Check" label="Apple" />
        <Chip :icon="Check" label="Facebook" severity="info" />
        <Chip :icon="Check" label="Google" severity="success" />
        <Chip :icon="Check" label="Microsoft" severity="warning" />
        <Chip :icon="Check" label="GitHub" severity="error" />
      </div>
    </section>

    <!-- Removable Chips -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Removable Chips</h2>
      <div class="flex flex-wrap gap-3">
        <Chip v-for="chip in chips" :key="chip.label" :label="chip.label" :severity="chip.severity" removable @remove="removeChip(chip)" />
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Chip label="Small" size="sm" />
        <Chip label="Medium" size="md" />
        <Chip label="Large" size="lg" />
        <Chip label="Extra Large" size="xl" />
      </div>
    </section>

    <!-- Rounded -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Rounded</h2>
      <div class="flex flex-wrap gap-3">
        <Chip label="Default" />
        <Chip label="Rounded" rounded />
        <Chip label="Rounded" rounded severity="success" />
        <Chip :icon="Check" label="Rounded" rounded severity="info" />
      </div>
    </section>

    <!-- Custom Content -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Custom Content</h2>
      <div class="flex flex-wrap gap-3">
        <Chip severity="primary">
          <span class="font-bold">Custom</span>
          <span class="text-xs opacity-75">Content</span>
        </Chip>
        <Chip :icon="Check" severity="success"> Custom Slot </Chip>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Chip } from "@veloce-vue/ui";
import { Check } from "@veloce-vue/icons";

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
