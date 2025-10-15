import { markRaw, ref } from "vue";
import { generateRandomId } from "@/utils/generateRandomId";

interface Story {
  name: string;
  id: string;
  showControls: boolean;
  args: Record<string, any>;
}

interface component {
  id: string;
  component: any;
  controls: Record<string, any>;
  name: string;
  props: Record<string, any>;
  stories: Story[];
}

export function useBook() {
  const components = ref<component[]>([]);
  const selectedComponent = ref<component | null>(null);
  const selectedStory = ref<Story | null>(null);

  const modules = import.meta.glob("/src/components/**/stories.ts", { eager: true });

  for (const [_, mod] of Object.entries(modules)) {
    const m = mod as Record<string, any>;
    const component = m.default ?? {};
    components.value.push({ ...component, id: generateRandomId(), stories: component.stories.map((story: Story) => ({ ...story, id: generateRandomId() })), component: markRaw(component.component) });
  }

  const setComponent = (component: component) => {
    if (selectedComponent.value) {
      selectedComponent.value = null;
      selectedStory.value = null;
      return;
    }

    selectedComponent.value = component;
    selectedStory.value = selectedComponent.value?.stories[0] ?? null;
  };
  const setStory = (story: Story) => {
    selectedStory.value = story;
  };

  return { components, selectedComponent, selectedStory, setComponent, setStory };
}
