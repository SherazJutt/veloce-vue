<template>
  <!-- Variants -->
  <div v-if="variants" :class="props.class" class="flex flex-wrap gap-3">
    <Button label="Solid" />
    <Button variant="outlined" label="Outlined" />
    <Button variant="soft" label="Soft" />
    <Button variant="ghost" label="Ghost" />
    <Button variant="link" label="Link" />
  </div>

  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="flex flex-wrap gap-3">
    <Button severity="primary" label="Primary" />
    <Button severity="secondary" label="Secondary" />
    <Button severity="success" label="Success" />
    <Button severity="info" label="Info" />
    <Button severity="warning" label="Warning" />
    <Button severity="error" label="Error" />
    <Button severity="neutral" label="Neutral" />
  </div>

  <!-- Variants × Severities -->
  <div v-if="variantsWithSeverities" :class="props.class" class="flex flex-col gap-6">
    <div v-if="variantsWithSeveritiesVariant === 'solid'" class="flex flex-wrap gap-3">
      <Button variant="solid" severity="primary" label="Solid Primary" />
      <Button variant="solid" severity="secondary" label="Solid Secondary" />
      <Button variant="solid" severity="success" label="Solid Success" />
      <Button variant="solid" severity="info" label="Solid Info" />
      <Button variant="solid" severity="warning" label="Solid Warning" />
      <Button variant="solid" severity="error" label="Solid Error" />
      <Button variant="solid" severity="neutral" label="Solid Neutral" />
    </div>
    <div v-if="variantsWithSeveritiesVariant === 'soft'" class="flex flex-wrap gap-3">
      <Button variant="soft" severity="primary" label="Soft Primary" />
      <Button variant="soft" severity="secondary" label="Soft Secondary" />
      <Button variant="soft" severity="success" label="Soft Success" />
      <Button variant="soft" severity="info" label="Soft Info" />
      <Button variant="soft" severity="warning" label="Soft Warning" />
      <Button variant="soft" severity="error" label="Soft Error" />
      <Button variant="soft" severity="neutral" label="Soft Neutral" />
    </div>
    <div v-if="variantsWithSeveritiesVariant === 'outlined'" class="flex flex-wrap gap-3">
      <Button variant="outlined" severity="primary" label="Outlined Primary" />
      <Button variant="outlined" severity="secondary" label="Outlined Secondary" />
      <Button variant="outlined" severity="success" label="Outlined Success" />
      <Button variant="outlined" severity="info" label="Outlined Info" />
      <Button variant="outlined" severity="warning" label="Outlined Warning" />
      <Button variant="outlined" severity="error" label="Outlined Error" />
      <Button variant="outlined" severity="neutral" label="Outlined Neutral" />
    </div>
    <div v-if="variantsWithSeveritiesVariant === 'ghost'" class="flex flex-wrap gap-3">
      <Button variant="ghost" severity="primary" label="Ghost Primary" />
      <Button variant="ghost" severity="secondary" label="Ghost Secondary" />
      <Button variant="ghost" severity="success" label="Ghost Success" />
      <Button variant="ghost" severity="info" label="Ghost Info" />
      <Button variant="ghost" severity="warning" label="Ghost Warning" />
      <Button variant="ghost" severity="error" label="Ghost Error" />
      <Button variant="ghost" severity="neutral" label="Ghost Neutral" />
    </div>
    <div v-if="variantsWithSeveritiesVariant === 'link'" class="flex flex-wrap gap-3">
      <Button variant="link" severity="primary" label="Link Primary" />
      <Button variant="link" severity="secondary" label="Link Secondary" />
      <Button variant="link" severity="success" label="Link Success" />
      <Button variant="link" severity="info" label="Link Info" />
      <Button variant="link" severity="warning" label="Link Warning" />
      <Button variant="link" severity="error" label="Link Error" />
      <Button variant="link" severity="neutral" label="Link Neutral" />
    </div>
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button size="sm" label="Small" />
    <Button size="md" label="Medium" />
    <Button size="lg" label="Large" />
    <Button size="xl" label="Extra Large" />
  </div>

  <!-- Icons -->
  <div v-if="icons" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button :icon-position="props.iconSide" :icon="Check" label="Success" severity="success" />
    <Button :icon-position="props.iconSide" :icon="Close" label="Cancel" severity="error" />
    <Button :icon-position="props.iconSide" :icon="Info" label="Info" severity="info" />
    <Button :icon-position="props.iconSide" :icon="Alert" label="Warning" severity="warning" />
  </div>

  <!-- Icon Only -->
  <div v-if="iconOnly" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button :icon="Check" severity="success" />
    <Button :icon="Close" severity="error" />
    <Button :icon="Info" severity="info" />
    <Button :icon="Alert" severity="warning" />
  </div>

  <!-- States -->
  <div v-if="states" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button label="Normal" />
    <Button disabled label="Disabled" />
    <Button loading label="Loading" />
  </div>

  <!-- Font Weights -->
  <div v-if="fontWeights" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button font-weight="normal" label="Normal" />
    <Button font-weight="medium" label="Medium" />
    <Button font-weight="semibold" label="Semibold" />
    <Button font-weight="bold" label="Bold" />
  </div>

  <!-- Neumorphic Style -->
  <div v-if="neumorphicStyle" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button neumorphic label="Neumorphic" variant="soft" severity="neutral" />
    <Button neumorphic label="Neumorphic" variant="soft" severity="primary" />
    <Button neumorphic label="Neumorphic" variant="soft" severity="secondary" />
  </div>

  <!-- slots -->
  <div v-if="customSlots" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Button>
      <span class="font-bold">Download</span>
      <span class="text-xs opacity-75">PDF</span>
    </Button>
    <Button variant="outlined" severity="success">
      <span>Save</span>
      <span class="ml-1 text-xs">✓</span>
    </Button>
    <Button severity="info">
      <span class="font-semibold">Messages</span>
      <span class="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.5 text-xs">3</span>
    </Button>
    <Button variant="soft" severity="warning">
      <span>Upgrade</span>
      <span class="ml-1 text-xs opacity-75">Pro</span>
    </Button>
    <Button variant="outlined" severity="error">
      <span class="font-medium">Delete</span>
      <span class="ml-1 opacity-60">🫡</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "veloce-vue/ui";
import { Check, Close, Info, Alert, Sun, Moon } from "veloce-vue/icons";
import type { Position, Variant } from "veloce-vue/types";

const props = defineProps({
  variants: { type: Boolean, default: false },
  severities: { type: Boolean, default: false },
  variantsWithSeverities: { type: Boolean, default: false },
  variantsWithSeveritiesVariant: { type: String as () => Variant, default: "solid" },
  sizes: { type: Boolean, default: false },
  icons: { type: Boolean, default: false },
  iconSide: { type: String as () => Position, default: "left" },
  iconOnly: { type: Boolean, default: false },
  states: { type: Boolean, default: false },
  class: { type: String, default: "" },
  fontWeights: { type: Boolean, default: false },
  neumorphicStyle: { type: Boolean, default: false },
  customSlots: { type: Boolean, default: false },
});
</script>
