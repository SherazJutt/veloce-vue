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

// shared state
const components = ref<component[]>([]);
const selectedComponent = ref<component | null>(null);
const selectedStory = ref<Story | null>(null);
let isInitialized = false;

// initialize the book
const initializeBook = () => {
  if (isInitialized) return;

  const modules = import.meta.glob("/src/components/**/stories.ts", { eager: true });

  for (const [_, mod] of Object.entries(modules)) {
    const m = mod as Record<string, any>;
    const componentDef = m.default ?? {};
    components.value.push({
      ...componentDef,
      id: generateRandomId(),
      stories: componentDef.stories.map((story: Story) => ({ ...story, id: generateRandomId() })),
      component: markRaw(componentDef.component),
    });
  }

  isInitialized = true;
};

// useBook composable
export default function useBook() {
  initializeBook();

  const setComponent = (component: component) => {
    if (selectedComponent.value && selectedComponent.value.id === component.id) {
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
