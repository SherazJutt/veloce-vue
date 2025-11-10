<template>
  <div class="md-wrapper">
    <template v-for="(node, index) in markdownNodes" :key="index">
      <component :is="node.type" v-if="typeof node.type !== 'string'" v-bind="node.props" />
      <div v-else-if="node.content" v-html="node.content" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, markRaw } from "vue";
import { Button } from "@veloce/ui";
import testMarkdown from "./test.md?raw";

interface MarkdownNode {
  type: string | any;
  content?: string;
  props?: Record<string, any>;
}

const markdownNodes = ref<MarkdownNode[]>([]);

// ----- Parse Button Props from String -----
function parseButtonProps(attrString: string): Record<string, any> {
  const props: Record<string, any> = {};
  // Match key="value" or key='value' or key=value
  const attrRegex = /(\w+)=(["'])((?:\\.|(?!\2).)*)\2|(\w+)=(\S+)/g;
  let match;

  while ((match = attrRegex.exec(attrString)) !== null) {
    const key = match[1] || match[4];
    const value = match[3] || match[5];

    if (!key || value === undefined) continue;

    // Convert kebab-case to camelCase for Vue props
    const camelKey = key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    // Parse boolean values
    if (value === "true" || value === "false") {
      props[camelKey] = value === "true";
    } else {
      // Remove quotes if present
      props[camelKey] = value.replace(/^["']|["']$/g, "");
    }
  }

  return props;
}

// ----- Markdown Renderer -----
function parseMarkdown(markdown: string): MarkdownNode[] {
  const nodes: MarkdownNode[] = [];
  let text = markdown.trim();

  // Step 1: Extract code blocks first and replace with placeholders
  const codeBlocks: string[] = [];
  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang?.toLowerCase();
    let highlighted = code;

    if (language === "js" || language === "javascript") {
      highlighted = highlightJS(code);
    }

    const placeholder = `%%CODEBLOCK${codeBlocks.length}%%`;
    codeBlocks.push(`<pre><code class="language-${language || "text"}">${highlighted}</code></pre>`);
    return placeholder;
  });

  // Step 2: Now split by Button components (they won't match inside code blocks)
  const buttonRegex = /<Button\s+([^/>]*)\s*\/?>/g;
  const parts: Array<{ type: "text" | "button"; content: string; props?: Record<string, any> }> = [];
  let lastIndex = 0;
  let match;

  while ((match = buttonRegex.exec(text)) !== null) {
    // Add text before Button
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.substring(lastIndex, match.index) });
    }
    // Add Button component
    const props = parseButtonProps(match[1] || "");
    parts.push({ type: "button", content: "", props });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.substring(lastIndex) });
  }

  // Step 3: Process each part
  for (const part of parts.length > 0 ? parts : [{ type: "text", content: text }]) {
    if (part.type === "button" && "props" in part) {
      nodes.push({
        type: markRaw(Button),
        props: part.props || {},
      });
    } else {
      // Process markdown in text parts
      let html = part.content;

      // ----- Headings (#, ##, ###, etc.) -----
      for (let i = 6; i >= 1; i--) {
        const pattern = new RegExp(`^${"#".repeat(i)}\\s+(.+)$`, "gm");
        html = html.replace(pattern, `<h${i} class="heading-${i}">$1</h${i}>`);
      }

      // ----- Paragraphs -----
      html = html
        .split(/\n{2,}/)
        .map((block) => {
          const trimmed = block.trim();
          if (!trimmed) return "";
          if (/^<h\d/.test(trimmed) || /^%%CODEBLOCK\d+%%$/.test(trimmed)) return trimmed;
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

      if (html.trim()) {
        nodes.push({
          type: "div",
          content: html,
        });
      }
    }
  }

  return nodes;
}

// ----- JS Highlighter -----
function highlightJS(code: string) {
  const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return escaped.replace(/\b(const|let|var|function|return|if|else|for|while|switch|case|break|new)\b/g, '<span class="hl-keyword">$1</span>').replace(/(\/\/.*)/g, '<span class="hl-comment">$1</span>');
}

onMounted(() => {
  markdownNodes.value = parseMarkdown(testMarkdown);
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
