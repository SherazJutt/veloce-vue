<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "@veloce/ui";
import { Check, Copy } from "@veloce/icons";
import type { TextColor, FontWeight, Margin, Padding, FontSize, LineHeight, LetterSpacing } from "@veloce/types";
import { getTypography, getMargin, getPadding } from "@veloce/utils";

const { fontSizes, fontWeights, textColors, letterSpacings, lineHeights } = getTypography();
const { margin, marginLeft, marginRight, marginTop, marginBottom } = getMargin();
const { padding, paddingLeft, paddingRight, paddingTop, paddingBottom } = getPadding();

const props = defineProps({
  text: { type: String, default: "" },
  fontSize: { type: String as () => FontSize, default: "" as FontSize },
  color: { type: String as () => TextColor, default: "" as TextColor },
  fontWeight: { type: String as () => FontWeight, default: "" as FontWeight },
  lineHeight: { type: String as () => LineHeight, default: "" as LineHeight },
  letterSpacing: { type: String as () => LetterSpacing, default: "" as LetterSpacing },
  block: { type: Boolean, default: true },
  // margin
  margin: { type: String as () => Margin, default: "" },
  marginLeft: { type: String as () => Margin, default: "" },
  marginRight: { type: String as () => Margin, default: "" },
  marginTop: { type: String as () => Margin, default: "" },
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

const isCopied = ref(false);

const copyToClipboard = async () => {
  navigator.clipboard.writeText(props.text);
  isCopied.value = true;

  await new Promise((resolve) => setTimeout(resolve, 3000));
  isCopied.value = false;
};
</script>

<template>
  <code :class="[classes, block ? 'block p-2.5' : 'px-1.5 py-0.5']" class="relative rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
    <span>{{ props.text }}</span>
    <Button :disabled="isCopied" :icon="isCopied ? Check : Copy" class="dark:hover:bg-neutral-700! p-1! absolute right-2 top-1/2 -translate-y-1/2" size="sm" variant="ghost" @click="copyToClipboard" />
  </code>
</template>
