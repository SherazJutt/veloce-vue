<script setup lang="ts">
import type { ButtonProps, ButtonEmits } from "./Button.types";

const props = withDefaults(defineProps<ButtonProps>(), {
  color: "primary",
  size: "md",
});

const emit = defineEmits<ButtonEmits>();
</script>

<template>
  <button
    class="ui-button"
    :class="[props.color, props.size]"
    :disabled="props.disabled"
    @click="emit('click', $event)"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>
.ui-button {
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
