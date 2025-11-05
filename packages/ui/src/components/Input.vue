<script setup lang="ts">
import { useRandomId } from "@veloce/utils";
import { Icon, type Icons } from "@veloce/icons";
import { ref } from "vue";

const id = useRandomId();

const props = defineProps({
  leadingIcon: { type: String as () => Icons, default: "" },
  trailingIcon: { type: String as () => Icons, default: "" },
  placeholder: { type: String, default: "" },
  helpText: { type: String, default: "" },
  type: { type: String as () => "text" | "password", default: "text" },
  labelStyle: { type: String as () => "float" | "static", default: "static" },
  label: { type: String, default: "" },
});

const model = defineModel();

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>
<template>
  <div>
    <!-- static label -->
    <div v-if="labelStyle === 'static'" class="mb-2 pl-0.5">
      <label class="text-sm font-medium duration-100" :for="id">{{ label }}</label>
    </div>

    <div :class="{ 'mb-6': helpText }" class="relative h-[38px]">
      <!-- leading icon -->
      <Icon v-if="leadingIcon" :icon="leadingIcon" class="text-muted absolute left-3 top-1/2 size-5 -translate-y-1/2" />
      <!-- trailing icon -->
      <Icon v-if="trailingIcon" :icon="trailingIcon" class="text-muted absolute right-3 top-1/2 size-5 -translate-y-1/2" />

      <!-- input -->
      <!-- prettier-ignore -->
      <input 
        :type="type === 'password' && isPasswordVisible ? 'text' : type"
        v-model="model"
        class="outline-primary dark:placeholder:text-muted focus:border-primary/75 peer h-full w-full rounded border px-3 pb-0.5 outline-none duration-200 placeholder:text-sm"
        :id="id"
        :placeholder="labelStyle === 'float' ? ' ' : placeholder"
        :class="[{ 'pr-12' : props.type === 'password'}, { 'pl-10' : leadingIcon }, { 'pr-10' : trailingIcon }]"
       />
      <!-- password toggle -->
      <div v-if="type === 'password'" class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" @click="togglePasswordVisibility">
        <Icon :icon="isPasswordVisible ? 'eye-off' : 'eye'" class="text-muted size-5" />
      </div>
      <!-- floating label -->
      <div v-if="labelStyle === 'float'" :class="model ? 'text-xs! -top-2' : 'top-[9px]'" class="bg-background dark:text-muted pointer-events-none absolute left-3 px-0.5 text-sm text-neutral-400 duration-100 peer-focus:-top-2 peer-focus:text-xs">{{ placeholder }}</div>
    </div>

    <!-- help text -->
    <div v-if="helpText" class="text-muted ml-1 pt-1 text-xs">{{ helpText }}</div>
  </div>
</template>
