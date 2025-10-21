### Theming

1. **Create `ui.config.js` and add the following code:**

```js
import { createThemeConfig } from "veloce-vue";

const themeConfig = {
  colors: {
    primary: "#F5276C",
    secondary: "#F54927",
    accent: "#F5B027",
  },
};

export default createThemeConfig(themeConfig);
```

2. **Import and use it in `main.js`:**

```js
import themeConfig from "./ui.config";

// after creating your Vue app instance:
app.use(themeConfig);
```

3. **Use the theme colors in your components/styles:**

```html
<div :style="{ backgroundColor: 'var(--ui-color-primary)' }">...</div>
```
