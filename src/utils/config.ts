import type { Colors, config } from "@/types/config";

// create theme settings
export const createThemeConfig = (config: config) => {
  return {
    install() {
      if (!config || !config.colors) {
        console.warn("No config provided for the theme settings");
        return;
      }

      // apply colors
      applyCSSVars(config.colors);
    },
  };
};

// apply the colors to the root element
const applyCSSVars = (colors: Colors) => {
  const root = document.documentElement;

  // apply the colors to the root element
  for (const color in colors) {
    if (colors[color as keyof Colors]) {
      root.style.setProperty(`--ui-color-${color}`, colors[color as keyof Colors]);
    }
  }
};
