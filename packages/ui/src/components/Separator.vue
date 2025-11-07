<template>
  <div :class="containerClasses" :style="containerStyle">
    <div :class="[props.direction === 'horizontal' ? 'w-full' : 'h-full', sizeClasses.border, colorClass, borderTypeClass, 'relative']">
      <template v-if="props.direction === 'horizontal' && (props.icon || props.label)">
        <span :class="[props.label ? 'px-2 py-1' : 'p-1', { border: props.bordered }, props.rounded ? 'rounded-full' : 'rounded', 'bg-background absolute inset-0 m-auto flex h-fit w-fit shrink-0 items-center justify-center gap-1.5']">
          <slot name="content">
            <Icon v-if="props.icon" :icon="props.icon" class="size-4 shrink-0" />
            <span v-if="props.label" class="text-sm">{{ props.label }}</span>
          </slot>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon, type Icons } from "@veloce/icons";
import { type Direction, type Severity, type Size } from "@veloce/types";
import { computed } from "vue";

type SeparatorType = "solid" | "dashed" | "dotted";

const props = defineProps({
  direction: { type: String as () => Direction, default: "vertical" as Direction },
  severity: { type: String as () => Severity, default: "primary" as Severity },
  type: { type: String as () => SeparatorType, default: "solid" as SeparatorType },
  size: { type: String as () => Size, default: "md" as Size },
  label: { type: String, default: "" },
  icon: { type: String as () => Icons, default: "" },
  bordered: { type: Boolean, default: false },
  rounded: { type: Boolean, default: false },
  height: {
    type: String,
    default: "",
    validator: (value: string) => {
      const isValid = value === "" || value === "auto" || /^-?\d+(\.\d+)?(px|rem|em)$/.test(value);
      if (!isValid) {
        console.warn(`[Separator] Invalid "height" prop. Expected "auto" or a number with unit (e.g. "8px", "1rem"). Received: ${value}`);
      }
      return true;
    },
  },
});

const colorClass = computed<string>(() => {
  const colors: Record<Severity, string> = {
    primary: "border-primary",
    secondary: "border-secondary",
    success: "border-success",
    info: "border-info",
    warning: "border-warning",
    error: "border-error",
    neutral: "border-border",
  };
  return colors[props.severity];
});

const borderTypeClass = computed<string>(() => {
  const borderTypes: Record<SeparatorType, string> = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };
  return borderTypes[props.type];
});

const sizeClasses = computed<{ border: string; cross: string }>(() => {
  const map: Record<Direction, Record<Size, string>> = {
    horizontal: { sm: "border-t-[1px]", md: "border-t-[2px]", lg: "border-t-[4px]", xl: "border-t-[6px]" },
    vertical: { sm: "border-s-[1px]", md: "border-s-[2px]", lg: "border-s-[4px]", xl: "border-s-[6px]" },
  };

  const cross = props.direction === "horizontal" ? "h-px" : "w-px";

  return { border: map[props.direction][props.size], cross };
});

const containerClasses = computed<string[]>(() => {
  const classes: string[] = [];

  if (props.direction === "horizontal") classes.push("w-full", "py-4");
  if (props.direction === "vertical" && (props.height === "auto" || props.height === "")) classes.push("h-full");

  return classes;
});

const containerStyle = computed<Record<string, string> | undefined>(() => {
  if (props.height && props.height !== "auto") return { height: props.height };
  return undefined;
});
</script>
