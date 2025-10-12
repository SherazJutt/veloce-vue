import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Tooltip from "./Index.vue";
import Button from "../Button/Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// reusable render factory
const createRender = () => (args: any) => ({
  components: { Tooltip, Button },
  setup() {
    return { args };
  },
  template: `
  <div class="w-full py-16 text-center">
    <Tooltip v-bind="args">
      <Button class="w-full" label="Hover me" />
      <template #body>{{ args.content }}</template>
    </Tooltip>
  </div>
  `,
});

// reusable render wrapper for all stories
const render = createRender();

export const Default: Story = {
  args: {
    content: "Tooltip content (Default)",
  },
  render,
};

export const Top: Story = {
  args: {
    content: "Tooltip content (Top)",
    position: "top",
  },
  render,
};

export const Bottom: Story = {
  args: {
    content: "Tooltip content (Bottom)",
    position: "bottom",
  },
  render,
};

export const Left: Story = {
  args: {
    content: "Tooltip content (Left)",
    position: "left",
  },
  render,
};

export const Right: Story = {
  args: {
    content: "Tooltip content (Right)",
    position: "right",
  },
  render,
};
