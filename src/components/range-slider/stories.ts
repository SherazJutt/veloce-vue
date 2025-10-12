import type { Meta, StoryObj } from "@storybook/vue3-vite";
import RangeSlider from "./Index.vue";
import { props } from "./props.ts";
import { generateStoryControls } from "../../utils/storyControls.ts";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    value: 20,
    class: "mt-6",
  },
};

export const WithTooltip: Story = {
  args: {
    value: 20,
    showTooltip: true,
    class: "mt-6",
  },
};
