<template>
  <div class="space-y-8 p-4">
    <!-- Headings -->
    <section>
      <H2 class="mb-4" text="Headings" :margin-bottom="undefined" />
      <div>
        <H1 text="Heading 1 - Main Title" />
        <H2 text="Heading 2 - Section Title" />
        <H3 text="Heading 3 - Subsection Title" />
        <H4 text="Heading 4 - Minor Section" />
        <H5 text="Heading 5 - Small Heading" />
        <H6 text="Heading 6 - Smallest Heading" />
      </div>
    </section>

    <!-- Headings with Severities -->
    <section>
      <H2 class="mb-4" text="Headings with Severities" :margin-bottom="undefined" />
      <H1 text="Primary Heading 1" color="primary" />
      <H2 text="Secondary Heading 2" color="secondary" />
      <H3 text="Success Heading 3" color="success" />
      <H4 text="Info Heading 4" color="info" />
      <H5 text="Warning Heading 5" color="warning" />
      <H6 text="Error Heading 6" color="error" />
    </section>

    <!-- Headings with Font Weights -->
    <section>
      <H2 class="mb-4" text="Headings with Font Weights" :margin-bottom="undefined" />
      <H1 text="Normal Weight H1" fontWeight="normal" />
      <H2 text="Medium Weight H2" fontWeight="medium" />
      <H3 text="Semibold Weight H3" fontWeight="semibold" />
      <H4 text="Bold Weight H4" fontWeight="bold" />
    </section>

    <!-- Headings without Margins -->
    <section>
      <H2 class="mb-4" text="Headings without Margins" :margin-bottom="undefined" />
      <H1 text="H1 No Margin" :margin-top="undefined" :margin-bottom="undefined" />
      <H2 text="H2 No Margin" :margin-top="undefined" :margin-bottom="undefined" />
      <H3 text="H3 No Margin" :margin-top="undefined" :margin-bottom="undefined" />
    </section>

    <!-- Paragraphs -->
    <section>
      <H2 class="mb-4" text="Paragraphs" :margin-bottom="undefined" />
      <P text="This is a default paragraph with normal text. It provides good readability and spacing for body content." />
      <P text="This is a muted paragraph, perfect for secondary information or less important text." color="muted" />
      <P text="This paragraph uses primary color for emphasis." color="primary" />
      <P text="This paragraph uses success color to indicate positive information." color="success" />
      <P text="This paragraph uses error color to highlight important warnings or errors." color="error" />
    </section>

    <!-- Paragraph Sizes -->
    <section>
      <H2 class="mb-4" text="Paragraph Sizes" :margin-bottom="undefined" />
      <P text="Small paragraph text (text-sm)" fontSize="sm" />
      <P text="Medium paragraph text (text-base) - Default" fontSize="md" />
      <P text="Large paragraph text (text-lg)" fontSize="lg" />
      <P text="Extra large paragraph text (text-xl)" fontSize="xl" />
    </section>

    <!-- Paragraph Font Weights -->
    <section>
      <H2 class="mb-4" text="Paragraph Font Weights" :margin-bottom="undefined" />
      <P text="Normal weight paragraph" fontWeight="normal" />
      <P text="Medium weight paragraph" fontWeight="medium" />
      <P text="Semibold weight paragraph" fontWeight="semibold" />
      <P text="Bold weight paragraph" fontWeight="bold" />
    </section>

    <!-- Paragraphs without Margins -->
    <section>
      <H2 class="mb-4" text="Paragraphs without Margins" :margin-bottom="undefined" />
      <P text="First paragraph without margin." :margin-top="undefined" :margin-bottom="undefined" />
      <P text="Second paragraph without margin." :margin-top="undefined" :margin-bottom="undefined" />
      <P text="Third paragraph without margin." :margin-top="undefined" :margin-bottom="undefined" />
    </section>

    <!-- Spans -->
    <section>
      <H2 class="mb-4" text="Spans" :margin-bottom="undefined" />
      <div>
        <P text='This is a paragraph with a <span class="text-primary">primary colored span</span> inside it.' />
      </div>
      <div>
        <P text='You can also use <span class="text-success font-semibold">success colored bold span</span> for emphasis.' />
      </div>
      <div>
        <P text='And here&apos;s a <span class="text-muted text-sm">small muted span</span> for less important text.' />
      </div>
    </section>

    <!-- Span Sizes -->
    <section>
      <H2 class="mb-4" text="Span Sizes" :margin-bottom="undefined" />
      <P text='Small span: <span class="text-sm">text-sm</span>' />
      <P text='Medium span: <span class="text-base">text-base</span>' />
      <P text='Large span: <span class="text-lg">text-lg</span>' />
      <P text='Extra large span: <span class="text-xl">text-xl</span>' />
    </section>

    <!-- Blockquotes -->
    <section>
      <H2 class="mb-4" text="Blockquotes" :margin-bottom="undefined" />
      <Blockquote text="This is a default blockquote. It's perfect for highlighting important quotes or callouts." />
      <Blockquote text="This blockquote uses primary color for emphasis." color="primary" />
      <Blockquote text="This blockquote uses success color to indicate positive information." color="success" />
      <Blockquote text="This is a muted blockquote for less prominent quotes." color="muted" />
    </section>

    <!-- Blockquote Sizes -->
    <section>
      <H2 class="mb-4" text="Blockquote Sizes" :margin-bottom="undefined" />
      <Blockquote text="Small blockquote text" fontSize="sm" />
      <Blockquote text="Medium blockquote text - Default" fontSize="md" />
      <Blockquote text="Large blockquote text" fontSize="lg" />
      <Blockquote text="Extra large blockquote text" fontSize="xl" />
    </section>

    <!-- Code -->
    <section>
      <H2 class="mb-4" text="Code" :margin-bottom="undefined" />
      <div>
        <P text='Inline code example: <code class="px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">const example = "inline code";</code>' />
      </div>
      <div>
        <P
          text='Colored inline code: <code class="text-primary px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">primary code</code> and <code class="text-success px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">success code</code>'
        />
      </div>
      <Code text='// This is a block code example const example = { name: "VeloceVue", version: "0.19.0", type: "component library" };' />
      <Code text="// Block code with primary color function greetUser(name: string) { return `Hello, ${name}!`; }" color="primary" />
    </section>

    <!-- Code Sizes -->
    <section>
      <H2 class="mb-4" text="Code Sizes" :margin-bottom="undefined" />
      <Code text='// Small code const small = "text-sm";' fontSize="sm" />
      <Code text='// Medium code - Default const medium = "text-base";' fontSize="md" />
      <Code text='// Large code const large = "text-lg";' fontSize="lg" />
      <Code text='// Extra large code const xl = "text-xl";' fontSize="xl" />
    </section>

    <!-- Labels -->
    <section>
      <H2 class="mb-4" text="Labels" :margin-bottom="undefined" />
      <Label text="Default Label" />
      <Label text="Primary Label" color="primary" />
      <Label text="Success Label" color="success" />
      <Label text="Muted Label" color="muted" />
      <Label text="Required Label" :required="true" />
      <Label text="Error Required Label" color="error" :required="true" />
    </section>

    <!-- Label Sizes -->
    <section>
      <H2 class="mb-4" text="Label Sizes" :margin-bottom="undefined" />
      <Label text="Small Label" fontSize="sm" />
      <Label text="Medium Label - Default" fontSize="md" />
      <Label text="Large Label" fontSize="lg" />
      <Label text="Extra Large Label" fontSize="xl" />
    </section>

    <!-- Label Font Weights -->
    <section>
      <H2 class="mb-4" text="Label Font Weights" :margin-bottom="undefined" />
      <Label text="Normal Weight Label" fontWeight="normal" />
      <Label text="Medium Weight Label - Default" fontWeight="medium" />
      <Label text="Semibold Weight Label" fontWeight="semibold" />
      <Label text="Bold Weight Label" fontWeight="bold" />
    </section>

    <!-- Real World Example -->
    <section>
      <H2 class="mb-4" text="Real World Example" :margin-bottom="undefined" />
      <div class="space-y-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900">
        <H1 text="Welcome to VeloceVue" color="primary" />
        <H2 text="Getting Started" />
        <P text="VeloceVue is a modern Vue 3 component library built with TypeScript and Tailwind CSS. It provides a comprehensive set of components for building beautiful and responsive user interfaces." />
        <H3 text="Installation" />
        <P text="To get started, install the library using your preferred package manager:" />
        <Code text="pnpm add veloce" />
        <H3 text="Usage" />
        <P text="Import the components you need in your Vue components:" />
        <Code text='import { Button, Input, Modal } from "veloce/ui";' color="primary" />
        <Blockquote
          text='Tip: Make sure to import the CSS file in your main application file: <code class="text-neutral px-1.5 py-0.5 rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">import "veloce/style.css"</code>'
          color="info"
        />
        <H3 text="Features" />
        <P text="The library includes:" />
        <ul class="ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
          <li><span class="font-semibold">Consistent Design:</span> All components follow the same design system</li>
          <li><span class="font-semibold">Dark Mode:</span> Built-in dark mode support</li>
          <li><span class="font-semibold">TypeScript:</span> Full TypeScript support</li>
          <li><span class="font-semibold">Customizable:</span> Easy to customize with CSS variables</li>
        </ul>
        <div class="mt-4">
          <Label text="Email Address" :required="true" />
          <P text="We'll never share your email with anyone else." fontSize="sm" color="muted" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { H1, H2, H3, H4, H5, H6, P, Blockquote, Code, Label } from "@veloce-vue/typography";
</script>
