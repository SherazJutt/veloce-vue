<template>
  <!-- Consuming application configuration -->
  <div>
    <h3 class="text-lg font-medium">Consuming application configuration</h3>
    <div class="mt-2.5">
      <ol class="list-decimal space-y-4 pl-5">
        <li>
          <div class="font-medium">Create <code>ui.config.js and add the following code</code></div>
          <pre class="mt-2 overflow-auto rounded-md bg-gray-100 p-3">
<code class="font-mono text-sm" v-pre>import { createThemeConfig } from 'veloce-vue';

const themeConfig = {
  colors: {
    primary: '#F5276C',
    secondary: '#F54927',
    accent: '#F5B027',
  },
};

export default createThemeConfig(themeConfig);
</code></pre>
        </li>
        <li>
          <div class="font-medium">Import and use it in <code>main.js</code></div>
          <pre class="mt-2 overflow-auto rounded-md bg-gray-100 p-3 whitespace-pre"><code class="language-js font-mono text-sm" v-pre>import themeConfig from './ui.config';

// after creating your Vue app instance:
app.use(themeConfig);
</code></pre>
        </li>
        <li>
          <div class="mt-2 font-medium">Use the theme colors in your components/styles</div>
          <pre class="mt-2 overflow-auto rounded-md bg-gray-100 p-3 whitespace-pre"><code class="language-html font-mono text-sm" v-pre>&lt;div :style="{ backgroundColor: 'var(--ui-color-primary)' }"&gt;...&lt;/div&gt;</code></pre>
        </li>
      </ol>
    </div>
  </div>
</template>
