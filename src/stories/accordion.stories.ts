import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Accordion } from "../ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const getItems = (length: number) => {
  return Array.from({ length }, (_, index) => ({ value: `item-${index + 1}`, title: `${index + 1} Lorem ipsum dolor sit amet consectetur adipisicing elit.`, content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ${index + 1}` }));
};

export const Default: Story = {
  args: {
    items: getItems(10),
  },
};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
    items: getItems(1),
  },
};

export const SingleItem: Story = {
  args: {
    items: getItems(1),
  },
};

export const ManyItems: Story = {
  args: {
    items: getItems(10),
  },
};

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    items: getItems(10),
  },
};

export const Border: Story = {
  args: {
    border: true,
    items: getItems(10),
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};
