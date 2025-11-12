<template>
  <div>
    <template v-for="item in json" :key="item.id">
      <component :is="componentMap[item.component]" v-bind="item.props" v-html="item.slot"></component>
    </template>
  </div>
  <pre>{{ json }}</pre>
</template>

<script setup lang="ts">
import type { JsonRendererItem } from "@veloce/types";

import { H1, H2, H3, H4, H5, H6, P, Span, Blockquote, Code, Label } from "@veloce/typography";

const componentMap = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  span: Span,
  blockquote: Blockquote,
  code: Code,
  label: Label,
};

const props = defineProps({
  json: { type: Array as () => JsonRendererItem[], required: true },
});
</script>
