<template>
  <div class="space-y-8 p-4">
    <!-- Headings -->
    <section>
      <H2 class="mb-4" noMargin>Headings</H2>
      <div>
        <H1>Heading 1 - Main Title</H1>
        <H2>Heading 2 - Section Title</H2>
        <H3>Heading 3 - Subsection Title</H3>
        <H4>Heading 4 - Minor Section</H4>
        <H5>Heading 5 - Small Heading</H5>
        <H6>Heading 6 - Smallest Heading</H6>
      </div>
    </section>

    <!-- Headings with Severities -->
    <section>
      <H2 class="mb-4" noMargin>Headings with Severities</H2>
      <H1 severity="primary">Primary Heading 1</H1>
      <H2 severity="secondary">Secondary Heading 2</H2>
      <H3 severity="success">Success Heading 3</H3>
      <H4 severity="info">Info Heading 4</H4>
      <H5 severity="warning">Warning Heading 5</H5>
      <H6 severity="error">Error Heading 6</H6>
    </section>

    <!-- Headings with Font Weights -->
    <section>
      <H2 class="mb-4" noMargin>Headings with Font Weights</H2>
      <H1 fontWeight="normal">Normal Weight H1</H1>
      <H2 fontWeight="medium">Medium Weight H2</H2>
      <H3 fontWeight="semibold">Semibold Weight H3</H3>
      <H4 fontWeight="bold">Bold Weight H4</H4>
    </section>

    <!-- Headings without Margins -->
    <section>
      <H2 class="mb-4" noMargin>Headings without Margins</H2>
      <H1 noMargin>H1 No Margin</H1>
      <H2 noMargin>H2 No Margin</H2>
      <H3 noMargin>H3 No Margin</H3>
    </section>

    <!-- Paragraphs -->
    <section>
      <H2 class="mb-4" noMargin>Paragraphs</H2>
      <P>This is a default paragraph with normal text. It provides good readability and spacing for body content.</P>
      <P severity="muted">This is a muted paragraph, perfect for secondary information or less important text.</P>
      <P severity="primary">This paragraph uses primary color for emphasis.</P>
      <P severity="success">This paragraph uses success color to indicate positive information.</P>
      <P severity="error">This paragraph uses error color to highlight important warnings or errors.</P>
    </section>

    <!-- Paragraph Sizes -->
    <section>
      <H2 class="mb-4" noMargin>Paragraph Sizes</H2>
      <P size="sm">Small paragraph text (text-sm)</P>
      <P size="md">Medium paragraph text (text-base) - Default</P>
      <P size="lg">Large paragraph text (text-lg)</P>
      <P size="xl">Extra large paragraph text (text-xl)</P>
    </section>

    <!-- Paragraph Font Weights -->
    <section>
      <H2 class="mb-4" noMargin>Paragraph Font Weights</H2>
      <P fontWeight="normal">Normal weight paragraph</P>
      <P fontWeight="medium">Medium weight paragraph</P>
      <P fontWeight="semibold">Semibold weight paragraph</P>
      <P fontWeight="bold">Bold weight paragraph</P>
    </section>

    <!-- Paragraphs without Margins -->
    <section>
      <H2 class="mb-4" noMargin>Paragraphs without Margins</H2>
      <P noMargin>First paragraph without margin.</P>
      <P noMargin>Second paragraph without margin.</P>
      <P noMargin>Third paragraph without margin.</P>
    </section>

    <!-- Spans -->
    <section>
      <H2 class="mb-4" noMargin>Spans</H2>
      <div>
        <P>This is a paragraph with a <Span severity="primary">primary colored span</Span> inside it.</P>
      </div>
      <div>
        <P>You can also use <Span severity="success" fontWeight="semibold">success colored bold span</Span> for emphasis.</P>
      </div>
      <div>
        <P>And here's a <Span severity="muted" size="sm">small muted span</Span> for less important text.</P>
      </div>
    </section>

    <!-- Span Sizes -->
    <section>
      <H2 class="mb-4" noMargin>Span Sizes</H2>
      <P>Small span: <Span size="sm">text-sm</Span></P>
      <P>Medium span: <Span size="md">text-base</Span></P>
      <P>Large span: <Span size="lg">text-lg</Span></P>
      <P>Extra large span: <Span size="xl">text-xl</Span></P>
    </section>

    <!-- Blockquotes -->
    <section>
      <H2 class="mb-4" noMargin>Blockquotes</H2>
      <Blockquote>This is a default blockquote. It's perfect for highlighting important quotes or callouts.</Blockquote>
      <Blockquote severity="primary">This blockquote uses primary color for emphasis.</Blockquote>
      <Blockquote severity="success">This blockquote uses success color to indicate positive information.</Blockquote>
      <Blockquote severity="muted">This is a muted blockquote for less prominent quotes.</Blockquote>
    </section>

    <!-- Blockquote Sizes -->
    <section>
      <H2 class="mb-4" noMargin>Blockquote Sizes</H2>
      <Blockquote size="sm">Small blockquote text</Blockquote>
      <Blockquote size="md">Medium blockquote text - Default</Blockquote>
      <Blockquote size="lg">Large blockquote text</Blockquote>
      <Blockquote size="xl">Extra large blockquote text</Blockquote>
    </section>

    <!-- Code -->
    <section>
      <H2 class="mb-4" noMargin>Code</H2>
      <div>
        <P>Inline code example: <Code>const example = "inline code";</Code></P>
      </div>
      <div>
        <P>Colored inline code: <Code severity="primary">primary code</Code> and <Code severity="success">success code</Code></P>
      </div>
      <Code block>// This is a block code example const example = { name: "VeloceVue", version: "0.19.0", type: "component library" };</Code>
      <Code block severity="primary">// Block code with primary color function greetUser(name: string) { return `Hello, ${name}!`; }</Code>
    </section>

    <!-- Code Sizes -->
    <section>
      <H2 class="mb-4" noMargin>Code Sizes</H2>
      <Code block size="sm">// Small code block const small = "text-sm";</Code>
      <Code block size="md">// Medium code block - Default const medium = "text-base";</Code>
      <Code block size="lg">// Large code block const large = "text-lg";</Code>
      <Code block size="xl">// Extra large code block const xl = "text-xl";</Code>
    </section>

    <!-- Labels -->
    <section>
      <H2 class="mb-4" noMargin>Labels</H2>
      <Label>Default Label</Label>
      <Label severity="primary">Primary Label</Label>
      <Label severity="success">Success Label</Label>
      <Label severity="muted">Muted Label</Label>
      <Label required>Required Label</Label>
      <Label severity="error" required>Error Required Label</Label>
    </section>

    <!-- Label Sizes -->
    <section>
      <H2 class="mb-4" noMargin>Label Sizes</H2>
      <Label size="sm">Small Label</Label>
      <Label size="md">Medium Label - Default</Label>
      <Label size="lg">Large Label</Label>
      <Label size="xl">Extra Large Label</Label>
    </section>

    <!-- Label Font Weights -->
    <section>
      <H2 class="mb-4" noMargin>Label Font Weights</H2>
      <Label fontWeight="normal">Normal Weight Label</Label>
      <Label fontWeight="medium">Medium Weight Label - Default</Label>
      <Label fontWeight="semibold">Semibold Weight Label</Label>
      <Label fontWeight="bold">Bold Weight Label</Label>
    </section>

    <!-- Real World Example -->
    <section>
      <H2 class="mb-4" noMargin>Real World Example</H2>
      <div class="space-y-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
        <H1 color="primary" noMargin>Welcome to VeloceVue</H1>
        <H2>Getting Started</H2>
        <P>VeloceVue is a modern Vue 3 component library built with TypeScript and Tailwind CSS. It provides a comprehensive set of components for building beautiful and responsive user interfaces.</P>
        <H3 noMargin>Installation</H3>
        <P>To get started, install the library using your preferred package manager:</P>
        <Code block>pnpm add veloce</Code>
        <H3 noMargin>Usage</H3>
        <P>Import the components you need in your Vue components:</P>
        <Code block severity="primary">import { Button, Input, Modal } from "veloce/ui";</Code>
        <Blockquote severity="info">Tip: Make sure to import the CSS file in your main application file: <Code>import "veloce/style.css"</Code></Blockquote>
        <H3 noMargin>Features</H3>
        <P>The library includes:</P>
        <ul class="ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
          <li><Span fontWeight="semibold">Consistent Design:</Span> All components follow the same design system</li>
          <li><Span fontWeight="semibold">Dark Mode:</Span> Built-in dark mode support</li>
          <li><Span fontWeight="semibold">TypeScript:</Span> Full TypeScript support</li>
          <li><Span fontWeight="semibold">Customizable:</Span> Easy to customize with CSS variables</li>
        </ul>
        <div class="mt-4">
          <Label required>Email Address</Label>
          <P size="sm" severity="muted" noMargin>We'll never share your email with anyone else.</P>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { H1, H2, H3, H4, H5, H6, P, Span, Blockquote, Code, Label } from "@veloce/typography";
</script>
