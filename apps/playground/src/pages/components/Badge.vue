<template>
  <div class="space-y-8 p-4">
    <!-- Basic Badges -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Badges</h2>
      <div class="flex flex-wrap items-center gap-4">
        <Badge value="2" />
        <Badge value="6" severity="secondary" />
        <Badge value="8" severity="success" />
        <Badge value="4" severity="info" />
        <Badge value="9" severity="warning" />
        <Badge value="3" severity="error" />
        <Badge value="5" severity="neutral" />
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="flex flex-wrap items-center gap-4">
        <Badge value="2" size="sm" />
        <Badge value="6" size="md" />
        <Badge value="8" size="lg" />
        <Badge value="99" size="xl" />
      </div>
    </section>

    <!-- Dot Badges -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Dot Badges</h2>
      <div class="flex flex-wrap items-center gap-4">
        <Badge dot severity="primary" />
        <Badge dot severity="secondary" />
        <Badge dot severity="success" />
        <Badge dot severity="info" />
        <Badge dot severity="warning" />
        <Badge dot severity="error" />
        <Badge dot severity="neutral" />
      </div>
    </section>

    <!-- Dot Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Dot Sizes</h2>
      <div class="flex flex-wrap items-center gap-4">
        <Badge dot size="sm" severity="primary" />
        <Badge dot size="md" severity="success" />
        <Badge dot size="lg" severity="info" />
        <Badge dot size="xl" severity="warning" />
      </div>
    </section>

    <!-- With Text -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Text</h2>
      <div class="flex flex-wrap items-center gap-4">
        <span class="text-muted">Notifications</span>
        <Badge value="5" severity="error" />
        <span class="text-muted">Messages</span>
        <Badge value="12" severity="info" />
        <span class="text-muted">Updates</span>
        <Badge value="3" severity="success" />
      </div>
    </section>

    <!-- Custom Content -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Custom Content</h2>
      <div class="flex flex-wrap items-center gap-4">
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@veloce-vue/ui";
</script>
