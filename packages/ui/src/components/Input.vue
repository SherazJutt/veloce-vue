<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";
import { useRandomId } from "@veloce/utils";
import { Icon, type Icons } from "@veloce/icons";
import { type Size } from "@veloce/types";

const id = useRandomId();

const props = defineProps({
  leadingIcon: { type: String as () => Icons, default: "" },
  trailingIcon: { type: String as () => Icons, default: "" },
  placeholder: { type: String, default: "" },
  helpText: { type: String, default: "" },
  type: { type: String as () => "text" | "password", default: "text" },
  labelStyle: { type: String as () => "float" | "static", default: "static" },
  label: { type: String, default: "" },
  size: { type: String as () => Size, default: "md" },
});

const model = defineModel();

const isPasswordVisible = ref(false);
const isFocused = ref(false);

const togglePasswordVisibility = () => (isPasswordVisible.value = !isPasswordVisible.value);

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return { container: "h-[30px]", input: "px-2 py-1 text-sm", icon: "size-4", text: "text-sm", floatLabel: { focus: "text-xs", base: "text-sm" } };
    case "md":
      return { container: "h-[34px]", input: "px-2.5 py-1.5 text-sm", icon: "size-5", text: "text-sm", floatLabel: { focus: "text-xs", base: "text-sm" } };
    case "lg":
      return { container: "h-[42px]", input: "px-3 py-2 text-base", icon: "size-5", text: "text-base", floatLabel: { focus: "text-sm", base: "text-base" } };
    case "xl":
      return { container: "h-[50px]", input: "px-3.5 py-2.5 text-lg", icon: "size-6", text: "text-lg", floatLabel: { focus: "text-sm", base: "text-lg" } };
  }
});
</script>
<template>
  <div>
    <!-- static label -->
    <div v-if="labelStyle === 'static'" class="mb-2 pl-0.5">
      <label class="text-sm font-medium duration-100" :for="id">{{ label }}</label>
    </div>

    <div :class="[{ 'mb-6': helpText }, sizeClasses.container]" class="relative">
      <!-- leading icon -->
      <Icon v-if="leadingIcon" :icon="leadingIcon" :class="sizeClasses.icon" class="text-muted absolute left-3 top-1/2 -translate-y-1/2" />
      <!-- trailing icon -->
      <Icon v-if="trailingIcon" :icon="trailingIcon" :class="sizeClasses.icon" class="text-muted absolute right-3 top-1/2 -translate-y-1/2" />

      <!-- input -->
      <input
        :type="type === 'password' && isPasswordVisible ? 'text' : type"
        v-model="model"
        :class="[
          sizeClasses.input,
          sizeClasses.text,
          { 'pr-12': props.type === 'password' },
          { 'pl-10': leadingIcon && props.size === 'md' },
          { 'pl-9': leadingIcon && props.size === 'sm' },
          { 'pl-11': leadingIcon && props.size === 'lg' },
          { 'pl-12': leadingIcon && props.size === 'xl' },
          { 'pr-10': trailingIcon && props.type !== 'password' && props.size === 'md' },
          { 'pr-9': trailingIcon && props.type !== 'password' && props.size === 'sm' },
          { 'pr-11': trailingIcon && props.type !== 'password' && props.size === 'lg' },
          { 'pr-12': trailingIcon && props.type !== 'password' && props.size === 'xl' },
        ]"
        class="outline-primary dark:placeholder:text-muted focus:border-primary/75 peer h-full w-full rounded border outline-none duration-200"
        :id="id"
        :placeholder="labelStyle === 'float' ? ' ' : placeholder"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <!-- floating label -->
      <div
        v-if="labelStyle === 'float'"
        :class="[model || isFocused ? `-top-1.5 px-0.5 ${sizeClasses.floatLabel.focus}` : `bottom-0 top-0 my-auto ${sizeClasses.floatLabel.base}`]"
        class="bg-background dark:text-muted absolute left-2.5 h-fit rounded leading-none text-neutral-400 duration-100"
      >
        {{ placeholder }}
      </div>

      <!-- password toggle -->
      <div v-if="type === 'password'" class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="togglePasswordVisibility">
        <Icon :icon="isPasswordVisible ? 'eye-off' : 'eye'" :class="sizeClasses.icon" class="text-muted" />
      </div>
    </div>

    <!-- help text -->
    <div v-if="helpText" class="text-muted ml-1 pt-1 text-xs">{{ helpText }}</div>
  </div>
</template>
