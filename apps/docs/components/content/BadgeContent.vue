<template>
  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="flex flex-wrap gap-3">
    <Badge value="2" />
    <Badge value="6" severity="secondary" />
    <Badge value="8" severity="success" />
    <Badge value="4" severity="info" />
    <Badge value="9" severity="warning" />
    <Badge value="3" severity="error" />
    <Badge value="5" severity="neutral" />
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Badge value="2" size="sm" />
    <Badge value="6" size="md" />
    <Badge value="8" size="lg" />
    <Badge value="99" size="xl" />
  </div>

  <!-- Dot Badges -->
  <div v-if="dotBadges" :class="props.class" class="flex flex-wrap gap-3">
    <Badge dot severity="primary" />
    <Badge dot severity="secondary" />
    <Badge dot severity="success" />
    <Badge dot severity="info" />
    <Badge dot severity="warning" />
    <Badge dot severity="error" />
    <Badge dot severity="neutral" />
  </div>

  <!-- Dot Sizes -->
  <div v-if="dotSizes" :class="props.class" class="flex flex-wrap items-center gap-3">
    <Badge dot size="sm" severity="primary" />
    <Badge dot size="md" severity="success" />
    <Badge dot size="lg" severity="info" />
    <Badge dot size="xl" severity="warning" />
  </div>

  <!-- With Text -->
  <div v-if="withText" :class="props.class" class="flex flex-wrap items-center gap-4">
    <span>Notifications</span>
    <Badge value="5" severity="error" />
    <span>Messages</span>
    <Badge value="12" severity="info" />
    <span>Updates</span>
    <Badge value="3" severity="success" />
  </div>

  <!-- Custom Slots -->
  <div v-if="customSlots" :class="props.class" class="flex flex-wrap gap-3">
    <Badge severity="primary">
      <span class="text-xs">New</span>
    </Badge>
    <Badge severity="success">
      <span class="px-4 text-xs">Sale</span>
    </Badge>
    <Badge severity="warning">
      <span class="h-8 p-2 text-xs">Hot</span>
    </Badge>
  </div>

  <!-- Notification Counts -->
  <div v-if="notificationCounts" :class="props.class" class="flex flex-wrap items-center gap-4">
    <button class="relative rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <Icon :icon="Bell" />
      <Badge class="absolute -top-2 -right-2" value="5" severity="error" />
    </button>
    <button class="relative rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <Icon :icon="Bell" />
      <Badge class="absolute -top-2 -right-2" value="12" severity="info" />
    </button>
    <button class="relative rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <Icon :icon="Bell" />
      <Badge class="absolute -top-2 -right-2" value="3" severity="success" />
    </button>
  </div>

  <!-- Status Indicators -->
  <div v-if="statusIndicators" :class="props.class" class="flex flex-wrap items-center gap-4">
    <div class="flex items-center gap-2">
      <Badge dot severity="success" />
      <span>Online</span>
    </div>
    <div class="flex items-center gap-2">
      <Badge dot severity="error" />
      <span>Offline</span>
    </div>
    <div class="flex items-center gap-2">
      <Badge dot severity="warning" />
      <span>Away</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "veloce-vue/ui";
import { Bell, Icon } from "veloce-vue/icons";

const props = defineProps({
  severities: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  dotBadges: { type: Boolean, default: false },
  dotSizes: { type: Boolean, default: false },
  withText: { type: Boolean, default: false },
  customSlots: { type: Boolean, default: false },
  notificationCounts: { type: Boolean, default: false },
  statusIndicators: { type: Boolean, default: false },
  class: { type: String, default: "" },
});
</script>
