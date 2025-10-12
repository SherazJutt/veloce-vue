import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Select from "./Index.vue";
import { generateStoryControls } from "../../utils/storyControls.ts";
import { props } from "./props.ts";
const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args,
  argTypes,
  parameters: {
    docs: {
      story: {
        inline: true,
        height: "200px",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
  },
  render: (args) => ({
    components: { Select },
    setup() {
      return { args };
    },
    template: `<Select v-bind="args" />`,
  }),
};

export const ShowFilter: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    showFilter: true,
    isOpen: true,
  },
};

export const Solid: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "solid",
  },
};

export const Outlined: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "text",
  },
};

export const Ghost: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    variant: "ghost",
  },
};
