import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "../ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
