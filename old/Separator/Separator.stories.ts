import type { Meta, StoryObj } from "@storybook/vue3";
import Separator from "./Index.vue";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: { direction: "horizontal" },
};

export const Vertical: Story = {
  args: { direction: "vertical" },
};
