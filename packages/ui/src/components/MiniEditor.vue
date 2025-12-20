<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import Button from "./Button.vue";
import { Bold, Italic, Highlight } from "@veloce-vue/icons";

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const editor = ref<HTMLDivElement | null>(null);
const isBold = ref(false);
const isItalic = ref(false);
const isHighlighted = ref(false);

function format(command: string) {
  if (!editor.value) return;
  editor.value.focus();
  document.execCommand(command, false);
  emitContent();
  updateButtonStates();
}

function unwrapHighlightSpan(span: HTMLElement) {
  const parent = span.parentNode;
  if (parent) {
    // Move all children before the span
    while (span.firstChild) {
      parent.insertBefore(span.firstChild, span);
    }
    parent.removeChild(span);
    parent.normalize();
  }
}

function toggleHighlight() {
  if (!editor.value) return;
  editor.value.focus();

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  if (range.collapsed) return;

  // Find all highlight spans within the selection range
  const highlightSpans: HTMLElement[] = [];
  const container = range.commonAncestorContainer;

  // Use TreeWalker to find all highlight spans in the range
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const el = node as HTMLElement;
      if (el.tagName === "SPAN" && el.classList.contains("text-highlight")) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    },
  });

  let node;
  while ((node = walker.nextNode())) {
    const el = node as HTMLElement;
    if (!highlightSpans.includes(el)) {
      highlightSpans.push(el);
    }
  }

  // Also check parent chain for highlight spans
  let parentNode: Node | null = range.commonAncestorContainer;
  while (parentNode && parentNode !== editor.value) {
    if (parentNode.nodeType === Node.ELEMENT_NODE) {
      const el = parentNode as HTMLElement;
      if (el.tagName === "SPAN" && el.classList.contains("text-highlight")) {
        if (!highlightSpans.includes(el)) {
          highlightSpans.push(el);
        }
      }
    }
    parentNode = parentNode.parentNode;
  }

  if (highlightSpans.length > 0) {
    // Remove all highlight spans, starting from deepest (innermost) first
    // Sort so that if span A contains span B, we process B first
    const sortedSpans = [...highlightSpans].sort((a, b) => {
      if (a.contains(b)) {
        return 1;
      }
      if (b.contains(a)) {
        return -1;
      }
      return 0;
    });

    sortedSpans.forEach((span) => {
      // Check if span still exists (might have been removed as part of unwrapping parent)
      if (span.parentNode) {
        unwrapHighlightSpan(span);
      }
    });
  } else {
    // Wrap selection in span.text-highlight
    const span = document.createElement("span");
    span.className = "text-highlight";

    try {
      range.surroundContents(span);
    } catch (err) {
      // Fallback if selection spans multiple elements
      const contents = range.extractContents();
      span.appendChild(contents);
      range.insertNode(span);
    }
  }

  emitContent();
  updateButtonStates();
}

function updateButtonStates() {
  if (!editor.value) return;

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    isBold.value = false;
    isItalic.value = false;
    isHighlighted.value = false;
    return;
  }

  const container = selection.anchorNode?.parentElement;
  isBold.value = document.queryCommandState("bold");
  isItalic.value = document.queryCommandState("italic");
  isHighlighted.value = !!container?.classList?.contains("text-highlight");
}

function emitContent() {
  if (editor.value) emit("update:modelValue", editor.value.innerHTML);
}

onMounted(() => {
  if (editor.value) {
    editor.value.innerHTML = props.modelValue || "";
    updateButtonStates();
  }
});

watch(
  () => props.modelValue,
  (newVal) => {
    if (editor.value && editor.value.innerHTML !== newVal) {
      editor.value.innerHTML = newVal || "";
      updateButtonStates();
    }
  },
);
</script>

<template>
  <div class="overflow-hidden rounded border">
    <!-- Toolbar -->
    <div class="flex gap-2 border-b bg-neutral-50 p-2 dark:bg-neutral-800/25">
      <Button :icon="Bold" :highlighted="isBold" :variant="isBold ? 'solid' : 'ghost'" severity="neutral" size="sm" @click="format('bold')" />
      <Button :icon="Italic" icon-class="size-4" :highlighted="isItalic" :variant="isItalic ? 'solid' : 'ghost'" severity="neutral" size="sm" @click="format('italic')" />
      <Button :icon="Highlight" icon-class="size-4" :highlighted="isHighlighted" :variant="isHighlighted ? 'solid' : 'ghost'" severity="neutral" size="sm" title="Highlight" @click="toggleHighlight" />
    </div>

    <!-- Editor -->
    <div @keyup="updateButtonStates" class="min-h-[150px] p-3 outline-none focus-visible:ring-0" ref="editor" contenteditable="true" @input="emitContent" @mouseup="updateButtonStates" @focus="updateButtonStates"></div>
  </div>
</template>
