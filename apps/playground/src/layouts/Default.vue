<template>
  <Layout>
    <!-- sidebar -->
    <template #sidebar="{ onClose }">
      <Sidebar :close-on-click="isMobile" @close="onClose" />
    </template>
    <template #header-actions>
      <Button :icon="isDark ? 'sun' : 'moon'" class="p-1!" variant="ghost" @click="toggleDark" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { Button, Layout } from "@veloce/ui";
import Sidebar from "@/components/Sidebar.vue";

import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { useColorMode } from "@veloce/composables";

const { isDark, toggleDark } = useColorMode();
const { width } = useWindowSize();
const isMobile = computed(() => width.value <= 992);
</script>
