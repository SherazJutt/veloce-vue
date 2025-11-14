<template>
  <div class="space-y-8 p-4">
    <!-- Directions -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Directions</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Horizontal</h3>
          <Separator direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Vertical</h3>
          <div class="flex h-32 items-center justify-center">
            <Separator direction="vertical" />
          </div>
        </div>
      </div>
    </section>

    <!-- Types -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Types</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Solid</h3>
          <Separator type="solid" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Dashed</h3>
          <Separator type="dashed" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Dotted</h3>
          <Separator type="dotted" direction="horizontal" />
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Small</h3>
          <Separator size="sm" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Medium</h3>
          <Separator size="md" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Large</h3>
          <Separator size="lg" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">X-Large</h3>
          <Separator size="xl" direction="horizontal" />
        </div>
      </div>
    </section>

    <!-- Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Severities</h2>
      <div class="space-y-3">
        <Separator severity="primary" direction="horizontal" />
        <Separator severity="secondary" direction="horizontal" />
        <Separator severity="success" direction="horizontal" />
        <Separator severity="info" direction="horizontal" />
        <Separator severity="warning" direction="horizontal" />
        <Separator severity="error" direction="horizontal" />
        <Separator severity="neutral" direction="horizontal" />
      </div>
    </section>

    <!-- With Label -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Label</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Label Only</h3>
          <Separator label="Section Title" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Label with Different Severities</h3>
          <div class="space-y-3">
            <Separator label="Primary" severity="primary" direction="horizontal" />
            <Separator label="Secondary" severity="secondary" direction="horizontal" />
            <Separator label="Success" severity="success" direction="horizontal" />
            <Separator label="Info" severity="info" direction="horizontal" />
            <Separator label="Warning" severity="warning" direction="horizontal" />
            <Separator label="Error" severity="error" direction="horizontal" />
            <Separator label="Neutral" severity="neutral" direction="horizontal" />
          </div>
        </div>
      </div>
    </section>

    <!-- With Icon -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Icon</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon Only</h3>
          <Separator :icon="Alert" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon with Different Severities</h3>
          <div class="space-y-3">
            <Separator :icon="Check" severity="primary" direction="horizontal" />
            <Separator :icon="Check" severity="success" direction="horizontal" />
            <Separator :icon="Alert" severity="warning" direction="horizontal" />
            <Separator :icon="Close" severity="error" direction="horizontal" />
            <Separator :icon="Sun" severity="info" direction="horizontal" />
          </div>
        </div>
      </div>
    </section>

    <!-- With Icon and Label -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Icon and Label</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon + Label</h3>
          <Separator :icon="Alert" label="Section Title" direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon + Label with Different Severities</h3>
          <div class="space-y-3">
            <Separator :icon="Check" label="Success" severity="success" direction="horizontal" />
            <Separator :icon="Alert" label="Warning" severity="warning" direction="horizontal" />
            <Separator :icon="Close" label="Error" severity="error" direction="horizontal" />
            <Separator :icon="Sun" label="Info" severity="info" direction="horizontal" />
            <Separator :icon="Moon" label="Neutral" severity="neutral" direction="horizontal" />
          </div>
        </div>
      </div>
    </section>

    <!-- Bordered -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Bordered</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Label with Border</h3>
          <Separator label="Bordered Label" bordered direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon with Border</h3>
          <Separator :icon="Alert" bordered direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon + Label with Border</h3>
          <Separator :icon="Check" label="Bordered" bordered direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Bordered with Different Severities</h3>
          <div class="space-y-3">
            <Separator :icon="Check" label="Success" severity="success" bordered direction="horizontal" />
            <Separator :icon="Alert" label="Warning" severity="warning" bordered direction="horizontal" />
            <Separator :icon="Close" label="Error" severity="error" bordered direction="horizontal" />
          </div>
        </div>
      </div>
    </section>

    <!-- Rounded -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Rounded</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Label Only</h3>
          <Separator bordered label="Rounded Label" rounded direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon Only</h3>
          <Separator :icon="Alert" bordered rounded direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon + Label Only</h3>
          <Separator :icon="Check" label="Rounded" bordered rounded direction="horizontal" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon + Label with Different Severities</h3>
          <div class="space-y-3">
            <Separator :icon="Check" label="Success" severity="success" bordered rounded direction="horizontal" />
            <Separator :icon="Alert" label="Warning" severity="warning" bordered rounded direction="horizontal" />
            <Separator :icon="Close" label="Error" severity="error" bordered rounded direction="horizontal" />
            <Separator :icon="Sun" label="Info" severity="info" bordered rounded direction="horizontal" />
            <Separator :icon="Moon" label="Neutral" severity="neutral" bordered rounded direction="horizontal" />
          </div>
        </div>
      </div>
    </section>

    <!-- Vertical Separators -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Vertical Separators</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Basic Vertical</h3>
          <div class="flex h-32 items-center justify-center gap-4">
            <Separator direction="vertical" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Vertical with Different Severities</h3>
          <div class="flex h-32 items-center justify-center gap-4">
            <Separator severity="primary" direction="vertical" />
            <Separator severity="secondary" direction="vertical" />
            <Separator severity="success" direction="vertical" />
            <Separator severity="info" direction="vertical" />
            <Separator severity="warning" direction="vertical" />
            <Separator severity="error" direction="vertical" />
            <Separator severity="neutral" direction="vertical" />
          </div>
        </div>
      </div>
    </section>

    <!-- Height Options -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Height Options</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Auto Height (Vertical)</h3>
          <div class="flex h-40 items-center justify-center gap-4">
            <Separator height="auto" direction="vertical" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Custom Height (Vertical)</h3>
          <div class="flex items-center justify-center gap-4">
            <Separator height="64px" direction="vertical" />
            <Separator height="96px" direction="vertical" />
            <Separator height="128px" direction="vertical" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Auto Height with Severities</h3>
          <div class="flex h-32 items-center justify-center gap-4">
            <Separator height="auto" severity="primary" direction="vertical" />
            <Separator height="auto" severity="success" direction="vertical" />
            <Separator height="auto" severity="error" direction="vertical" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Separator } from "@veloce/ui";
import { Alert, Check, Close, Sun, Moon } from "@veloce/icons";
</script>
