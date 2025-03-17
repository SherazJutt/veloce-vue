# vue-components

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) 
[![Vue 3](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://v3.vuejs.org/) 
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)

A collection of reusable **Vue 3 + TypeScript** components styled with **TailwindCSS**. These components are designed to help you quickly build modern UIs with consistent design patterns.

---

## 🛠 Features

- ⚙️ Built with **TypeScript** - Fully typed components for better DX.
- 🧩 **Reusable Vue 3 components** using the Composition API.
- 🎨 Styled with **TailwindCSS** utility classes.
- 🌐 Global **Iconify** icon support via `<Icon />` component.
- ⚡ Lightweight, modular, and easy to extend.

---

## 📦 Components Included

| Component         | Description                                 |
|-------------------|---------------------------------------------|
| `Accordion.vue`   | Expandable accordion list with slot support |
| `Button.vue`      | Versatile button with multiple variants     |
| `Carousel.vue`    | Lightweight image/content carousel          |
| `Checkbox.vue`    | Customizable checkbox input                 |
| `Drawer.vue`      | Slide-in drawer with overlay                |
| `Input.vue`       | Styled input field with labels and states   |
| `Modal.vue`       | Modal dialog with smooth transitions        |
| `Popover.vue`     | Popover for contextual info dropdown        |
| `RangeSlider.vue` | Range slider input with step support        |
| `Select.vue`      | Dropdown select with built-in search        |
| `Separator.vue`   | Horizontal/vertical divider                 |
| `Tooltip.vue`     | Tooltip component for hover information     |

---

## 🎮 Usage Example

### Install TailwindCSS (if not installed):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash
<script setup lang="ts">
import Button from '@/components/Button.vue';
import Accordion from '@/components/Accordion.vue';

const items = [
  { title: 'Section 1', content: 'This is content for section 1.' },
  { title: 'Section 2', content: 'This is content for section 2.' },
];
</script>

<template>
  <!-- Button Example -->
  <Button label="Click Me" variant="solid" />

  <!-- Accordion Example -->
  <Accordion :items="items" />

  <!-- Tooltip Example -->
  <div class="mt-4">
    <Tooltip text="I am a tooltip!">
      <Button label="Hover me" variant="outlined" />
    </Tooltip>
  </div>

  <!-- Select Example -->
  <Select :options="['Option 1', 'Option 2', 'Option 3']" v-model="selectedOption" />
</template>
```

🎨 Design Tokens

Border color: border-gray-200
Background highlight: bg-primary

🌐 Global Icon Component
Icons are globally available via the <Icon /> component using Iconify:

<Icon icon="mdi:home" class="text-xl text-gray-600" />
Resize icons: with Tailwind’s text-sm, text-lg, text-xl, etc.
Usage: No import needed; just drop <Icon /> wherever required.


🧩 Tech Stack
Vue 3 (Composition API)
TypeScript
TailwindCSS
Iconify (global icon management)
🤝 Contributing
Feel free to open issues or submit pull requests for new components, improvements, or fixes. Contributions are highly appreciated!

Notes
Icons Link: https://icon-sets.iconify.design/
Icon resize: Use font size utilities like text-xl, text-2xl, etc.
Global Icon component: <Icon icon="mdi:home" /> is globally registered.
