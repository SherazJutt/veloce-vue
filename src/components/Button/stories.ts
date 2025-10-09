import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Index.vue";
import { props } from "./props";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: Object.fromEntries(Object.entries(props).map(([key, val]) => [key, val.default])),
  // argTypes: {
  //   variant: {
  //     control: "select",
  //     options: ["outlined", "text", "ghost", "solid"],
  //   },
  //   iconPosition: {
  //     control: "radio",
  //     options: ["left", "right"],
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label Text",
  },
};
