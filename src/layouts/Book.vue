<template>
  <div class="h-screen w-full">
    <div class="flex h-12 items-center gap-6 border-b border-gray-300 bg-gray-100 px-4">
      <Button icon="check" class="!p-0" @click="showSidebar = !showSidebar" />
      <h3>Navbar</h3>
    </div>
    <div class="flex h-[calc(100%-48px)]">
      <!-- sidebar -->
      <div :class="showSidebar ? 'w-[240px]' : 'w-0'" class="h-full shrink-0 overflow-hidden border-r border-gray-300 duration-200">
        <div class="p-2">
          <template v-for="component in components" :key="component.name">
            <h3 :class="{ '!bg-blue-500 !text-white': selectedComponent?.id === component.id }" class="cursor-pointer rounded-md bg-gray-100 p-2 duration-200 hover:bg-gray-200" @click="setComponent(component)">{{ component.name }}</h3>
            <div v-if="selectedComponent?.id === component.id" class="space-y-1 p-2">
              <div v-for="story in component.stories" :key="story.name" :class="{ '!bg-blue-500 !text-white': selectedStory?.id === story.id }" class="rounded-md bg-gray-50 px-2 py-1 duration-200 hover:bg-gray-100">
                <h4 class="cursor-pointer text-sm" @click="setStory(story)">{{ story.name }}</h4>
                <!-- <pre>{{ storyStory.args }}</pre> -->
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="h-full w-full p-2">
        <pre>{{ selectedStory }}</pre>
        <pre>{{ selectedComponent }}</pre>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/button/Index.vue";
import { useBook } from "@/composables/useBook";

const { components, selectedComponent, setComponent, selectedStory, setStory } = useBook();

console.log(components.value);

const showSidebar = ref<boolean>(true);
</script>
