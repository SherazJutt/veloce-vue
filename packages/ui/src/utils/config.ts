interface Colors {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  error: string;
  neutral: string;
}

interface config {
  colors: Colors;
}

// create theme settings
export const config = (config: config) => {
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
    } else {
      console.warn(`Color ${color} not found in the colors object. Available colors are: ${Object.keys(colors).join(", ")}`);
    }
  }
};
