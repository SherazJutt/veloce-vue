import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ThemeComponent from "./Index.vue";
import { onMounted, watch } from "vue";

const meta: Meta<typeof ThemeComponent> = {
  title: "Config",
  component: ThemeComponent,
};

export default meta;

type Story = StoryObj<{
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}>;

export const Theme: Story = {
  argTypes: {
    primaryColor: { control: "color", name: "Primary color" },
    secondaryColor: { control: "color", name: "Secondary color" },
    accentColor: { control: "color", name: "Accent color" },
  },
  args: {
    primaryColor: "#f7934c",
    secondaryColor: "#f7b05b",
    accentColor: "#ffc15e",
  },
  render: (args: any) => ({
    components: { ThemeComponent },
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
    template: "<ThemeComponent />",
  }),
};
