<template>
  <div class="markdown-body" v-html="compiledHtml"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MarkdownIt from "markdown-it";

let DOMPurify: any = null;
try {
  // only import if installed
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  DOMPurify = require("dompurify"); // works in Vite dev
} catch (e) {
  DOMPurify = null;
}

const props = defineProps<{
  content: string;
}>();

// Configure markdown-it
const md = new MarkdownIt({
  html: true, // allow HTML in markdown
  linkify: true, // autolink URLs
  typographer: true, // smart quotes, dashes
});

// optional: syntax highlighting if prismjs is installed
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Prism = require("prismjs");
  // load common languages through prismjs imports if needed
  md.set({
    highlight: (code: string, lang: string) => {
      try {
        const grammar = Prism.languages[lang] || Prism.languages.markup;
        return `<pre class="language-${lang}"><code>${Prism.highlight(code, grammar, lang)}</code></pre>`;
      } catch (e) {
        return `<pre class="language-text"><code>${md.utils.escapeHtml(code)}</code></pre>`;
      }
    },
  });
} catch (e) {
  // prism not installed -> skip highlighting
}

const compiledHtml = computed(() => {
  const rendered = md.render(props.content || "");
  if (DOMPurify && typeof DOMPurify.sanitize === "function") {
    // DOMPurify exposes window.DOMPurify in browser; require() returns a factory for server
    try {
      // If DOMPurify is server-side require, it returns a function that needs window
      const purifier = DOMPurify.default || DOMPurify;
      // In Vite dev, using window.DOMPurify might be available when library is bundled; fallback:
      return purifier.sanitize ? purifier.sanitize(rendered) : rendered;
    } catch {
      return rendered;
    }
  }
  return rendered;
});
</script>

<style scoped>
.markdown-body {
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial;
  line-height: 1.7;
  color: #111827;
  padding: 1rem;
  max-width: none;
}
/* small readable defaults; replace with Tailwind or your CSS */
.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
.markdown-body pre {
  overflow: auto;
  padding: 0.75rem;
  border-radius: 6px;
  background: #f6f8fa;
}
.markdown-body code {
  background: #f3f4f6;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
  font-size: 0.92em;
}
</style>
