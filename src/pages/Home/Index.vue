<template>
  <MarkdownBlock :content="content" />
</template>

<script setup lang="ts">
import MarkdownBlock from "../../components/markdown-block/Index.vue";
import content from "./intro.md?raw";
</script>
