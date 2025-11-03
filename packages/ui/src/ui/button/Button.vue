<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import type { ButtonVariants } from ".";
import { Primitive } from "reka-ui";
import { cn } from "@veloce/lib";
import { buttonVariants } from ".";
import { Icon, type Icons } from "@veloce/icons";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  loading?: boolean;
  icon?: Icons;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive :disabled="props.disabled || props.loading" :class="cn(buttonVariants({ variant, size }), props.class)" data-slot="button" :as="as" :as-child="asChild">
    <slot />
    <Icon v-if="props.icon && !props.loading" :icon="props.icon" class="size-5 text-current duration-200" />
    <Icon v-if="props.loading" icon="loading" class="size-5 text-current duration-200" />
  </Primitive>
</template>
