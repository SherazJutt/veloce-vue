<template>
  <div class="*:first:mt-0 *:last:mb-0">
    <template v-for="item in json" :key="item.id">
      <component :is="componentMap[item.component]" v-if="item.component === 'list'" v-bind="item.props" :items="item.items" />
      <component :is="componentMap[item.component]" v-else-if="item.component === 'label'" v-bind="item.props" />
      <component :is="componentMap[item.component]" v-else v-bind="item.props" v-html="item.slot" />
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
