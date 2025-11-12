<template>
  <div class="space-y-8 p-4">
    <!-- Headings -->
    <section>
      <H2 class="mb-4">Headings</H2>
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
      <H2 class="mb-4">Headings with Severities</H2>
      <H1 color="primary">Primary Heading 1</H1>
      <H2 color="secondary">Secondary Heading 2</H2>
      <H3 color="success">Success Heading 3</H3>
      <H4 color="info">Info Heading 4</H4>
      <H5 color="warning">Warning Heading 5</H5>
      <H6 color="error">Error Heading 6</H6>
    </section>

    <!-- Headings with Font Weights -->
    <section>
      <H2 class="mb-4">Headings with Font Weights</H2>
      <H1 fontWeight="normal">Normal Weight H1</H1>
      <H2 fontWeight="medium">Medium Weight H2</H2>
      <H3 fontWeight="semibold">Semibold Weight H3</H3>
      <H4 fontWeight="bold">Bold Weight H4</H4>
    </section>

    <!-- Headings without Margins -->
    <section>
      <H2 class="mb-4">Headings without Margins</H2>
      <H1>H1 No Margin</H1>
      <H2>H2 No Margin</H2>
      <H3>H3 No Margin</H3>
    </section>

    <!-- Paragraphs -->
    <section>
      <H2 class="mb-4">Paragraphs</H2>
      <P>This is a default paragraph with normal text. It provides good readability and spacing for body content.</P>
      <P color="muted">This is a muted paragraph, perfect for secondary information or less important text.</P>
      <P color="primary">This paragraph uses primary color for emphasis.</P>
      <P color="success">This paragraph uses success color to indicate positive information.</P>
      <P color="error">This paragraph uses error color to highlight important warnings or errors.</P>
    </section>

    <!-- Paragraph Sizes -->
    <section>
      <H2 class="mb-4">Paragraph Sizes</H2>
      <P fontSize="sm">Small paragraph text (text-sm)</P>
      <P fontSize="md">Medium paragraph text (text-base) - Default</P>
      <P fontSize="lg">Large paragraph text (text-lg)</P>
      <P fontSize="xl">Extra large paragraph text (text-xl)</P>
    </section>

    <!-- Paragraph Font Weights -->
    <section>
      <H2 class="mb-4">Paragraph Font Weights</H2>
      <P fontWeight="normal">Normal weight paragraph</P>
      <P fontWeight="medium">Medium weight paragraph</P>
      <P fontWeight="semibold">Semibold weight paragraph</P>
      <P fontWeight="bold">Bold weight paragraph</P>
    </section>

    <!-- Paragraphs without Margins -->
    <section>
      <H2 class="mb-4">Paragraphs without Margins</H2>
      <P>First paragraph without margin.</P>
      <P>Second paragraph without margin.</P>
      <P>Third paragraph without margin.</P>
    </section>

    <!-- Spans -->
    <section>
      <H2 class="mb-4">Spans</H2>
      <div>
        <P>This is a paragraph with a <Span color="primary">primary colored span</Span> inside it.</P>
      </div>
      <div>
        <P>You can also use <Span color="success" fontWeight="semibold">success colored bold span</Span> for emphasis.</P>
      </div>
      <div>
        <P>And here's a <Span color="muted" fontSize="sm">small muted span</Span> for less important text.</P>
      </div>
    </section>

    <!-- Span Sizes -->
    <section>
      <H2 class="mb-4">Span Sizes</H2>
      <P>Small span: <Span fontSize="sm">text-sm</Span></P>
      <P>Medium span: <Span fontSize="md">text-base</Span></P>
      <P>Large span: <Span fontSize="lg">text-lg</Span></P>
      <P>Extra large span: <Span fontSize="xl">text-xl</Span></P>
    </section>

    <!-- Blockquotes -->
    <section>
      <H2 class="mb-4">Blockquotes</H2>
      <Blockquote>This is a default blockquote. It's perfect for highlighting important quotes or callouts.</Blockquote>
      <Blockquote color="primary">This blockquote uses primary color for emphasis.</Blockquote>
      <Blockquote color="success">This blockquote uses success color to indicate positive information.</Blockquote>
      <Blockquote color="muted">This is a muted blockquote for less prominent quotes.</Blockquote>
    </section>

    <!-- Blockquote Sizes -->
    <section>
      <H2 class="mb-4">Blockquote Sizes</H2>
      <Blockquote fontSize="sm">Small blockquote text</Blockquote>
      <Blockquote fontSize="md">Medium blockquote text - Default</Blockquote>
      <Blockquote fontSize="lg">Large blockquote text</Blockquote>
      <Blockquote fontSize="xl">Extra large blockquote text</Blockquote>
    </section>

    <!-- Code -->
    <section>
      <H2 class="mb-4">Code</H2>
      <div>
        <P>Inline code example: <Code :block="false">const example = "inline code";</Code></P>
      </div>
      <div>
        <P>Colored inline code: <Code color="primary" :block="false">primary code</Code> and <Code :block="false" color="success">success code</Code></P>
      </div>
      <Code>// This is a block code example const example = { name: "VeloceVue", version: "0.19.0", type: "component library" };</Code>
      <Code color="primary">// Block code with primary color function greetUser(name: string) { return `Hello, ${name}!`; }</Code>
    </section>

    <!-- Code Sizes -->
    <section>
      <H2 class="mb-4">Code Sizes</H2>
      <Code fontSize="sm">// Small code const small = "text-sm";</Code>
      <Code fontSize="md">// Medium code - Default const medium = "text-base";</Code>
      <Code fontSize="lg">// Large code const large = "text-lg";</Code>
      <Code fontSize="xl">// Extra large code const xl = "text-xl";</Code>
    </section>

    <!-- Labels -->
    <section>
      <H2 class="mb-4">Labels</H2>
      <Label>Default Label</Label>
      <Label color="primary">Primary Label</Label>
      <Label color="success">Success Label</Label>
      <Label color="muted">Muted Label</Label>
      <Label required>Required Label</Label>
      <Label color="error" required>Error Required Label</Label>
    </section>

    <!-- Label Sizes -->
    <section>
      <H2 class="mb-4">Label Sizes</H2>
      <Label fontSize="sm">Small Label</Label>
      <Label fontSize="md">Medium Label - Default</Label>
      <Label fontSize="lg">Large Label</Label>
      <Label fontSize="xl">Extra Large Label</Label>
    </section>

    <!-- Label Font Weights -->
    <section>
      <H2 class="mb-4">Label Font Weights</H2>
      <Label fontWeight="normal">Normal Weight Label</Label>
      <Label fontWeight="medium">Medium Weight Label - Default</Label>
      <Label fontWeight="semibold">Semibold Weight Label</Label>
      <Label fontWeight="bold">Bold Weight Label</Label>
    </section>

    <!-- Real World Example -->
    <section>
      <H2 class="mb-4">Real World Example</H2>
      <div class="space-y-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
        <H1 color="primary">Welcome to VeloceVue</H1>
        <H2>Getting Started</H2>
        <P>VeloceVue is a modern Vue 3 component library built with TypeScript and Tailwind CSS. It provides a comprehensive set of components for building beautiful and responsive user interfaces.</P>
        <H3>Installation</H3>
        <P>To get started, install the library using your preferred package manager:</P>
        <Code>pnpm add veloce</Code>
        <H3>Usage</H3>
        <P>Import the components you need in your Vue components:</P>
        <Code color="primary">import { Button, Input, Modal } from "veloce/ui";</Code>
        <Blockquote color="info">Tip: Make sure to import the CSS file in your main application file: <Code :block="false" color="neutral">import "veloce/style.css"</Code></Blockquote>
        <H3>Features</H3>
        <P>The library includes:</P>
        <ul class="ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
          <li><Span fontWeight="semibold">Consistent Design:</Span> All components follow the same design system</li>
          <li><Span fontWeight="semibold">Dark Mode:</Span> Built-in dark mode support</li>
          <li><Span fontWeight="semibold">TypeScript:</Span> Full TypeScript support</li>
          <li><Span fontWeight="semibold">Customizable:</Span> Easy to customize with CSS variables</li>
        </ul>
        <div class="mt-4">
          <Label required>Email Address</Label>
          <P fontSize="sm" color="muted">We'll never share your email with anyone else.</P>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { H1, H2, H3, H4, H5, H6, P, Span, Blockquote, Code, Label } from "@veloce/typography";
</script>
