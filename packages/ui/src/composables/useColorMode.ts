import { watch, onBeforeMount, computed } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";

export const useColorMode = () => {
  const cookies = useCookies(["color-mode"], {
    autoUpdateDependencies: true,
  });

  const mode = computed({
    get: () => cookies.get("color-mode") || "dark",
    set: (value: string) => {
      cookies.set("color-mode", value, {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    },
  });

  const isDark = computed(() => mode.value === "dark");

  const toggleDark = () => {
    mode.value = isDark.value ? "light" : "dark";
  };

  const updateDocumentClass = (isDarkMode: boolean) => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkMode);
      document.documentElement.style.background = isDarkMode ? "oklch(20.5% 0 0)" : "#fff";
    }
  };

  watch(mode, (newMode) => {
    updateDocumentClass(newMode === "dark");
  });

  onBeforeMount(() => {
    updateDocumentClass(isDark.value);
  });

  return { mode, isDark, toggleDark };
};
