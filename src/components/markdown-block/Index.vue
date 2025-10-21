<template>
  <div class="markdown-body" v-html="compiledHtml"></div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";
import "github-markdown-css/github-markdown-light.css";
import "prismjs/themes/prism.css";
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-twilight.css";

// Load languages
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";

let DOMPurify: any = null;
try {
  DOMPurify = require("dompurify");
} catch {
  DOMPurify = null;
}

const props = defineProps<{ content: string }>();

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (code: string, lang: string): string => {
    try {
      const grammar = Prism.languages[lang] ?? Prism.languages.markup;
      if (!grammar) {
        throw new Error("No grammar found");
      }
      return `<pre class="language-${lang}"><code>${Prism.highlight(code, grammar, lang)}</code></pre>`;
    } catch {
      return `<pre class="language-text"><code>${md.utils.escapeHtml(code)}</code></pre>`;
    }
  },
});

const compiledHtml = computed(() => {
  const rendered = md.render(props.content || "");
  if (DOMPurify && typeof DOMPurify.sanitize === "function") {
    const purifier = DOMPurify.default || DOMPurify;
    return purifier.sanitize ? purifier.sanitize(rendered) : rendered;
  }
  return rendered;
});

onMounted(() => Prism.highlightAll());
watch(
  () => props.content,
  () => Prism.highlightAll(),
);
</script>

<style lang="scss">
.markdown-body {
  pre[class*="language-"] {
    background: #f6f8fa;
    border: 1px solid #ededed;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
}
</style>
