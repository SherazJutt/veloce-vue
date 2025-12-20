<template>
  <div class="flex items-center gap-2">
    <input type="checkbox" :disabled="props.disabled" v-model="model" :class="[sizeClasses, severityClasses]" class="peer relative cursor-pointer appearance-none rounded-full transition-all duration-200 after:absolute after:rounded-full after:bg-white after:shadow-sm after:transition-all focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import type { Severity, Size } from '../exports/types';

const props = defineProps({
  severity: { type: String as () => Severity, default: 'primary' as Severity },
  disabled: { type: Boolean, default: false },
  size: { type: String as () => Size, default: 'md' as Size },
});

const model = defineModel<boolean>({ default: false });

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-4 w-7 after:h-3 after:w-3 after:left-0.5 after:top-0.5 checked:after:left-3.5';
    case 'md':
      return 'h-6 w-11 after:h-5 after:w-5 after:left-0.5 after:top-0.5 checked:after:left-5.5';
    case 'lg':
      return 'h-7 w-14 after:h-6 after:w-6 after:left-0.5 after:top-0.5 checked:after:left-7.5';
    case 'xl':
      return 'h-8 w-16 after:h-7 after:w-7 after:left-0.5 after:top-0.5 checked:after:left-8.5';
  }
});

const severityClasses = computed(() => {
  const baseClasses = 'bg-neutral-200';
  const checkedClasses = {
    primary: 'checked:bg-primary',
    secondary: 'checked:bg-secondary',
    success: 'checked:bg-success',
    info: 'checked:bg-info',
    warning: 'checked:bg-warning',
    error: 'checked:bg-error',
    neutral: 'checked:bg-neutral-400',
  };
  return `${baseClasses} ${checkedClasses[props.severity]}`;
});
</script>
