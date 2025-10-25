import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Accordion } from "../ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    items: [
      { value: "item-1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
      { value: "item-2", title: "Is it unstyled?", content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
      { value: "item-3", title: "Can it be animated?", content: "Yes! You can use the transition prop to configure the animation." },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
