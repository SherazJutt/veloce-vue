<template>
  <!-- Variants -->
  <div v-if="variants" :class="props.class" class="space-y-4">
    <div>
      <Skeleton variant="text" width="100%" height="1rem" />
      <Skeleton variant="text" width="90%" height="1rem" />
      <Skeleton variant="text" width="75%" height="1rem" />
    </div>
    <div class="flex items-center gap-4">
      <Skeleton variant="circular" width="3rem" height="3rem" />
      <div class="flex-1 space-y-2">
        <Skeleton width="60%" height="1rem" />
        <Skeleton width="40%" height="0.75rem" />
      </div>
    </div>
    <Skeleton variant="rectangular" width="100%" height="200px" />
  </div>

  <!-- Animations -->
  <div v-if="animations" :class="props.class" class="space-y-4">
    <div>
      <h3 class="text-muted mb-2 text-sm font-medium">Pulse (Default)</h3>
      <div class="space-y-2">
        <Skeleton animation="pulse" width="100%" height="1rem" />
        <Skeleton animation="pulse" width="80%" height="1rem" />
      </div>
    </div>
    <div>
      <h3 class="text-muted mb-2 text-sm font-medium">Wave</h3>
      <div class="space-y-2">
        <Skeleton animation="wave" width="100%" height="1rem" />
        <Skeleton animation="wave" width="80%" height="1rem" />
      </div>
    </div>
    <div>
      <h3 class="text-muted mb-2 text-sm font-medium">None</h3>
      <div class="space-y-2">
        <Skeleton animation="none" width="100%" height="1rem" />
        <Skeleton animation="none" width="80%" height="1rem" />
      </div>
    </div>
  </div>

  <!-- Card Example -->
  <div v-if="cardExample" :class="props.class">
    <div class="border-border bg-background max-w-md rounded border p-4">
      <div class="mb-4 flex items-center gap-4">
        <Skeleton variant="circular" width="3rem" height="3rem" />
        <div class="flex-1 space-y-2">
          <Skeleton width="60%" height="1rem" />
          <Skeleton width="40%" height="0.75rem" />
        </div>
      </div>
      <Skeleton class="mb-4" variant="rectangular" width="100%" height="150px" />
      <div class="space-y-2">
        <Skeleton width="100%" height="0.75rem" />
        <Skeleton width="90%" height="0.75rem" />
        <Skeleton width="80%" height="0.75rem" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from "veloce-vue/ui";

const props = defineProps({
  variants: { type: Boolean, default: false },
  animations: { type: Boolean, default: false },
  cardExample: { type: Boolean, default: false },
  class: { type: String, default: "" },
});
</script>

