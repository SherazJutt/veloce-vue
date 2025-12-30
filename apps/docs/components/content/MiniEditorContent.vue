<template>
  <!-- Basic Usage -->
  <div v-if="basic" :class="props.class">
    <MiniEditor v-model="content1" />
  </div>

  <!-- With Initial Content -->
  <div v-if="initialContent" :class="props.class">
    <MiniEditor v-model="content2" />
  </div>

  <!-- Formatting Examples -->
  <div v-if="formatting" :class="props.class">
    <MiniEditor v-model="content3" />
    <p class="mt-4 text-sm text-neutral-600 dark:text-neutral-400">Try selecting text and using the toolbar buttons to format it.</p>
  </div>
</template>

<script setup lang="ts">
import { MiniEditor } from "veloce-vue/ui";
import { ref } from "vue";

const props = defineProps({
  basic: { type: Boolean, default: false },
  initialContent: { type: Boolean, default: false },
  formatting: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const content1 = ref("");
const content2 = ref("Hello <strong>world</strong> from <em>MiniEditor</em>!");
const content3 = ref("Select this text and format it using the toolbar buttons.");
</script>
