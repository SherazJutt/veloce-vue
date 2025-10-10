import type { Meta, StoryObj } from "@storybook/vue3";
import Select from "./Index.vue";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
  },
};
