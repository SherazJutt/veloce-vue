<template>
  <!-- Severities -->
  <div v-if="severities" :class="props.class" class="space-y-3">
    <Message severity="success">Success message content</Message>
    <Message severity="info">Info message content</Message>
    <Message severity="warning">Warning message content</Message>
    <Message severity="error">Error message content</Message>
    <Message severity="primary">Primary message content</Message>
    <Message severity="secondary">Secondary message content</Message>
    <Message severity="neutral">Neutral message content</Message>
  </div>

  <!-- Variants -->
  <div v-if="variants" :class="props.class" class="space-y-3">
    <Message severity="success" variant="outlined">Success message</Message>
    <Message severity="info" variant="outlined">Info message</Message>
    <Message severity="warning" variant="outlined">Warning message</Message>
    <Message severity="error" variant="outlined">Error message</Message>
  </div>

  <!-- With Custom Icons -->
  <div v-if="withIcons" :class="props.class" class="space-y-3">
    <Message :icon="Send" severity="info">Info Message</Message>
    <Message severity="success">
      <template #icon>
        <div class="bg-success/20 flex size-8 items-center justify-center rounded-full">
          <span class="text-success text-xs font-bold">?</span>
        </div>
      </template>
      <span class="ml-2">How may I help you?</span>
    </Message>
  </div>

  <!-- Closable -->
  <div v-if="closable" :class="props.class" class="space-y-3">
    <Message v-if="showMessage1" severity="info" closable @close="showMessage1 = false"> This message can be closed </Message>
    <Message v-if="showMessage2" severity="success" closable @close="showMessage2 = false"> Another closable message </Message>
    <Message v-if="showMessage3" severity="warning" variant="outlined" closable @close="showMessage3 = false"> Outlined closable message </Message>
  </div>
</template>

<script setup lang="ts">
import { Message } from "veloce-vue/ui";
import { Send } from "veloce-vue/icons";
import { ref } from "vue";

const props = defineProps({
  severities: { type: Boolean, default: false },
  variants: { type: Boolean, default: false },
  withIcons: { type: Boolean, default: false },
  closable: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const showMessage1 = ref(true);
const showMessage2 = ref(true);
const showMessage3 = ref(true);
</script>

