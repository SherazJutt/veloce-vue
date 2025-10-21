import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: `\`\`\`bash \n import { Button } from "veloce-vue";  \n \`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "",
    label: "Label",
    iconPosition: "right",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Label",
    icon: "check",
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Label",
    icon: "check",
    iconPosition: "right",
  },
};

export const Loading: Story = {
  args: {
    label: "Loading...",
    loading: true,
    icon: "check",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    icon: "check",
  },
};

export const Solid: Story = {
  args: {
    label: "Solid",
    variant: "solid",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    label: "Text",
    variant: "text",
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost",
    variant: "ghost",
  },
};

export const Rounded: Story = {
  args: {
    label: "Rounded",
    rounded: true,
    icon: "check",
  },
};

export const OnlyIcon: Story = {
  args: {
    icon: "check",
    label: "",
    rounded: true,
  },
};

export const CustomIconClass = {
  args: {
    label: "Custom icon",
    icon: "check",
    iconClass: "w-5 h-5",
  },
};
