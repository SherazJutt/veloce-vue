<template>
  <div class="space-y-8 p-4">
    <!-- Basic Skeletons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Skeletons</h2>
      <div class="space-y-3">
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="80%" height="1rem" />
        <Skeleton width="60%" height="1rem" />
      </div>
    </section>

    <!-- Text Variant -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Text Variant</h2>
      <div class="space-y-3">
        <Skeleton variant="text" width="100%" height="1rem" />
        <Skeleton variant="text" width="90%" height="1rem" />
        <Skeleton variant="text" width="75%" height="1rem" />
      </div>
    </section>

    <!-- Circular Variant -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Circular Variant</h2>
      <div class="flex items-center gap-4">
        <Skeleton variant="circular" width="3rem" height="3rem" />
        <div class="flex-1 space-y-2">
          <Skeleton width="60%" height="1rem" />
          <Skeleton width="40%" height="0.75rem" />
        </div>
      </div>
    </section>

    <!-- Rectangular Variant -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Rectangular Variant</h2>
      <div class="space-y-3">
        <Skeleton variant="rectangular" width="100%" height="200px" />
        <Skeleton variant="rectangular" width="100%" height="100px" />
      </div>
    </section>

    <!-- Animations -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Animations</h2>
      <div class="space-y-4">
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
    </section>

    <!-- Card Example -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Card Example</h2>
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
    </section>

    <!-- Rounded -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Rounded</h2>
      <div class="space-y-3">
        <Skeleton width="100%" height="1rem" />
        <Skeleton width="100%" height="1rem" rounded />
        <Skeleton width="100%" height="1rem" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from "@veloce/ui";
</script>
