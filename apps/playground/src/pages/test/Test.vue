<template>
  <div>
    <pre>{{ toastStore }}</pre>
  </div>
</template>
<script setup lang="ts">
import { useToastStore } from "@veloce-vue/toast";
const toastStore = useToastStore();
</script>
