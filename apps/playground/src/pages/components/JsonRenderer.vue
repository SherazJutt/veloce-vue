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
    props: { color: "primary" },
    slot: "Welcome to VeloceVue",
  },
  {
    component: "h2",
    id: useRandomId(),
    slot: "Getting Started",
  },
  {
    component: "p",
    id: useRandomId(),
    slot: "VeloceVue is a modern Vue 3 component library built with TypeScript and Tailwind CSS. It provides a comprehensive set of components for building beautiful and responsive user interfaces.",
  },
  {
    component: "h3",
    id: useRandomId(),
    slot: "Installation",
  },
  {
    component: "p",
    id: useRandomId(),
    slot: "To get started, install the library using your preferred package manager:",
  },
  {
    component: "code",
    id: useRandomId(),
    slot: "pnpm add veloce",
  },
  {
    component: "h3",
    id: useRandomId(),
    slot: "Usage",
  },
  {
    component: "p",
    id: useRandomId(),
    slot: "Import the components you need in your Vue components:",
  },
  {
    component: "code",
    id: useRandomId(),
    props: { color: "primary" },
    slot: 'import { Button, Input, Modal } from "veloce/ui";',
  },
  {
    component: "blockquote",
    id: useRandomId(),
    props: { color: "info" },
    slot: 'Tip: Make sure to import the CSS file in your main application file: <code class="text-highlight">import "veloce/style.css"</code>',
  },
  {
    component: "h3",
    id: useRandomId(),
    slot: "Features",
  },
  {
    component: "p",
    id: useRandomId(),
    slot: "The library includes:",
  },
  {
    component: "list",
    id: useRandomId(),
    props: { type: "ul", spacing: "sm" },
    items: ["Consistent Design", "Dark Mode", "TypeScript", "Customizable"],
  },
  {
    component: "label",
    id: useRandomId(),
    props: { required: true, color: "warning" },
    slot: "Email Address",
  },
  {
    component: "p",
    id: useRandomId(),
    props: { fontSize: "sm", color: "muted" },
    slot: "We'll never share your email with anyone else.",
  },
];
</script>

<!-- <div class="mt-4">
  <Label required>Email Address</Label>
  <P size="sm" color="muted">We'll never share your email with anyone else.</P>
</div> -->
