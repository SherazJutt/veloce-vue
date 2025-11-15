<template>
  <div class="space-y-8 p-4">
    <!-- Basic Messages -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Messages</h2>
      <div class="space-y-3">
        <Message severity="success">Success message content</Message>
        <Message severity="info">Info message content</Message>
        <Message severity="warning">Warning message content</Message>
        <Message severity="error">Error message content</Message>
        <Message severity="primary">Primary message content</Message>
        <Message severity="secondary">Secondary message content</Message>
        <Message severity="neutral">Neutral message content</Message>
      </div>
    </section>

    <!-- Outlined Variant -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Outlined Variant</h2>
      <div class="space-y-3">
        <Message severity="success" variant="outlined">Success message</Message>
        <Message severity="info" variant="outlined">Info message</Message>
        <Message severity="warning" variant="outlined">Warning message</Message>
        <Message severity="error" variant="outlined">Error message</Message>
        <Message severity="primary" variant="outlined">Primary message</Message>
        <Message severity="secondary" variant="outlined">Secondary message</Message>
        <Message severity="neutral" variant="outlined">Neutral message</Message>
      </div>
    </section>

    <!-- With Custom Icons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Custom Icons</h2>
      <div class="space-y-3">
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
    </section>

    <!-- Closable Messages -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Closable Messages</h2>
      <div class="space-y-3">
        <Message v-if="showMessage1" severity="info" closable @close="showMessage1 = false"> This message can be closed </Message>
        <Message v-if="showMessage2" severity="success" closable @close="showMessage2 = false"> Another closable message </Message>
        <Message v-if="showMessage3" severity="warning" variant="outlined" closable @close="showMessage3 = false"> Outlined closable message </Message>
      </div>
      <div class="mt-4 flex gap-2">
        <Button label="Reset Messages" @click="resetMessages" />
      </div>
    </section>

    <!-- Long Content -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Long Content</h2>
      <Message severity="info"> This is a longer message that contains more content. It demonstrates how the message component handles multiple lines of text and maintains proper spacing and readability. </Message>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Message, Button } from "@veloce-vue/ui";
import { Send } from "@veloce-vue/icons";

const showMessage1 = ref(true);
const showMessage2 = ref(true);
const showMessage3 = ref(true);

const resetMessages = () => {
  showMessage1.value = true;
  showMessage2.value = true;
  showMessage3.value = true;
};
</script>
