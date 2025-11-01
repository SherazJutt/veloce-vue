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
        <h1 class="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2">Button Component</h1>
        <p class="text-lg text-slate-600 dark:text-slate-400">
          Interactive buttons with multiple variants, sizes, and states
        </p>
      </div>

      <!-- Variants Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Button Variants</h2>
          <div class="space-y-6">
            <div v-for="variantDemo in variantDemos" :key="variantDemo.variant">
              <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
                {{ variantDemo.label }}
              </h3>
              <div class="flex flex-wrap gap-4">
                <Button :variant="variantDemo.variant">
                  {{ variantDemo.text }}
                </Button>
                <Button :variant="variantDemo.variant" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Button Sizes</h2>
          <div class="flex flex-wrap items-center gap-4">
            <Button v-for="sizeDemo in sizeDemos" :key="sizeDemo.size" :size="sizeDemo.size">
              {{ sizeDemo.label }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Icon Buttons Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Icon Sizes</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Icon Buttons</h3>
              <div class="flex flex-wrap items-center gap-4">
                <Button v-for="iconSize in iconSizes" :key="iconSize.size" :size="iconSize.size" variant="outline">
                  <svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- With Icons Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Buttons with Icons</h2>
          <div class="flex flex-wrap gap-4">
            <Button v-for="iconButton in iconButtonDemos" :key="iconButton.text" :variant="iconButton.variant">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconButton.iconPath" />
              </svg>
              {{ iconButton.text }}
            </Button>
          </div>
        </div>
      </section>

      <!-- Interactive Demo Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Interactive Demo</h2>
          <div class="space-y-6">
            <div>
              <Button @click="handleClick" variant="default">
                Click Me! (Clicked: {{ clickCount }})
              </Button>
            </div>
            <div>
              <Button @click="handleAsyncAction" :disabled="isLoading" variant="default">
                {{ isLoading ? 'Loading...' : 'Async Action' }}
              </Button>
            </div>
            <div v-if="actionMessage" class="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p class="text-blue-900 dark:text-blue-100">{{ actionMessage }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="mb-12">
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-8 border border-slate-200 dark:border-slate-700">
          <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Common Use Cases</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="useCase in useCases" :key="useCase.title" class="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
              <h3 class="font-semibold text-slate-900 dark:text-slate-50 mb-3">{{ useCase.title }}</h3>
              <div class="flex flex-wrap gap-2">
                <Button 
                  v-for="button in useCase.buttons" 
                  :key="button.text" 
                  :variant="button.variant"
                  :size="button.size"
                >
                  {{ button.text }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Button } from '@ui/button';

const clickCount = ref(0);
const isLoading = ref(false);
const actionMessage = ref('');

const variantDemos = computed(() => [
  { variant: 'default' as const, label: 'Default', text: 'Default Button' },
  { variant: 'destructive' as const, label: 'Destructive', text: 'Delete' },
  { variant: 'outline' as const, label: 'Outline', text: 'Outline Button' },
  { variant: 'secondary' as const, label: 'Secondary', text: 'Secondary' },
  { variant: 'ghost' as const, label: 'Ghost', text: 'Ghost Button' },
  { variant: 'link' as const, label: 'Link', text: 'Link Button' }
]);

const sizeDemos = computed(() => [
  { size: 'sm' as const, label: 'Small' },
  { size: 'default' as const, label: 'Default' },
  { size: 'lg' as const, label: 'Large' }
]);

const iconSizes = computed(() => [
  { size: 'icon-sm' as const },
  { size: 'icon' as const },
  { size: 'icon-lg' as const }
]);

const iconButtonDemos = computed(() => [
  {
    text: 'Download',
    variant: 'default' as const,
    iconPath: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
  },
  {
    text: 'Save',
    variant: 'secondary' as const,
    iconPath: 'M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
  },
  {
    text: 'Send Email',
    variant: 'outline' as const,
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  }
]);

const useCases = computed(() => [
  {
    title: 'Form Actions',
    buttons: [
      { text: 'Submit', variant: 'default' as const, size: 'default' as const },
      { text: 'Cancel', variant: 'ghost' as const, size: 'default' as const }
    ]
  },
  {
    title: 'Danger Zone',
    buttons: [
      { text: 'Delete Account', variant: 'destructive' as const, size: 'default' as const },
      { text: 'Keep Account', variant: 'outline' as const, size: 'default' as const }
    ]
  },
  {
    title: 'Navigation',
    buttons: [
      { text: 'Previous', variant: 'outline' as const, size: 'sm' as const },
      { text: 'Next', variant: 'default' as const, size: 'sm' as const }
    ]
  },
  {
    title: 'Call to Action',
    buttons: [
      { text: 'Get Started', variant: 'default' as const, size: 'lg' as const },
      { text: 'Learn More', variant: 'link' as const, size: 'lg' as const }
    ]
  }
]);

const handleClick = () => {
  clickCount.value++;
  actionMessage.value = `Button clicked ${clickCount.value} times!`;
  setTimeout(() => {
    actionMessage.value = '';
  }, 3000);
};

const handleAsyncAction = async () => {
  isLoading.value = true;
  actionMessage.value = 'Processing your request...';
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  isLoading.value = false;
  actionMessage.value = 'Action completed successfully!';
  
  setTimeout(() => {
    actionMessage.value = '';
  }, 3000);
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>

