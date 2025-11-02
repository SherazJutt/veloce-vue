<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <router-link 
          to="/" 
          class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </router-link>
        <h1 class="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">Accordion Component</h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          Expandable sections for organizing content in a collapsible format
        </p>
      </div>

      <!-- Basic Accordion Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Basic Accordion</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Single item open at a time (default behavior)
          </p>
          <Accordion :items="basicItems" />
        </div>
      </section>

      <!-- Accordion with Border Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Bordered Accordion</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Accordion with border styling
          </p>
          <Accordion :items="basicItems" border />
        </div>
      </section>

      <!-- Multiple Open Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Multiple Items Open</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Allow multiple accordion items to be open simultaneously
          </p>
          <Accordion :items="multipleItems" allow-multiple border />
        </div>
      </section>

      <!-- Default Open Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Default Open State</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            First item opens by default
          </p>
          <Accordion :items="basicItems" default-open border />
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">FAQ Example</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Common use case: Frequently Asked Questions
          </p>
          <Accordion :items="faqItems" border />
        </div>
      </section>

      <!-- Product Features Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Product Features</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Use case: Product feature descriptions
          </p>
          <Accordion :items="productFeatures" border />
        </div>
      </section>

      <!-- Documentation Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Documentation Steps</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Use case: Step-by-step guides
          </p>
          <Accordion :items="documentationSteps" allow-multiple border />
        </div>
      </section>

      <!-- Settings Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Settings Panel</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Use case: Application settings organization
          </p>
          <Accordion :items="settingsItems" border />
        </div>
      </section>

      <!-- Large Content Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Long Content Example</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-4">
            Accordion handling longer content sections
          </p>
          <Accordion :items="longContentItems" border />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Accordion } from '@ui/accordion';

const basicItems = computed(() => [
  {
    value: 'item-1',
    title: 'What is Vue.js?',
    content: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable.'
  },
  {
    value: 'item-2',
    title: 'What are Vue components?',
    content: 'Components are reusable Vue instances with a name. They accept the same options as the root Vue instance and can be used throughout your application.'
  },
  {
    value: 'item-3',
    title: 'What is the Virtual DOM?',
    content: 'The Virtual DOM is a lightweight copy of the actual DOM. Vue uses it to optimize rendering by calculating the minimal set of changes needed to update the real DOM.'
  }
]);

const multipleItems = computed(() => [
  {
    value: 'multi-1',
    title: 'Section One',
    content: 'This is the content for section one. You can open multiple sections at once!'
  },
  {
    value: 'multi-2',
    title: 'Section Two',
    content: 'This is the content for section two. Try opening both sections simultaneously.'
  },
  {
    value: 'multi-3',
    title: 'Section Three',
    content: 'This is the content for section three. All sections can be open at the same time.'
  }
]);

const faqItems = computed(() => [
  {
    value: 'faq-1',
    title: 'How do I get started?',
    content: 'Getting started is easy! Simply install the package via npm or yarn, import the components you need, and start building. Check our documentation for detailed setup instructions.'
  },
  {
    value: 'faq-2',
    title: 'Is it free to use?',
    content: 'Yes, this component library is completely free and open-source. You can use it in both personal and commercial projects without any restrictions.'
  },
  {
    value: 'faq-3',
    title: 'Can I customize the styles?',
    content: 'Absolutely! All components are fully customizable. You can override the default styles using CSS classes or modify the theme configuration to match your brand.'
  },
  {
    value: 'faq-4',
    title: 'What browsers are supported?',
    content: 'We support all modern browsers including Chrome, Firefox, Safari, and Edge. For older browsers, you may need to include appropriate polyfills.'
  },
  {
    value: 'faq-5',
    title: 'How do I report bugs?',
    content: 'If you find a bug, please open an issue on our GitHub repository with a detailed description and steps to reproduce. We appreciate your help in improving the library!'
  }
]);

const productFeatures = computed(() => [
  {
    value: 'feature-1',
    title: '🚀 Lightning Fast Performance',
    content: 'Built with performance in mind, our components are optimized for speed and efficiency. Enjoy smooth animations and instant responsiveness even with complex UIs.'
  },
  {
    value: 'feature-2',
    title: '🎨 Fully Customizable Design',
    content: 'Every aspect of the design can be customized to match your brand. Use our theming system to create a consistent look across your entire application.'
  },
  {
    value: 'feature-3',
    title: '♿ Accessibility First',
    content: 'We prioritize accessibility in all our components. Built following WCAG guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.'
  },
  {
    value: 'feature-4',
    title: '📱 Responsive by Default',
    content: 'All components work seamlessly across devices. From mobile phones to large desktop screens, your UI will look great everywhere.'
  }
]);

const documentationSteps = computed(() => [
  {
    value: 'step-1',
    title: 'Step 1: Installation',
    content: 'Run npm install @veloce/vue or yarn add @veloce/vue in your project directory to install the component library.'
  },
  {
    value: 'step-2',
    title: 'Step 2: Import Components',
    content: 'Import the components you need in your Vue files: import { Accordion, Button } from "@veloce/vue"'
  },
  {
    value: 'step-3',
    title: 'Step 3: Use Components',
    content: 'Add the components to your template and pass the required props. Check the API documentation for available props and events.'
  },
  {
    value: 'step-4',
    title: 'Step 4: Customize Styles',
    content: 'Override default styles using CSS classes or configure the theme in your configuration file to match your design system.'
  },
  {
    value: 'step-5',
    title: 'Step 5: Build and Deploy',
    content: 'Run your build process as usual. The components are tree-shakeable, so only the code you use will be included in your final bundle.'
  }
]);

const settingsItems = computed(() => [
  {
    value: 'settings-1',
    title: 'Account Settings',
    content: 'Manage your account information, including email address, password, and profile details. You can update these settings at any time.'
  },
  {
    value: 'settings-2',
    title: 'Privacy Settings',
    content: 'Control who can see your information and how your data is used. Configure privacy preferences for your profile and activity.'
  },
  {
    value: 'settings-3',
    title: 'Notification Preferences',
    content: 'Choose which notifications you want to receive and how you want to receive them. Configure email, push, and in-app notifications.'
  },
  {
    value: 'settings-4',
    title: 'Display Settings',
    content: 'Customize the appearance of the application. Choose between light and dark themes, adjust font sizes, and configure layout preferences.'
  }
]);

const longContentItems = computed(() => [
  {
    value: 'long-1',
    title: 'Understanding Component Architecture',
    content: `Component-based architecture is a fundamental concept in modern web development. It allows developers to break down complex user interfaces into smaller, reusable pieces. Each component encapsulates its own logic, styling, and template, making it easier to maintain and test. This approach promotes code reusability and helps teams work more efficiently on large-scale applications. By composing smaller components together, you can build sophisticated user interfaces while keeping your codebase organized and maintainable.`
  },
  {
    value: 'long-2',
    title: 'Best Practices for Vue Development',
    content: `When developing with Vue, it's important to follow established best practices to ensure your application is maintainable, performant, and scalable. Always use the Composition API for new projects as it provides better TypeScript support and more flexible code organization. Keep your components small and focused on a single responsibility. Use props for parent-to-child communication and events for child-to-parent communication. Implement proper error handling and loading states. Optimize your bundle size by lazy-loading routes and components. Use computed properties for derived state and watchers sparingly. Always validate props and provide default values when appropriate.`
  },
  {
    value: 'long-3',
    title: 'Performance Optimization Techniques',
    content: `Optimizing the performance of your Vue application is crucial for providing a great user experience. Start by using the production build of Vue in your deployed applications. Implement code splitting to reduce initial load times. Use lazy loading for routes and components that aren't immediately needed. Optimize your images and assets by compressing them and using appropriate formats. Implement virtual scrolling for long lists. Use the v-once directive for static content that doesn't need to be reactive. Avoid unnecessary re-renders by using computed properties and memoization. Monitor your application's performance using browser dev tools and profiling tools.`
  }
]);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>

