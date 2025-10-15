import { ref } from "vue";

interface StoryEntry {
  component: Record<string, any>;
}

export function useBook() {
  const stories = ref<StoryEntry[]>([]);

  const modules = import.meta.glob("/src/components/**/stories.ts", { eager: true });

  for (const [_, mod] of Object.entries(modules)) {
    const m = mod as Record<string, any>;
    const component = m.default ?? {};
    stories.value.push({ ...component });
  }

  return { stories };
}
