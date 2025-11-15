<template>
  <div class="space-y-8 p-4">
    <!-- Variants -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Variants</h2>
      <div class="flex flex-wrap gap-3">
        <Button variant="solid" label="Solid" />
        <Button variant="soft" label="Soft" />
        <Button variant="outlined" label="Outlined" />
        <Button variant="ghost" label="Ghost" />
        <Button variant="link" label="Link" />
      </div>
    </section>

    <!-- Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Severities</h2>
      <div class="flex flex-wrap gap-3">
        <Button severity="primary" label="Primary" />
        <Button severity="secondary" label="Secondary" />
        <Button severity="success" label="Success" />
        <Button severity="info" label="Info" />
        <Button severity="warning" label="Warning" />
        <Button severity="error" label="Error" />
        <Button severity="neutral" label="Neutral" />
      </div>
    </section>

    <!-- Variants with Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Variants × Severities</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Solid</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="solid" severity="primary" label="Primary" />
            <Button variant="solid" severity="secondary" label="Secondary" />
            <Button variant="solid" severity="success" label="Success" />
            <Button variant="solid" severity="info" label="Info" />
            <Button variant="solid" severity="warning" label="Warning" />
            <Button variant="solid" severity="error" label="Error" />
            <Button variant="solid" severity="neutral" label="Neutral" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Soft</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="soft" severity="primary" label="Primary" />
            <Button variant="soft" severity="secondary" label="Secondary" />
            <Button variant="soft" severity="success" label="Success" />
            <Button variant="soft" severity="info" label="Info" />
            <Button variant="soft" severity="warning" label="Warning" />
            <Button variant="soft" severity="error" label="Error" />
            <Button variant="soft" severity="neutral" label="Neutral" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Outlined</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="outlined" severity="primary" label="Primary" />
            <Button variant="outlined" severity="secondary" label="Secondary" />
            <Button variant="outlined" severity="success" label="Success" />
            <Button variant="outlined" severity="info" label="Info" />
            <Button variant="outlined" severity="warning" label="Warning" />
            <Button variant="outlined" severity="error" label="Error" />
            <Button variant="outlined" severity="neutral" label="Neutral" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Ghost</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="ghost" severity="primary" label="Primary" />
            <Button variant="ghost" severity="secondary" label="Secondary" />
            <Button variant="ghost" severity="success" label="Success" />
            <Button variant="ghost" severity="info" label="Info" />
            <Button variant="ghost" severity="warning" label="Warning" />
            <Button variant="ghost" severity="error" label="Error" />
            <Button variant="ghost" severity="neutral" label="Neutral" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Link</h3>
          <div class="flex flex-wrap gap-3">
            <Button variant="link" severity="primary" label="Primary" />
            <Button variant="link" severity="secondary" label="Secondary" />
            <Button variant="link" severity="success" label="Success" />
            <Button variant="link" severity="info" label="Info" />
            <Button variant="link" severity="warning" label="Warning" />
            <Button variant="link" severity="error" label="Error" />
            <Button variant="link" severity="neutral" label="Neutral" />
          </div>
        </div>
      </div>
    </section>

    <!-- Neumorphic -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Neumorphic</h2>
      <div class="flex flex-wrap gap-3">
        <Button neumorphic label="Neumorphic" variant="soft" severity="neutral" />
        <Button neumorphic label="Neumorphic" variant="soft" severity="primary" />
        <Button neumorphic label="Neumorphic" variant="soft" severity="secondary" />
        <Button neumorphic label="Neumorphic" variant="soft" severity="success" />
        <Button neumorphic label="Neumorphic" variant="soft" severity="info" />
        <Button neumorphic label="Neumorphic" variant="soft" severity="warning" />
        <Button neumorphic label="Neumorphic" variant="soft" severity="error" />
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="flex flex-wrap items-center gap-3">
        <Button size="sm" label="Small" />
        <Button size="md" label="Medium" />
        <Button size="lg" label="Large" />
        <Button size="xl" label="Extra Large" />
      </div>
    </section>

    <!-- With Icons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Icons</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon Right (Default)</h3>
          <div class="flex flex-wrap gap-3">
            <Button :icon="Check" label="Success" severity="success" />
            <Button :icon="Close" label="Cancel" severity="error" />
            <Button :icon="Info" label="Info" severity="info" />
            <Button :icon="Alert" label="Warning" severity="warning" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon Left</h3>
          <div class="flex flex-wrap gap-3">
            <Button :icon="Check" icon-position="left" label="Success" severity="success" />
            <Button :icon="Close" icon-position="left" label="Cancel" severity="error" />
            <Button :icon="Alert" icon-position="left" label="Info" severity="info" />
            <Button :icon="Alert" icon-position="left" label="Warning" severity="warning" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Icon Only</h3>
          <div class="flex flex-wrap gap-3">
            <Button :icon="Check" severity="success" />
            <Button :icon="Close" severity="error" />
            <Button :icon="Alert" severity="info" />
            <Button :icon="Alert" severity="warning" />
            <Button :icon="Sun" severity="primary" />
            <Button :icon="Moon" severity="secondary" />
            <Button :icon="Sun" severity="neutral" />
            <Button :icon="Moon" severity="neutral" />
          </div>
        </div>
      </div>
    </section>

    <!-- States -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">States</h2>
      <div class="flex flex-wrap gap-3">
        <Button label="Normal" />
        <Button disabled label="Disabled" />
        <Button label="Loading" loading />
        <Button disabled label="Disabled Loading" loading />
        <Button severity="neutral" label="Neutral" />
        <Button disabled severity="neutral" label="Disabled Neutral" />
      </div>
    </section>

    <!-- Rounded -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Rounded</h2>
      <div class="flex flex-wrap gap-3">
        <Button label="Default" />
        <Button rounded label="Rounded Full" />
        <Button :icon="Check" rounded severity="success" />
        <Button :icon="Sun" rounded severity="neutral" />
        <Button :icon="Moon" rounded severity="neutral" />
      </div>
    </section>

    <!-- Font Weights -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Font Weights</h2>
      <div class="flex flex-wrap gap-3">
        <Button font-weight="normal" label="Normal" />
        <Button font-weight="medium" label="Medium" />
        <Button font-weight="semibold" label="Semibold" />
        <Button font-weight="bold" label="Bold" />
      </div>
    </section>

    <!-- Custom Slots -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Custom Content (Slots)</h2>
      <div class="flex flex-wrap gap-3">
        <Button>
          <span class="font-bold">Custom</span>
          <span class="text-xs opacity-75">Content</span>
        </Button>
        <Button variant="outlined">
          <span>Custom</span>
          <span class="text-xs">Slot</span>
        </Button>
        <Button severity="neutral">
          <span class="font-bold">Custom</span>
          <span class="text-xs opacity-75">Content</span>
        </Button>
        <Button variant="outlined" severity="neutral">
          <span>Custom</span>
          <span class="text-xs">Slot</span>
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@veloce-vue/ui";
import { Check, Close, Info, Alert, Sun, Moon } from "@veloce-vue/icons";
</script>
