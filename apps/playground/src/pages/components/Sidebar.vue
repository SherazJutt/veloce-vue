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

<!-- <template>
  <div>ouoiu</div>
  <AppSidebar />
</template>
<script setup lang="ts">
import { AppSidebar } from "@veloce/ui";
</script> -->
