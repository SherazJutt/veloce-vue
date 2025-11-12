<script setup lang="ts">
import { computed } from "vue";
import type { TextColor, FontWeight, Margin, Padding, FontSize, LineHeight, LetterSpacing } from "@veloce/types";
import { getTypography, getMargin, getPadding } from "@veloce/utils";

const { fontSizes, fontWeights, textColors, letterSpacings, lineHeights } = getTypography();
const { margin, marginLeft, marginRight, marginTop, marginBottom } = getMargin();
const { padding, paddingLeft, paddingRight, paddingTop, paddingBottom } = getPadding();

const props = defineProps({
  text: { type: String, default: "" },
  fontSize: { type: String as () => FontSize, default: "4xl" as FontSize },
  color: { type: String as () => TextColor, default: "default" as TextColor },
  fontWeight: { type: String as () => FontWeight, default: "medium" as FontWeight },
  lineHeight: { type: String as () => LineHeight, default: "xs" as LineHeight },
  letterSpacing: { type: String as () => LetterSpacing, default: "md" as LetterSpacing },
  // margin
  margin: { type: String as () => Margin, default: "" },
  marginLeft: { type: String as () => Margin, default: "" },
  marginRight: { type: String as () => Margin, default: "" },
  marginTop: { type: String as () => Margin, default: "lg" },
  marginBottom: { type: String as () => Margin, default: "md" },
  // padding
  padding: { type: String as () => Padding, default: "" },
  paddingLeft: { type: String as () => Padding, default: "" },
  paddingRight: { type: String as () => Padding, default: "" },
  paddingTop: { type: String as () => Padding, default: "" },
  paddingBottom: { type: String as () => Padding, default: "" },
});

const classes = computed(() => {
  return [
    fontSizes[props.fontSize],
    textColors[props.color],
    fontWeights[props.fontWeight],
    lineHeights[props.lineHeight],
    letterSpacings[props.letterSpacing],
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
  ];
});
</script>

<template>
  <h1 :class="classes" v-html="props.text" />
</template>
