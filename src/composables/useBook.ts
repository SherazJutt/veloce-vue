import { ref } from "vue";

interface story {
  name: string;
}

export function useBook() {
  const stories = ref<story[]>([]);

  return { stories };
}
