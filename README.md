# Vue-Components

A modern Vue.js UI component library built with Vue, Typescript, Storybook and Tailwind CSS.

## Installation

Install the library from NPM:

```bash
pnpm add @sherazjutt/vue-components
```

## Setup

### 1. Import the CSS

Import the library's styles in your main application file:

```javascript
import "@sherazjutt/vue-components/style.css";
```

### 2. Import Components

Import the components you need in your Vue components:

```javascript
import { Button } from "@sherazjutt/vue-components";
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
import { Button } from "@sherazjutt/vue-components";
</script>
```

## Main Application Setup

In your main application file (e.g., `main.ts`):

```javascript
import "@sherazjutt/vue-components/style.css";
import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.mount("#app");
```

## Requirements

- Vue 3.5 or higher
- Tailwind CSS v4 (for styling)

## Development

This library is built using:

- Vue 3
- Tailwind CSS v4
- Vite
- Storybook for component documentation
- TypeScript

## Production

Run `pnpm build` to build the package.
Run `pnpm run build-storybook` to build storybook only.

To test the storybook locally, you can run `pnpm run preview-storybook`. This will start the storybook production build.

### Consuming application UI configuration

Create `ui.config.ts` and add the following code:

```javascript
import { config } from "@sherazjutt/vue-components";

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
