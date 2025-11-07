<template>
  <div class="space-y-8 p-4">
    <!-- Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Unchecked</h2>
      <Switch v-model="value0" />

      <h2 class="mb-4 text-xl font-semibold">Severities</h2>
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Primary</span>
          <Switch v-model="value1" severity="primary" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Secondary</span>
          <Switch v-model="value2" severity="secondary" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Success</span>
          <Switch v-model="value3" severity="success" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Info</span>
          <Switch v-model="value4" severity="info" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Warning</span>
          <Switch v-model="value5" severity="warning" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Error</span>
          <Switch v-model="value6" severity="error" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Neutral</span>
          <Switch v-model="value7" severity="neutral" />
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="flex flex-wrap items-center gap-6">
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Small</span>
          <Switch v-model="value8" size="sm" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Medium</span>
          <Switch v-model="value9" size="md" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Large</span>
          <Switch v-model="value10" size="lg" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Extra Large</span>
          <Switch v-model="value11" size="xl" />
        </div>
      </div>
    </section>

    <!-- Sizes with Severities -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes × Severities</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Small</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Switch v-model="value12" size="sm" severity="primary" />
            <Switch v-model="value13" size="sm" severity="success" />
            <Switch v-model="value14" size="sm" severity="warning" />
            <Switch v-model="value15" size="sm" severity="error" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Medium</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Switch v-model="value16" size="md" severity="primary" />
            <Switch v-model="value17" size="md" severity="success" />
            <Switch v-model="value18" size="md" severity="warning" />
            <Switch v-model="value19" size="md" severity="error" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Large</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Switch v-model="value20" size="lg" severity="primary" />
            <Switch v-model="value21" size="lg" severity="success" />
            <Switch v-model="value22" size="lg" severity="warning" />
            <Switch v-model="value23" size="lg" severity="error" />
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Extra Large</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Switch v-model="value24" size="xl" severity="primary" />
            <Switch v-model="value25" size="xl" severity="success" />
            <Switch v-model="value26" size="xl" severity="warning" />
            <Switch v-model="value27" size="xl" severity="error" />
          </div>
        </div>
      </div>
    </section>

    <!-- States -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">States</h2>
      <div class="flex flex-wrap items-center gap-6">
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Unchecked</span>
          <Switch v-model="value28" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Checked</span>
          <Switch v-model="value29" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Disabled (Unchecked)</span>
          <Switch disabled v-model="value30" />
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-muted text-sm">Disabled (Checked)</span>
          <Switch disabled v-model="value31" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Switch } from "@veloce/ui";

const value0 = ref(false);
const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(true);
const value7 = ref(true);
const value8 = ref(true);
const value9 = ref(true);
const value10 = ref(true);
const value11 = ref(true);
const value12 = ref(true);
const value13 = ref(true);
const value14 = ref(true);
const value15 = ref(true);
const value16 = ref(true);
const value17 = ref(true);
const value18 = ref(true);
const value19 = ref(true);
const value20 = ref(true);
const value21 = ref(true);
const value22 = ref(true);
const value23 = ref(true);
const value24 = ref(true);
const value25 = ref(true);
const value26 = ref(false);
const value27 = ref(false);
const value28 = ref(false);
const value29 = ref(true);
const value30 = ref(false);
const value31 = ref(true);
</script>
