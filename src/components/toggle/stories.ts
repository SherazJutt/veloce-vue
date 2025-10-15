import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Toggle from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    modelValue: false,
  },
};

export const Primary: Story = {
  args: {
    modelValue: false,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    modelValue: false,
    variant: "secondary",
  },
};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
};

export const Disabled: Story = {
  args: {
    modelValue: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    modelValue: true,
    disabled: true,
  },
};
