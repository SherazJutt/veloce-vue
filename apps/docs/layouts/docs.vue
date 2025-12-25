<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <DocsAsideLeftTop />
            <DocsAsideLeftBody />
          </UPageAside>
        </template>
        <slot />
      </UPage>
    </UContainer>
  </UMain>
  <ToastContainer position="bottom-right" :max-toasts="5" />
</template>

<script setup lang="ts">
import { ToastContainer } from "veloce-vue/toast";
</script>
