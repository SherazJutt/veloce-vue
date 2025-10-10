import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Index.vue";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Your name",
    helpText: "We'll never share your data",
  },
};
