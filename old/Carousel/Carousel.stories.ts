import type { Meta, StoryObj } from "@storybook/vue3";
import Carousel from "./Index.vue";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
