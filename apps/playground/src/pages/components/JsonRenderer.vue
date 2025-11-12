<template>
  <div>
    <JsonRenderer :json="json" />
  </div>
</template>

<script setup lang="ts">
import { JsonRenderer } from "@veloce/ui";
import type { JsonRendererItem } from "@veloce/types";
import { useRandomId } from "@veloce/utils";

const json: JsonRendererItem[] = [
  {
    component: "code",
    id: useRandomId(),
    props: {
      fontSize: "md",
      color: "primary",
    },
    slot: ["hello world", { component: "h1", props: { fontSize: "md", color: "primary" }, slot: ["hello world 2"] }],
  },
];
</script>
