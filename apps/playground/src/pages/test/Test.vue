<template>
  <div class="md-wrapper" v-html="renderedMarkdown" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import testMarkdown from "./test.md?raw";

const renderedMarkdown = ref("");

// ----- Markdown Renderer -----
function renderMarkdown(markdown: string): string {
  let html = markdown.trim();

  // ----- Headings (#, ##, ###, etc.) -----
  for (let i = 6; i >= 1; i--) {
    const pattern = new RegExp(`^${"#".repeat(i)}\\s+(.+)$`, "gm");
    html = html.replace(pattern, `<h${i} class="heading-${i}">$1</h${i}>`);
  }

  // ----- Fenced Code Blocks (```) -----
  const codeBlocks: string[] = [];
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang?.toLowerCase();
    let highlighted = code;

    if (language === "js" || language === "javascript") {
      highlighted = highlightJS(code);
    }

    // store the code block in an array and replace with a placeholder
    const placeholder = `%%CODEBLOCK${codeBlocks.length}%%`;
    codeBlocks.push(`<pre><code class="language-${language || "text"}">${highlighted}</code></pre>`);
    return placeholder;
  });

  // ----- Paragraphs -----
  html = html
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      // skip headings, placeholders, and Vue components
      if (/^<h\d/.test(trimmed) || /^%%CODEBLOCK\d+%%$/.test(trimmed) || /^<[A-Z][\w-]*/.test(trimmed)) return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  // ----- Inline formatting -----
  html = html
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") // bold
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>") // italic
    .replace(/`(.+?)`/g, "<code class='inline-code'>$1</code>") // inline code
    .replace(/==(.+?)==/g, "<span class='highlight'>$1</span>"); // highlight

  // ----- Sanitization -----
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son\w+="[^"]*"/g, "");

  // ----- Restore code blocks -----
  html = html.replace(/%%CODEBLOCK(\d+)%%/g, (_, idx) => codeBlocks[parseInt(idx)] || "");

  return html;
}

// ----- JS Highlighter -----
function highlightJS(code: string) {
  const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped.replace(/\b(const|let|var|function|return|if|else|for|while|switch|case|break|new)\b/g, '<span class="hl-keyword">$1</span>').replace(/(\/\/.*)/g, '<span class="hl-comment">$1</span>');
}

onMounted(() => {
  renderedMarkdown.value = renderMarkdown(testMarkdown);
});
</script>

<style>
@reference "@/style.css";

.md-wrapper {
  & > * {
    @apply my-2.5;
  }

  /* headings (h1-h6) */
  .heading-1 {
    @apply my-5 text-4xl font-bold;
  }
  .heading-2 {
    @apply my-4 text-2xl font-semibold;
  }
  .heading-3 {
    @apply my-3 text-xl font-semibold;
  }
  .heading-4 {
    @apply my-2 text-base font-semibold;
  }
  .heading-5 {
    @apply my-1 text-sm font-semibold;
  }
  .heading-6 {
    @apply my-0.5 text-xs font-semibold;
  }

  /* code blocks (pre) */
  pre {
    @apply overflow-x-auto rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800;
  }

  /* inline code (code) */
  code {
    @apply font-mono text-sm;
  }

  /* JS Syntax highlight */
  .hl-keyword {
    @apply font-bold text-blue-400;
  }
  .hl-comment {
    @apply italic text-neutral-500;
  }

  /* Highlights and inline code */
  .highlight {
    @apply bg-primary text-inverted rounded px-1 py-0.5 font-mono text-sm;
  }
  .inline-code {
    @apply rounded bg-neutral-100 px-1 py-0.5 font-mono text-sm dark:bg-neutral-700;
  }
}
</style>
