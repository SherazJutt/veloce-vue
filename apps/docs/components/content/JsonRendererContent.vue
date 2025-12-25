<template>
  <!-- All Components -->
  <div v-if="allComponents" :class="props.class">
    <JsonRenderer :json="allComponentsJson" />
  </div>

  <!-- Headings -->
  <div v-if="headings" :class="props.class">
    <JsonRenderer :json="headingsJson" />
  </div>

  <!-- Typography -->
  <div v-if="typography" :class="props.class">
    <JsonRenderer :json="typographyJson" />
  </div>

  <!-- Code -->
  <div v-if="code" :class="props.class">
    <JsonRenderer :json="codeJson" />
  </div>

  <!-- Lists -->
  <div v-if="lists" :class="props.class">
    <JsonRenderer :json="listsJson" />
  </div>

  <!-- Messages -->
  <div v-if="messages" :class="props.class">
    <JsonRenderer :json="messagesJson" />
  </div>
</template>

<script setup lang="ts">
import { JsonRenderer } from "veloce-vue/ui";
import type { JsonRendererItem } from "veloce-vue/types";
import { useRandomId } from "veloce-vue/utils";

const props = defineProps({
  allComponents: { type: Boolean, default: false },
  headings: { type: Boolean, default: false },
  typography: { type: Boolean, default: false },
  code: { type: Boolean, default: false },
  lists: { type: Boolean, default: false },
  messages: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const allComponentsJson: JsonRendererItem[] = [
  {
    component: "h1",
    id: useRandomId(),
    props: { color: "primary", text: "Welcome to VeloceVue" },
  },
  {
    component: "h2",
    id: useRandomId(),
    props: { text: "Getting Started" },
  },
  {
    component: "h3",
    id: useRandomId(),
    props: { text: "Installation" },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { text: "VeloceVue is a modern Vue 3 component library built with TypeScript and Tailwind CSS." },
  },
  {
    component: "code",
    id: useRandomId(),
    props: { text: "pnpm add veloce-vue" },
  },
  {
    component: "blockquote",
    id: useRandomId(),
    props: { color: "info", text: "This is a blockquote example with important information." },
  },
  {
    component: "span",
    id: useRandomId(),
    props: { text: "This is a span element for inline text styling." },
  },
  {
    component: "label",
    id: useRandomId(),
    props: { required: true, text: "Email Address", color: "warning" },
  },
  {
    component: "list",
    id: useRandomId(),
    props: { type: "ul", spacing: "sm", items: ["Feature 1", "Feature 2", "Feature 3"] },
  },
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is an info message", severity: "info" },
  },
];

const headingsJson: JsonRendererItem[] = [
  {
    component: "h1",
    id: useRandomId(),
    props: { text: "Heading 1", color: "primary" },
  },
  {
    component: "h2",
    id: useRandomId(),
    props: { text: "Heading 2", color: "secondary" },
  },
  {
    component: "h3",
    id: useRandomId(),
    props: { text: "Heading 3" },
  },
  {
    component: "h4",
    id: useRandomId(),
    props: { text: "Heading 4" },
  },
  {
    component: "h5",
    id: useRandomId(),
    props: { text: "Heading 5" },
  },
  {
    component: "h6",
    id: useRandomId(),
    props: { text: "Heading 6" },
  },
];

const typographyJson: JsonRendererItem[] = [
  {
    component: "p",
    id: useRandomId(),
    props: { text: "This is a paragraph with regular text." },
  },
  {
    component: "span",
    id: useRandomId(),
    props: { text: "This is a span element for inline styling.", color: "primary" },
  },
  {
    component: "blockquote",
    id: useRandomId(),
    props: { text: "This is a blockquote with important information.", color: "info" },
  },
  {
    component: "label",
    id: useRandomId(),
    props: { text: "Form Label", required: true },
  },
];

const codeJson: JsonRendererItem[] = [
  {
    component: "p",
    id: useRandomId(),
    props: { text: "Inline code example:" },
  },
  {
    component: "code",
    id: useRandomId(),
    props: { text: "const example = 'inline code';" },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { text: "Block code example:" },
  },
  {
    component: "code",
    id: useRandomId(),
    props: { text: "function example() {\n  return 'block code';\n}", block: true },
  },
];

const listsJson: JsonRendererItem[] = [
  {
    component: "p",
    id: useRandomId(),
    props: { text: "Unordered list:" },
  },
  {
    component: "list",
    id: useRandomId(),
    props: { type: "ul", spacing: "sm", items: ["Item 1", "Item 2", "Item 3"] },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { text: "Ordered list:" },
  },
  {
    component: "list",
    id: useRandomId(),
    props: { type: "ol", spacing: "md", items: ["First item", "Second item", "Third item"] },
  },
];

const messagesJson: JsonRendererItem[] = [
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is a primary message", severity: "primary" },
  },
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is a success message", severity: "success" },
  },
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is an info message", severity: "info" },
  },
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is a warning message", severity: "warning" },
  },
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is an error message", severity: "error" },
  },
];
</script>
