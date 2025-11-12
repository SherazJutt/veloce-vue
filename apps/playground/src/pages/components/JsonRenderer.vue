<template>
  <div class="rounded border p-4">
    <JsonRenderer :json="json" />
  </div>
</template>

<script setup lang="ts">
import { JsonRenderer } from "@veloce/ui";
import type { JsonRendererItem } from "@veloce/types";
import { useRandomId } from "@veloce/utils";

const json: JsonRendererItem[] = [
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
    component: "p",
    id: useRandomId(),
    props: { text: "VeloceVue is a modern Vue 3 component library built with TypeScript and Tailwind CSS. It provides a comprehensive set of components for building beautiful and responsive user interfaces." },
  },
  {
    component: "h3",
    id: useRandomId(),
    props: { text: "Installation" },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { text: "To get started, install the library using your preferred package manager:" },
  },
  {
    component: "code",
    id: useRandomId(),
    props: { text: "pnpm add veloce" },
  },
  {
    component: "h3",
    id: useRandomId(),
    props: { text: "Usage" },
  },
  {
    component: "message",
    id: useRandomId(),
    props: { text: "This is a message" },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { text: "Import the components you need in your Vue components:" },
  },
  {
    component: "code",
    id: useRandomId(),
    props: { color: "primary", text: 'import { Button, Input, Modal } from "veloce/ui";' },
  },
  {
    component: "blockquote",
    id: useRandomId(),
    props: { color: "info", text: 'Tip: Make sure to import the CSS file in your main application file: <code class="text-highlight">import "veloce/style.css"</code>' },
  },
  {
    component: "h3",
    id: useRandomId(),
    props: { text: "Features" },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { text: "The library includes:" },
  },
  {
    component: "list",
    id: useRandomId(),
    props: { type: "ul", spacing: "sm", items: ["Consistent Design", "Dark Mode", "TypeScript", "Customizable"] },
  },
  {
    component: "label",
    id: useRandomId(),
    props: { required: true, marginTop: "md", color: "warning", text: "Email Address" },
  },
  {
    component: "p",
    id: useRandomId(),
    props: { fontSize: "sm", color: "muted", text: "We'll never share your email with anyone else." },
  },
];
</script>
