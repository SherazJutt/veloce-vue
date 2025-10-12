import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ThemeComponent from "./Index.vue";

const meta: Meta<typeof ThemeComponent> = {
  title: "Config",
  component: ThemeComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Theme: Story = {};
