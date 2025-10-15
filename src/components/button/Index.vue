<script setup lang="ts">
import { computed } from "vue";
import Icon from "../icon/index.vue";
import { icons } from "../icon";

const props = defineProps({
  label: { type: String, default: "" },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  variant: {
    type: String as () => "outlined" | "text" | "ghost" | "solid",
    default: "solid",
    options: ["outlined", "text", "ghost", "solid"],
  },
  icon: { type: String, default: "", options: icons },
  iconClass: { type: String, default: "" },
  iconPosition: {
    type: String as () => "left" | "right",
    default: "right",
    options: ["left", "right"],
  },
  rounded: { type: Boolean, default: false },
});

const classes = computed(() => {
  switch (props.variant) {
    case "outlined":
      return "!border-primary text-primary bg-transparent hover:bg-primary disabled:hover:bg-transparent disabled:hover:text-primary hover:text-white";
    case "text":
      return "bg-transparent text-primary hover:bg-gray-200 disabled:hover:bg-transparent disabled:hover:text-primary";
    case "ghost":
      return "text-primary bg-gray-100 hover:bg-gray-200 disabled:hover:bg-transparent disabled:hover:text-primary";
    default:
      return "bg-primary text-white hover:bg-primary/75 disabled:hover:bg-primary disabled:hover:text-white"; // solid
  }
});
</script>

<template>
  <!-- prettier-ignore -->
  <button 
    type="button" 
    :disabled="props.disabled || props.loading" 
    :class="[
      classes, { 'rounded-full': props.rounded }, 
      'flex cursor-pointer items-center justify-center gap-2 rounded border border-transparent px-3 py-2 transition duration-200 disabled:cursor-not-allowed disabled:opacity-75 '
    ]"
  >
    <div :class="{ 'justify-center': !props.icon }" class="flex w-full items-center justify-between gap-2">
      <span v-if="props.label" :class="{ 'order-2': props.iconPosition === 'left' }"> {{ props.label }} </span>
      <Icon v-if="props.icon && !props.loading" :icon="props.icon" :class="props.iconClass" class="duration-200" />
    </div>

    <Icon v-if="props.loading" icon="loading" />
  </button>
</template>
