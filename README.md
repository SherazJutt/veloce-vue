<h1 align="center">Welcome to Veloce</h1>

A modern Vue.js UI component library built with Vue, Typescript and Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/veloce.svg)](https://www.npmjs.com/package/veloce-vue)
![npm downloads](https://img.shields.io/npm/dm/veloce-vue.svg)
![license](https://img.shields.io/npm/l/veloce-vue.svg)

## Installation

Install the library from NPM:

```bash
pnpm add veloce
```

## Setup

### 1. Import the CSS

Import the library's styles in your main application file:

```javascript
import "veloce/style.css";
```

### 2. Import Components

Import the components you need in your Vue components:

```javascript
import { Button } from "veloce/ui";
```

## Usage Example

```vue
<template>
  <div>
    <!-- Primary Button -->
    <Button label="Primary Button" />
  </div>
</template>

<script setup>
import { Button } from "veloce/ui";
</script>
```

## Main Application Setup

In your main application file (e.g., `main.ts`):

```javascript
import "veloce/styles.css";
import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
```

## Requirements

- Vue 3.5 or higher
- Tailwind CSS v4 (for styling)

### Consuming application UI configuration

Create `ui.config.ts` and add the following code:

```javascript
import { config } from "veloce/config";

const themeConfig = {
  colors: {
    primary: "#F5276C",
    secondary: "#F54927",
    accent: "#F5B027",
  },
};

export default config(themeConfig);
```

Import and use it in `main.ts`:

```javascript
import UIConfig from "./ui.config";

// after creating your Vue app instance:
app.use(UIConfig);
```

Use the UI colors in your components/styles:

```html
<div :style="{ backgroundColor: 'var(--ui-color-primary)' }">...</div>
```

> **ℹ️ Developer Alert:**  
> This library is in active development. APIs and styles may change between releases.  
> Please consult the documentation and changelog for updates before production use.

## Development

This library is built using:

- Vite
- Vue 3
- TypeScript
- Tailwind CSS v4

### Run development server

```bash
pnpm dev
```

This will start the development server at `http://localhost:5173` in the playground application built with vite + vue.

## Docs

```bash
pnpm dev:docs
```

This will start the development server at `http://localhost:3000` in the documentation application built with nuxt.

## Production

### Build npm package

```bash
pnpm build:package
```

This will build the npm package into the `build/package` directory.

> ℹ️ Veloce is in active development. APIs and styles may evolve.
