<template>
  <div class="flex flex-col gap-2">
    <Checkbox v-model="model" label="Primary" variant="primary" />
    <Checkbox v-model="model" label="Secondary" variant="secondary" />
    <Checkbox v-model="model" label="Success" variant="success" />
    <Checkbox v-model="model" label="Info" variant="info" />
    <Checkbox v-model="model" label="Error" variant="error" />
    <Checkbox v-model="model" label="Warning" variant="warning" />

    <Checkbox v-model="model" size="sm" label="Warning" variant="warning" />

    <Checkbox disabled v-model="model" label="Disabled" variant="warning" />
  </div>
</template>
<script setup lang="ts">
import { Checkbox } from "@veloce/ui";
import { ref } from "vue";

const model = ref(false);
</script>
