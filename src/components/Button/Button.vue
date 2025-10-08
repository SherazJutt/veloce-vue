<script setup lang="ts">
/**
 * A button component with a few variations.
 *
 * Structure:
 * - A single button element with a few classes based on the variant.
 * - Inside the button, a div with flexbox to position the icon and text.
 * - If loading is true, an svg spinner is shown instead of the icon.
 *
 * Props:
 * - label: The text inside the button.
 * - loading: Whether the button is in a loading state.
 * - disabled: Whether the button is disabled.
 * - variant: One of "outlined", "text", "ghost" or "solid". Default is "solid".
 * - icon: The name of an icon from Iconify. If empty, no icon is shown.
 * - iconClass: Classes to apply to the icon.
 * - iconPosition: One of "left" or "right". Default is "left".
 */
import { computed } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String as () => "outlined" | "text" | "ghost" | "solid",
    default: "solid",
  },
  iconClass: { type: String, default: "" },
  iconPosition: { type: String as () => "left" | "right", default: "right" }, // Position of the icon
  circle: { type: Boolean, default: false },
});

const buttonClasses = computed(() => {
  switch (props.variant) {
    case "outlined":
      return "border !border-primary text-primary bg-transparent hover:bg-primary hover:text-white";
    case "text":
      return "bg-transparent text-primary hover:bg-gray-200";
    case "ghost":
      return "text-primary bg-gray-100 hover:bg-gray-200";
    default:
      return "bg-primary text-white hover:bg-primary/75"; // Solid
  }
});
</script>

<template>
  <button
    type="button"
    :disabled="disabled || loading"
    :class="[buttonClasses, { 'rounded-full': circle }]"
    class="flex cursor-pointer items-center justify-center gap-2 rounded border border-transparent px-3 py-2 transition duration-200 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <div class="flex w-full items-center justify-between gap-2">
      <!-- Label -->
      <span v-if="label" :class="{ 'order-2': iconPosition === 'left' }">{{
        label
      }}</span>
    </div>
  </button>
</template>
