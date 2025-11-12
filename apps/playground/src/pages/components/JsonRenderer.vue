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

    slot: `hello world <span class="text-highlight">from</span> user`,
  },
];
</script>
