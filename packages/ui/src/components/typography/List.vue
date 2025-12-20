<script setup lang="ts">
import { computed } from 'vue';
import type { Margin, Padding, Size } from '../../exports/types';
import { getMargin, getPadding } from '../../exports/utils';

const { margin, marginLeft, marginRight, marginTop, marginBottom } = getMargin();
const { padding, paddingLeft, paddingRight, paddingTop, paddingBottom } = getPadding();

const props = defineProps({
  type: { type: String as () => 'ul' | 'ol', default: 'ul' },
  spacing: { type: String as () => Size, default: 'sm' as Size },
  items: { type: Array as () => string[] | undefined, required: true },
  // margin
  margin: { type: String as () => Margin, default: '' },
  marginLeft: { type: String as () => Margin, default: 'xl' },
  marginRight: { type: String as () => Margin, default: '' },
  marginTop: { type: String as () => Margin, default: '' },
  marginBottom: { type: String as () => Margin, default: '' },
  // padding
  padding: { type: String as () => Padding, default: '' },
  paddingLeft: { type: String as () => Padding, default: '' },
  paddingRight: { type: String as () => Padding, default: '' },
  paddingTop: { type: String as () => Padding, default: '' },
  paddingBottom: { type: String as () => Padding, default: '' },
});

const spacingClasses: Record<Size, string> = {
  sm: 'space-y-1',
  md: 'space-y-2',
  lg: 'space-y-3',
  xl: 'space-y-4',
};

const listStyleClasses: Record<string, string> = {
  ul: 'list-disc',
  ol: 'list-decimal',
};

const classes = computed(() => {
  return [
    listStyleClasses[props.type],
    spacingClasses[props.spacing],
    // margin
    margin[props.margin],
    marginLeft[props.marginLeft],
    marginRight[props.marginRight],
    marginTop[props.marginTop],
    marginBottom[props.marginBottom],
    // padding
    padding[props.padding],
    paddingLeft[props.paddingLeft],
    paddingRight[props.paddingRight],
    paddingTop[props.paddingTop],
    paddingBottom[props.paddingBottom],
  ].filter(Boolean);
});
</script>

<template>
  <component :is="type" :class="classes">
    <li v-for="(item, i) in items || []" :key="i">{{ item }}</li>
  </component>
</template>
