import { onMounted, watch } from "vue";
import HomeComponent from "./Index.vue";

export default {
  title: "Home",
  component: HomeComponent,
};

export const Home = {
  argTypes: {
    primaryColor: { control: "color", name: "Primary color" },
    secondaryColor: { control: "color", name: "Secondary color" },
    accentColor: { control: "color", name: "Accent color" },
  },
  args: {
    primaryColor: "#523ae4",
    secondaryColor: "#0f0d0d",
    accentColor: "#f59e0b",
  },
  render: (args: any) => ({
    components: { HomeComponent },
    setup() {
      const applyThemeColors = (a: any) => {
        const root = document.documentElement;
        if (a.primaryColor) root.style.setProperty("--ui-color-primary", a.primaryColor);
        if (a.secondaryColor) root.style.setProperty("--ui-color-secondary", a.secondaryColor);
        if (a.accentColor) root.style.setProperty("--ui-color-accent", a.accentColor);
      };

      onMounted(() => applyThemeColors(args));

      watch(
        () => [args.primaryColor, args.secondaryColor, args.accentColor],
        () => applyThemeColors(args),
      );

      return { args };
    },
    template: "<HomeComponent />",
  }),
};
