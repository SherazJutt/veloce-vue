import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Popover from "./Index.vue";
import Button from "../Button/Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof Popover>;

// reusable render factory
const createRender = () => (args: any) => ({
  components: { Popover, Button },
  setup() {
    return { args };
  },
  template: `
  <div class="w-full py-16 text-center">
	  <Popover v-bind="args">
	  	<template #default>
	  		<Button class="w-full" label="Hover me" />
	  	</template>
	  	<template #body>
	  		<div>Popover body content ({{ args.position }})</div>
	  	</template>
	  </Popover>
  </div>
  `,
});

// reusable render wrapper for all stories
const render = createRender();

export const Default: Story = {
  render,
};

export const Left: Story = {
  args: {
    position: "left",
  },
  render,
};

export const Right: Story = {
  args: {
    position: "right",
  },
  render,
};

export const Center: Story = {
  args: {
    position: "center",
  },
  render,
};
