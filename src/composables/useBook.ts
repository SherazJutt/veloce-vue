import { ref } from "vue";
import { generateRandomId } from "@/utils/generateRandomId";

interface Story {
  name: string;
  id: string;
  args: Record<string, any>;
}

interface component {
  id: string;
  component: Record<string, any>;
  controls: Record<string, any>;
  name: string;
  props: Record<string, any>;
  stories: Story[];
}

export function useBook() {
  const selectedComponent = ref<component | null>(null);
  const components = ref<component[]>([]);
  const selectedStory = ref<Story | null>(null);

  const modules = import.meta.glob("/src/components/**/stories.ts", { eager: true });

  for (const [_, mod] of Object.entries(modules)) {
    const m = mod as Record<string, any>;
    const component = m.default ?? {};
    components.value.push({ ...component, id: generateRandomId(), stories: component.stories.map((story: Story) => ({ ...story, id: generateRandomId() })) });
  }

  const setComponent = (component: component) => {
    selectedComponent.value = component;
    selectedStory.value = null;
  };
  const setStory = (story: Story) => {
    selectedStory.value = story;
  };

  return { components, selectedComponent, selectedStory, setComponent, setStory };
}
