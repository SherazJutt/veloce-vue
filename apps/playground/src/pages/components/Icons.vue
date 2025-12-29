<template>
  <div>
    <div class="mb-6">
      <div class="relative [&_input]:pr-10">
        <Input v-model="searchTerm" :leading-icon="Search" placeholder="Search icons..." />
        <button v-if="searchTerm" class="text-muted-foreground hover:text-foreground absolute top-[17px] right-3 z-10 -translate-y-1/2" @click="clearSearch">
          <Icon icon="X" class="size-4" />
        </button>
      </div>
    </div>
    <div class="flex flex-wrap gap-4">
      <div v-for="icon in filteredIcons" :key="icon" class="hover:border-border hover:bg-muted/50 flex cursor-pointer flex-col items-center gap-1 rounded border border-transparent p-2 transition-colors" @click="copyIconName(icon)">
        <Icon :icon="icon as IconName" class="size-8" />
        <h5 class="text-muted text-sm">{{ icon }}</h5>
      </div>
    </div>
    <h4 class="mt-6 border-t py-3 text-center">{{ filteredIcons.length }} of {{ iconsList.length }} icons</h4>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Icon, Search, type IconName } from "@veloce-vue/icons";
import { Input } from "@veloce-vue/ui";
import { IconsList } from "@veloce-vue/icons";
import { useToast } from "@veloce-vue/toast";

const toast = useToast();

const searchTerm = ref("");
const iconsList = IconsList();
const filteredIcons = computed(() => {
  if (!searchTerm.value.trim()) {
    return iconsList;
  }
  const term = searchTerm.value.toLowerCase().trim();
  return iconsList.filter((icon) => icon.toLowerCase().includes(term));
});

const clearSearch = () => {
  searchTerm.value = "";
};

const copyIconName = async (iconName: string) => {
  try {
    await navigator.clipboard.writeText(iconName);
    toast.success(`${iconName} icon copied to clipboard!`);
  } catch (err) {
    toast.error(`Failed to copy ${iconName} icon!`);
  }
};
</script>
