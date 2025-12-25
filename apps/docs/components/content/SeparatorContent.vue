<template>
  <!-- Directions -->
  <div v-if="directions" :class="props.class" class="space-y-4">
    <div>
      <Separator direction="horizontal" />
    </div>
    <div class="flex h-32 items-center justify-center">
      <Separator direction="vertical" />
    </div>
  </div>

  <!-- Types -->
  <div v-if="types" :class="props.class" class="space-y-4">
    <Separator type="solid" direction="horizontal" />
    <Separator type="dashed" direction="horizontal" />
    <Separator type="dotted" direction="horizontal" />
  </div>

  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="space-y-3">
    <Separator severity="primary" direction="horizontal" />
    <Separator severity="secondary" direction="horizontal" />
    <Separator severity="success" direction="horizontal" />
    <Separator severity="info" direction="horizontal" />
    <Separator severity="warning" direction="horizontal" />
    <Separator severity="error" direction="horizontal" />
    <Separator severity="neutral" direction="horizontal" />
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="space-y-4">
    <Separator size="sm" direction="horizontal" />
    <Separator size="md" direction="horizontal" />
    <Separator size="lg" direction="horizontal" />
    <Separator size="xl" direction="horizontal" />
  </div>

  <!-- With Label -->
  <div v-if="withLabel" :class="props.class" class="space-y-3">
    <Separator label="Section Title" direction="horizontal" />
    <Separator label="Primary" severity="primary" direction="horizontal" />
    <Separator label="Success" severity="success" direction="horizontal" />
  </div>

  <!-- With Icon -->
  <div v-if="withIcon" :class="props.class" class="space-y-3">
    <Separator :icon="Alert" direction="horizontal" />
    <Separator :icon="Check" severity="success" direction="horizontal" />
    <Separator :icon="Close" severity="error" direction="horizontal" />
  </div>

  <!-- With Icon and Label -->
  <div v-if="withIconAndLabel" :class="props.class" class="space-y-3">
    <Separator :icon="Alert" label="Section Title" direction="horizontal" />
    <Separator :icon="Check" label="Success" severity="success" direction="horizontal" />
    <Separator :icon="Close" label="Error" severity="error" direction="horizontal" />
  </div>

  <!-- Bordered -->
  <div v-if="bordered" :class="props.class" class="space-y-3">
    <Separator label="Bordered Label" bordered direction="horizontal" />
    <Separator :icon="Alert" bordered direction="horizontal" />
    <Separator :icon="Check" label="Bordered" bordered direction="horizontal" />
  </div>

  <!-- Rounded -->
  <div v-if="rounded" :class="props.class" class="space-y-3">
    <Separator bordered label="Rounded Label" rounded direction="horizontal" />
    <Separator :icon="Alert" bordered rounded direction="horizontal" />
    <Separator :icon="Check" label="Rounded" bordered rounded direction="horizontal" />
  </div>
</template>

<script setup lang="ts">
import { Separator } from "veloce-vue/ui";
import { Alert, Check, Close } from "veloce-vue/icons";

const props = defineProps({
  directions: { type: Boolean, default: false },
  types: { type: Boolean, default: false },
  severities: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  withLabel: { type: Boolean, default: false },
  withIcon: { type: Boolean, default: false },
  withIconAndLabel: { type: Boolean, default: false },
  bordered: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  class: { type: String, default: "" },
});
</script>

