<script setup lang="ts">
import { ref, useTemplateRef, computed } from "vue";
import Button from "../components/button/Index.vue";
import useBook from "@/composables/useBook";
import { useElementSize } from "@vueuse/core";
import Controls from "../components/book/Controls.vue";

const { components, selectedComponent, setComponent, selectedStory, setStory } = useBook();
console.log(components.value);

const showSidebar = ref<boolean>(true);
const controlsPanel = useTemplateRef("controlsPanel");

const { height } = useElementSize(controlsPanel);

const getBottomPadding = computed(() => {
  if (selectedStory.value?.showControls) {
    return height.value + 18 + "px";
  }

  return 0;
});

const getPropsTypes = (props: Record<string, any>) => {
  const defaultProps = Object.entries(props)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => ({ key, type: typeof value }));

  console.log(defaultProps);

  return defaultProps || [];
};
</script>
<template>
  <div class="h-screen w-full">
    <div class="flex h-12 items-center gap-6 border-b border-gray-200 bg-gray-100 px-4">
      <Button icon="check" class="!p-0" @click="showSidebar = !showSidebar" />
      <h3>Navbar</h3>
    </div>
    <div class="flex h-[calc(100%-48px)]">
      <!-- sidebar -->
      <div :class="showSidebar ? 'w-[240px]' : 'w-0'" class="h-full shrink-0 overflow-hidden border-r border-gray-200 duration-200">
        <div class="space-y-2 p-2">
          <template v-for="component in components" :key="component.name">
            <h3 :class="{ '!bg-blue-500 !text-white': selectedComponent?.id === component.id }" class="cursor-pointer rounded-md bg-gray-100 p-2 duration-200 select-none hover:bg-gray-200" @click="setComponent(component)">{{ component.name }}</h3>
            <div v-if="selectedComponent?.id === component.id" class="space-y-1 p-2">
              <div v-for="story in component.stories" :key="story.name" :class="{ '!bg-blue-500 !text-white': selectedStory?.id === story.id }" class="rounded-md bg-gray-50 px-2 py-1 duration-200 hover:bg-gray-100">
                <h4 class="cursor-pointer text-sm select-none" @click="setStory(story)">{{ story.name }}</h4>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="relative h-full w-full overflow-hidden">
        <div v-if="selectedComponent" class="container h-full w-full overflow-auto p-2" :style="{ paddingBottom: getBottomPadding }">
          <div class="overflow-hidden rounded-md border border-gray-200">
            <h4 class="bg-gray-100 p-2 text-base font-medium capitalize">
              {{ selectedComponent?.name }} <small>({{ selectedStory?.name }})</small>
            </h4>
            <!-- component preview -->
            <div class="p-4">
              <Component :is="selectedComponent?.component" v-bind="selectedStory?.args" />
            </div>
          </div>

          <!-- props section -->
          <div class="mt-4 overflow-hidden rounded-md border border-gray-200">
            <h4 class="bg-gray-100 p-2 text-base font-medium capitalize">Props</h4>

            <div class="divide-y divide-gray-200">
              <div class="grid grid-cols-2 items-center gap-2 divide-x divide-gray-200 p-2 text-center text-base font-medium capitalize">
                <h4>Key</h4>
                <p>Type</p>
              </div>

              <div v-for="(item, index) in getPropsTypes(selectedComponent?.props)" :key="index" class="grid grid-cols-2 items-center gap-2 divide-x divide-gray-200 p-2 text-center text-sm capitalize">
                <h4>{{ item.key }}</h4>
                <p>{{ item.type }}</p>
              </div>
            </div>
            <!-- <pre>{{ item }}</pre> -->
          </div>
          <!-- <pre>{{ selectedStory }}</pre> -->
          <!-- <pre>{{ selectedComponent }}</pre> -->
        </div>
        <div class="p-2 py-16 text-center" v-else>
          <h3>Select a component to view</h3>
        </div>

        <!-- controls -->
        <!-- selectedStory?.showControls -->
        <div :class="selectedStory ? 'bottom-0' : '-bottom-full'" class="absolute right-0 left-0 z-50 h-fit max-h-[350px] overflow-auto border-t border-gray-200 bg-white p-4 duration-200" ref="controlsPanel">
          <Controls />
        </div>
      </div>
    </div>
  </div>
</template>
