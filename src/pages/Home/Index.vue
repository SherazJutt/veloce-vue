<template>
  <div>
    <h1 class="py-6 text-center text-3xl font-bold">Welcome</h1>

    <div class="mt-3">
      <MarkdownBlock :content="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownBlock from "../../components/markdown-block/Index.vue";
import content from "./intro.md?raw";
</script>
