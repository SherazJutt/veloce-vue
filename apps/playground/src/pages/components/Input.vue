<template>
  <div class="space-y-4 py-2">
    <Input v-model="value" label-style="float" placeholder="Floating Label" />

    <Input v-model="value" label-style="static" label="Static Label" placeholder="static label" />

    <Input type="password" v-model="value" label="Password" placeholder="Password" />

    <Input v-model="value" leadingIcon="moon" placeholder="Leading Icons" />
    <Input v-model="value" trailingIcon="moon" placeholder="Trailing Icons" />
    <Input v-model="value" leadingIcon="moon" trailingIcon="moon" placeholder="Leading and Trailing Icons" />
  </div>
</template>
<script setup lang="ts">
import { Input } from "@veloce/ui";
import { ref } from "vue";

const value = ref("");
</script>
