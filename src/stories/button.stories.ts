import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "../ui/button";
import { IconsList } from "../components/icon";

const variantOptions = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const;
const sizeOptions = ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"] as const;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    default: "Button",
    loading: false,
    variant: "default",
    size: "default",
  },
  argTypes: {
    default: { control: "text" },
    variant: {
      control: { type: "select" },
      options: variantOptions,
    },
    size: {
      control: { type: "select" },
      options: sizeOptions,
    },
    loading: { control: "boolean" },
    as: { control: false },
    icon: { control: "select", options: IconsList },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderFromArgs = (args: any) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `<Button v-bind="args">{{ args.default }}</Button>`,
});

export const Default: Story = {
  render: renderFromArgs,
};

export const Destructive: Story = {
  args: { variant: "destructive", default: "Destructive" },
  render: renderFromArgs,
};

export const Outline: Story = {
  args: { variant: "outline", default: "Outline" },
  render: renderFromArgs,
};

export const Secondary: Story = {
  args: { variant: "secondary", default: "Secondary" },
  render: renderFromArgs,
};

export const Ghost: Story = {
  args: { variant: "ghost", default: "Ghost" },
  render: renderFromArgs,
};

export const Link: Story = {
  args: { variant: "link", default: "Link" },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" as="a" href="#">{{ args.default }}</Button>`,
  }),
};

export const Small: Story = {
  args: { size: "sm", default: "Small" },
  render: renderFromArgs,
};

export const Large: Story = {
  args: { size: "lg", default: "Large" },
  render: renderFromArgs,
};

export const Icon: Story = {
  args: { size: "icon" },
  render: () => ({
    components: { Button },
    template: `<Button size="icon" aria-label="Add" icon="check"></Button>`,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: `<Button disabled>Disabled</Button>`,
  }),
};
