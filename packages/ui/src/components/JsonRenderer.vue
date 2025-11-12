<template>
  <div class="*:first:mt-0 *:last:mb-0">
    <template v-for="item in json" :key="item.id">
      <component :is="componentMap[item.component]" v-bind="item.props" v-bind:items="item.component === 'list' ? item.items : undefined" v-html="item.slot" />
    </template>
  </div>
  <!-- <pre>{{ json }}</pre> -->
</template>

<script setup lang="ts">
import type { JsonRendererItem } from "@veloce/types";

import { H1, H2, H3, H4, H5, H6, P, Span, Blockquote, Code, Label, List } from "@veloce/typography";

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
  list: List,
};

const props = defineProps({
  json: { type: Array as () => JsonRendererItem[], required: true },
});
</script>
