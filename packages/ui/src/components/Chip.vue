<script setup lang="ts">
import { computed, type Component } from 'vue';
import { Icon, Close } from '../exports/icons';
import { type Severity, type Size } from '../exports/types';

const props = defineProps({
  label: { type: String, default: '' },
  icon: { type: Object as () => Component, default: () => null },
  removable: { type: Boolean, default: false },
  severity: { type: String as () => Severity, default: 'primary' },
  size: { type: String as () => Size, default: 'md' },
  rounded: { type: Boolean, default: false },
});

const emit = defineEmits<{
  remove: [];
}>();

const severityClasses = {
  primary: 'bg-primary text-inverted',
  secondary: 'bg-secondary text-inverted',
  success: 'bg-success text-inverted',
  info: 'bg-info text-inverted',
  warning: 'bg-warning text-inverted',
  error: 'bg-error text-inverted',
  neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200',
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
  lg: 'px-3 py-1.5 text-base',
  xl: 'px-4 py-2 text-lg',
};

const classes = computed(() => {
  return [severityClasses[props.severity] || severityClasses.primary, sizeClasses[props.size] || sizeClasses.md, { 'rounded-full': props.rounded }];
});

const handleRemove = () => {
  emit('remove');
};
</script>

<template>
  <div :class="classes" class="inline-flex items-center gap-1.5 rounded font-medium">
    <Icon v-if="props.icon" :icon="props.icon" class="size-4" />
    <span v-if="props.label || $slots.default">
      <slot>{{ props.label }}</slot>
    </span>
    <button type="button" v-if="props.removable" class="ml-0.5 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10" @click="handleRemove">
      <Icon :icon="Close" class="size-3.5" />
    </button>
  </div>
</template>
