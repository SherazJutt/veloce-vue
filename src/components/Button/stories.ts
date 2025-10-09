import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
