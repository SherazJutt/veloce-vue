import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Input from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    placeholder: "Your name",
  },
};

export const HelpText: Story = {
  args: {
    helpText: "This is some helpful text about the field.",
  },
};

export const Prefilled: Story = {
  args: {
    modelValue: "Sheraz Jutt",
  },
};
