<template>
  <MiniEditor v-model="content" />
  <pre>{{ content }}</pre>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MiniEditor } from "@veloce/ui";

const content = ref(`hello world from user`);
</script>
