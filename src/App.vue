<script setup lang="ts">
import { RouterView } from "vue-router";
import Button from "./components/button/Index.vue";
</script>
<template>
  <RouterView />
  <Button label="Hello" variant="outlined" />
</template>
