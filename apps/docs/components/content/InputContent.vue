<template>
  <!-- Label Styles -->
  <div v-if="labelStyles" :class="props.class" class="space-y-4">
    <div>
      <Input v-model="value1" label-style="float" placeholder="Floating Label" />
    </div>
    <div>
      <Input v-model="value2" label-style="static" label="Static Label" placeholder="Enter text here" />
    </div>
    <div>
      <Input v-model="value3" placeholder="Placeholder only" />
    </div>
  </div>

  <!-- Types -->
  <div v-if="types" :class="props.class" class="space-y-4">
    <div>
      <Input v-model="value4" label="Text Input" placeholder="Enter text" />
    </div>
    <div>
      <Input type="password" v-model="value5" label="Password" placeholder="Enter password" />
    </div>
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="space-y-4">
    <Input v-model="value6" size="sm" label="Small" placeholder="Small input" />
    <Input v-model="value7" size="md" label="Medium" placeholder="Medium input" />
    <Input v-model="value8" size="lg" label="Large" placeholder="Large input" />
    <Input v-model="value9" size="xl" label="Extra Large" placeholder="Extra large input" />
  </div>

  <!-- With Icons -->
  <div v-if="withIcons" :class="props.class" class="space-y-4">
    <Input v-model="value10" :leading-icon="Search" label="Search" placeholder="Search..." />
    <Input v-model="value11" :trailing-icon="Check" label="With Trailing Icon" placeholder="Enter value" />
    <Input v-model="value12" :leading-icon="Search" :trailing-icon="Check" label="Both Icons" placeholder="Enter value" />
  </div>

  <!-- Help Text -->
  <div v-if="helpText" :class="props.class" class="space-y-4">
    <Input v-model="value13" label="Username" placeholder="Enter username" help-text="Username must be at least 3 characters" />
    <Input v-model="value14" :leading-icon="Alert" label="Email" placeholder="Enter email" help-text="We'll never share your email" />
  </div>
</template>

<script setup lang="ts">
import { Input } from "veloce-vue/ui";
import { Search, Check, Alert } from "veloce-vue/icons";
import { ref } from "vue";

const props = defineProps({
  labelStyles: { type: Boolean, default: false },
  types: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  withIcons: { type: Boolean, default: false },
  helpText: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

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
</script>
