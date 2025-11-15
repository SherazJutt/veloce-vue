<template>
  <!-- sidebar -->
  <div class="h-full shrink-0 overflow-auto">
    <div class="space-y-1 p-2">
      <template v-for="component in components" :key="component.name">
        <router-link class="block" :to="{ name: component.pathName }" v-slot="{ isActive }" @click="handleItemClick">
          <Button
            :class="{ 'text-neutral-500!': !isActive }"
            class="hover:bg-primary-light! w-full justify-start dark:text-neutral-400"
            font-weight="normal"
            :severity="isActive ? 'primary' : 'neutral'"
            size="sm"
            :label="component.name"
            :variant="isActive ? 'soft' : 'ghost'"
          />
        </router-link>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@veloce-vue/ui";
import { global } from "@store/global";

const emit = defineEmits<{ close: [] }>();
const props = defineProps({
  closeOnClick: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
});

const { components } = global();

const handleItemClick = () => {
  if (props.closeOnClick) {
    emit("close");
  }
};
</script>
