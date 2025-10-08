<template>
  <button :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    label: string;
    primary?: boolean;
  }>(),
  { primary: false }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const classes = computed(() => ({
  button: true,
  "button-primary": props.primary,
  "button-secondary": !props.primary,
}));

const onClick = () => emit("click");
</script>

<style>
.button {
  padding: 6px 12px;
}
.button-primary {
  background: blue;
  color: white;
}
.button-secondary {
  background: gray;
  color: white;
}
</style>
