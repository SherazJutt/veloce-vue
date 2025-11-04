<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/ui/sidebar";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>
