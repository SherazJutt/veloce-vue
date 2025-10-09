import type { Meta, StoryObj } from "@storybook/vue3";
import Accordion from "./Index.vue";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { title: "Item 1", content: "This is the first item's content." },
      { title: "Item 2", content: "This is the second item's content." },
      { title: "Item 3", content: "This is the third item's content." },
    ],
  },
};
