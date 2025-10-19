import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Drawer from "./Index.vue";
import Button from "../button/Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  args,
  argTypes,
  parameters: {
    docs: {
      story: {
        inline: true,
        height: "300px",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const createRender = () => (args: any) => ({
  components: { Drawer, Button },
  setup() {
    return { args };
  },
  template: `
  <Drawer v-bind="args" :showFooter="true" v-model="args.show" title="Drawer title" description="A short description">
    <Button label="Open Drawer" />
    <template #content>
      <div class="p-2">Drawer Content</div>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Cancel" variant="ghost" />
        <Button label="Save" />
      </div>
    </template>
  </Drawer>
  `,
});

const render = createRender();

export const Default: Story = {
  args: {
    direction: "left",
    showFooter: true,
    show: false,
  },
  render,
};

export const Left: Story = {
  args: {
    direction: "left",
    show: true,
  },
  render,
};

export const Bottom: Story = {
  args: {
    direction: "bottom",
    show: true,
  },
  render,
};

export const Right: Story = {
  args: {
    direction: "right",
    show: true,
  },
  render,
};
