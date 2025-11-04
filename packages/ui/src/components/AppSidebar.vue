<script setup lang="ts">
import { Calendar, Home, Inbox, Search, Settings } from "lucide-vue-next";
import { SidebarRoot, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/ui/sidebar";
import { SidebarMenuBadge } from "@/ui/sidebar";
import SidebarMenuSub from "@/ui/sidebar/SidebarMenuSub.vue";
import SidebarMenuSubItem from "@/ui/sidebar/SidebarMenuSubItem.vue";
import SidebarMenuSubButton from "@/ui/sidebar/SidebarMenuSubButton.vue";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
</script>

<template>
  <SidebarRoot>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Click me</SidebarMenuButton>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton />
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton />
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <!-- buttons -->
      <SidebarMenuItem>
        <SidebarMenuButton>Click me</SidebarMenuButton>
        <SidebarMenuBadge>24</SidebarMenuBadge>
      </SidebarMenuItem>
    </SidebarContent>
  </SidebarRoot>
</template>

<!-- <script setup lang="ts">
import { SidebarRoot, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "@/ui/sidebar";
</script>

<template>
  <SidebarRoot>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </SidebarRoot>
</template> -->
