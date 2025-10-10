import type { Meta, StoryObj } from "@storybook/vue3";
import RangeSlider from "./Index.vue";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {};
