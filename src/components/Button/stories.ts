import type { Meta } from "@storybook/vue3-vite";
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

export const Default = {
  args: {
    icon: "",
    label: "Label",
    iconPosition: "right",
  },
};

export const WithIconLeft = {
  args: {
    label: "Label",
    icon: "check",
    iconPosition: "left",
  },
};

export const WithIconRight = {
  args: {
    label: "Label",
    icon: "check",
    iconPosition: "right",
  },
};

export const Loading = {
  args: {
    label: "Loading...",
    loading: true,
    icon: "check",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
    icon: "check",
  },
};

export const Solid = {
  args: {
    label: "Solid",
    variant: "solid",
  },
};

export const Outlined = {
  args: {
    label: "Outlined",
    variant: "outlined",
  },
};

export const Text = {
  args: {
    label: "Text",
    variant: "text",
  },
};

export const Ghost = {
  args: {
    label: "Ghost",
    variant: "ghost",
  },
};

export const Rounded = {
  args: {
    label: "Rounded",
    rounded: true,
    icon: "",
  },
};

export const OnlyIcon = {
  args: {
    icon: "check",
    label: "",
    rounded: false,
  },
};

export const CustomIconClass = {
  args: {
    label: "Custom icon",
    icon: "check",
    iconClass: "w-5 h-5",
  },
};
