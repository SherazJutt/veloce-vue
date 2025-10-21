<template>
  <div class="markdown-body" v-html="compiledHtml"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import "github-markdown-css/github-markdown-light.css";

let DOMPurify: any = null;
try {
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
  console.log(Prism);
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
  console.error(e);
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

<style>
/* --- Inline badge alignment fix --- */
.markdown-body p a img,
.markdown-body p img {
  display: inline !important;
  vertical-align: middle;
  margin-right: 6px;
  margin-bottom: 0 !important;
}
</style>
