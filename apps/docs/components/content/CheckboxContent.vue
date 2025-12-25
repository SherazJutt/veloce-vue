<template>
  <!-- Variants -->
  <div v-if="variants" :class="props.class" class="flex flex-col gap-3">
    <Checkbox v-model="model1" label="Primary" variant="primary" />
    <Checkbox v-model="model2" label="Secondary" variant="secondary" />
    <Checkbox v-model="model3" label="Success" variant="success" />
    <Checkbox v-model="model4" label="Info" variant="info" />
    <Checkbox v-model="model5" label="Warning" variant="warning" />
    <Checkbox v-model="model6" label="Error" variant="error" />
  </div>

  <!-- Sizes -->
  <div v-if="sizes" :class="props.class" class="flex flex-col gap-3">
    <Checkbox v-model="modelSize1" size="sm" label="Small" />
    <Checkbox v-model="modelSize2" size="md" label="Medium" />
    <Checkbox v-model="modelSize3" size="lg" label="Large" />
  </div>

  <!-- States -->
  <div v-if="states" :class="props.class" class="flex flex-col gap-3">
    <Checkbox v-model="modelState1" label="Normal" />
    <Checkbox disabled v-model="modelState2" label="Disabled" />
    <Checkbox disabled v-model="modelState3" label="Disabled Checked" />
  </div>

  <!-- Custom Icon -->
  <div v-if="customIcon" :class="props.class" class="flex flex-col gap-3">
    <Checkbox v-model="modelIcon1" :icon="Check" label="Check Icon" variant="success" />
    <Checkbox v-model="modelIcon2" :icon="Close" label="Close Icon" variant="error" />
    <Checkbox v-model="modelIcon3" :icon="Info" label="Info Icon" variant="info" />
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from "veloce-vue/ui";
import { Check, Close, Info } from "veloce-vue/icons";
import { ref } from "vue";

const props = defineProps({
  variants: { type: Boolean, default: false },
  sizes: { type: Boolean, default: false },
  states: { type: Boolean, default: false },
  customIcon: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const model1 = ref(false);
const model2 = ref(false);
const model3 = ref(false);
const model4 = ref(false);
const model5 = ref(false);
const model6 = ref(false);

const modelSize1 = ref(false);
const modelSize2 = ref(false);
const modelSize3 = ref(false);

const modelState1 = ref(false);
const modelState2 = ref(false);
const modelState3 = ref(true);

const modelIcon1 = ref(false);
const modelIcon2 = ref(false);
const modelIcon3 = ref(false);
</script>
