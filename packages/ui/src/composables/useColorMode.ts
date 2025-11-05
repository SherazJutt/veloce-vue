import { watch, onBeforeMount, computed } from "vue";
import { useStorage } from "@vueuse/core";

export const useColorMode = () => {
  const mode = useStorage("color-mode", "light");
  const isDark = computed(() => (mode.value === "dark" ? true : false));

  const toggleDark = () => (mode.value = isDark.value ? "light" : "dark");

  watch(mode, (newMode) => document.documentElement.classList.toggle("dark", newMode === "dark"));
  onBeforeMount(() => document.documentElement.classList.toggle("dark", isDark.value));

  return { mode, isDark, toggleDark };
};
