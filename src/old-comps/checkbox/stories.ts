import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Checkbox from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "I agree",
  },
};

export const Checked: Story = {
  args: {
    label: "I agree",
    modelValue: true,
  },
};

export const LabelClass: Story = {
  args: {
    label: "I agree",
    labelClass: "text-primary",
  },
};

export const CheckboxClass: Story = {
  args: {
    label: "I agree",
    checkboxClass: "bg-primary/25",
  },
};
