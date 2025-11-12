<template>
  <div class="overflow-hidden rounded border">
    <!-- Toolbar -->
    <div class="flex gap-2 border-b bg-neutral-50 p-2 dark:bg-neutral-800/25">
      <Button icon="bold" :highlighted="isBold" :variant="isBold ? 'solid' : 'ghost'" severity="neutral" size="sm" @click="format('bold')" />
      <Button icon="italic" icon-class="size-4" :highlighted="isItalic" :variant="isItalic ? 'solid' : 'ghost'" severity="neutral" size="sm" @click="format('italic')" />
      <Button icon="highlight" icon-class="size-4" :highlighted="isHighlighted" :variant="isHighlighted ? 'solid' : 'ghost'" severity="neutral" size="sm" title="Highlight" @click="toggleHighlight" />
    </div>

    <!-- Editor -->
    <div @keyup="updateButtonStates" class="min-h-[150px] p-3 outline-none focus-visible:ring-0" ref="editor" contenteditable="true" @input="emitContent" @mouseup="updateButtonStates" @focus="updateButtonStates"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps, defineEmits } from "vue";
import Button from "./Button.vue";

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

function toggleHighlight() {
  if (!editor.value) return;
  editor.value.focus();

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  if (range.collapsed) return;

  // Check if selection is inside an existing highlight span
  let container: Node | null = range.commonAncestorContainer;
  let highlightSpan: HTMLElement | null = null;

  while (container && container !== editor.value) {
    if (container.nodeType === Node.ELEMENT_NODE) {
      const el = container as HTMLElement;
      if (el.tagName === "SPAN" && el.classList.contains("text-highlight")) {
        highlightSpan = el;
        break;
      }
    }
    container = container.parentNode;
  }

  if (highlightSpan) {
    // Unwrap highlight span
    const parent = highlightSpan.parentNode;
    if (parent) {
      while (highlightSpan.firstChild) {
        parent.insertBefore(highlightSpan.firstChild, highlightSpan);
      }
      parent.removeChild(highlightSpan);
      parent.normalize();
    }
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
