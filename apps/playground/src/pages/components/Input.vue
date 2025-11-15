<template>
  <div class="space-y-8 p-4">
    <!-- Label Styles -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Label Styles</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Floating Label</h3>
          <Input v-model="value1" label-style="float" placeholder="Floating Label" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Static Label</h3>
          <Input v-model="value2" label-style="static" label="Static Label" placeholder="Enter text here" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">No Label</h3>
          <Input v-model="value3" placeholder="Placeholder only" />
        </div>
      </div>
    </section>

    <!-- Types -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Input Types</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Text Input</h3>
          <Input v-model="value4" label="Text Input" placeholder="Enter text" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Password Input</h3>
          <Input type="password" v-model="value5" label="Password" placeholder="Enter password" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Password with Floating Label</h3>
          <Input type="password" v-model="value6" label-style="float" placeholder="Password" />
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Sizes</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Small</h3>
          <Input v-model="value7" size="sm" label="Small Input" placeholder="Small size" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Medium (Default)</h3>
          <Input v-model="value8" size="md" label="Medium Input" placeholder="Medium size" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Large</h3>
          <Input v-model="value9" size="lg" label="Large Input" placeholder="Large size" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Extra Large</h3>
          <Input v-model="value10" size="xl" label="Extra Large Input" placeholder="Extra large size" />
        </div>
      </div>
    </section>

    <!-- With Icons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Icons</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Leading Icon</h3>
          <Input v-model="value11" :leading-icon="Sun" label="Leading Icon" placeholder="With leading icon" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Trailing Icon</h3>
          <Input v-model="value12" :trailing-icon="Moon" label="Trailing Icon" placeholder="With trailing icon" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Both Icons</h3>
          <Input v-model="value13" :leading-icon="Sun" :trailing-icon="Moon" label="Both Icons" placeholder="With both icons" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Leading Icon with Floating Label</h3>
          <Input v-model="value14" :leading-icon="Alert" label-style="float" placeholder="Floating with icon" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Password with Icons</h3>
          <Input type="password" v-model="value15" :leading-icon="Alert" label="Password with Icon" placeholder="Secure password" />
        </div>
      </div>
    </section>

    <!-- Help Text -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Help Text</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">With Help Text</h3>
          <Input v-model="value16" label="Username" placeholder="Enter username" help-text="Username must be at least 3 characters" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Help Text with Icon</h3>
          <Input v-model="value17" :leading-icon="Alert" label="Email" placeholder="Enter email" help-text="We'll never share your email" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Help Text with Floating Label</h3>
          <Input v-model="value18" label-style="float" placeholder="Email address" help-text="Enter a valid email address" />
        </div>
      </div>
    </section>

    <!-- Size Variations with Icons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Size Variations with Icons</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Small with Icon</h3>
          <Input v-model="value19" :leading-icon="Sun" size="sm" label="Small" placeholder="Small input" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Large with Icon</h3>
          <Input v-model="value20" :leading-icon="Moon" size="lg" label="Large" placeholder="Large input" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Extra Large with Icon</h3>
          <Input v-model="value21" :leading-icon="Alert" size="xl" label="Extra Large" placeholder="Extra large input" />
        </div>
      </div>
    </section>

    <!-- Floating Label Variations -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Floating Label Variations</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Floating Label - Empty</h3>
          <Input v-model="value22" label-style="float" placeholder="First Name" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Floating Label - With Value</h3>
          <Input v-model="value23" label-style="float" placeholder="Last Name" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Floating Label with Icon</h3>
          <Input v-model="value24" :leading-icon="Sun" label-style="float" placeholder="Email" />
        </div>
        <div>
          <h3 class="text-muted mb-2 text-sm font-medium">Floating Label - All Sizes</h3>
          <div class="space-y-3">
            <Input v-model="value25" label-style="float" size="sm" placeholder="Small" />
            <Input v-model="value26" label-style="float" size="md" placeholder="Medium" />
            <Input v-model="value27" label-style="float" size="lg" placeholder="Large" />
            <Input v-model="value28" label-style="float" size="xl" placeholder="Extra Large" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Input } from "@veloce-vue/ui";
import { ref } from "vue";
import { Sun, Moon, Alert } from "@veloce-vue/icons";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
const value7 = ref("");
const value8 = ref("");
const value9 = ref("");
const value10 = ref("");
const value11 = ref("");
const value12 = ref("");
const value13 = ref("");
const value14 = ref("");
const value15 = ref("");
const value16 = ref("");
const value17 = ref("");
const value18 = ref("");
const value19 = ref("");
const value20 = ref("");
const value21 = ref("");
const value22 = ref("");
const value23 = ref("John");
const value24 = ref("");
const value25 = ref("");
const value26 = ref("");
const value27 = ref("");
const value28 = ref("");
</script>
