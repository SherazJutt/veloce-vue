<h1 align="center">Veloce Vue</h1>

A modern Vue 3 UI component library built with TypeScript and Tailwind CSS.

- Fast, accessible, and composable components
- Simple theming via configuration
- Designed for Vite, Storybook, and modern tooling

### Quick start

```bash
pnpm add veloce-vue
```

```javascript
// main.ts
import "veloce-vue/style.css";
```

```vue
<template>
  <Button label="Primary Button" />
</template>

<script setup>
import { Button } from "veloce-vue";
</script>
```

### Theming

```javascript
// ui.config.ts
import { config } from "veloce-vue";

const themeConfig = {
  colors: {
    primary: "#F5276C",
    secondary: "#F54927",
    accent: "#F5B027",
  },
};

export default config(themeConfig);
```

```javascript
// main.ts
import UIConfig from "./ui.config";
// after creating your Vue app instance:
app.use(UIConfig);
```

Use theme variables anywhere:

```html
<div :style="{ backgroundColor: 'var(--ui-color-primary)' }">...</div>
```

> ℹ️ Veloce Vue is in active development. APIs and styles may evolve.
