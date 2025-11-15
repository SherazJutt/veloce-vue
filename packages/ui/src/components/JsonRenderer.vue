<template>
  <div class="*:first:mt-0 *:last:mb-0">
    <template v-for="item in json" :key="item.id">
      <!-- show message component -->
      <component :is="componentMap[item.component]" v-if="item.component === 'message'" v-bind="item.props">
        {{ item.props?.text }}
      </component>
      <!-- show other components -->
      <component :is="componentMap[item.component]" v-else v-bind="item.props" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { JsonRendererItem } from "@veloce-vue/types";
import { H1, H2, H3, H4, H5, H6, P, Span, Blockquote, Code, Label, List } from "@veloce-vue/typography";
import { Message } from "@veloce-vue/ui";

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
  message: Message,
};

defineProps({
  json: { type: Array as () => JsonRendererItem[], required: true },
});
</script>
