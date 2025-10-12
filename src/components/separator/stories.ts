import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Separator from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof Separator>;

const render = (args: any) => ({
  components: { Separator },
  setup() {
    return { args };
  },
  template: `<Separator v-bind="args" />`,
});

export const Horizontal: Story = {
  args: { direction: "horizontal" },
  render,
};

export const Vertical: Story = {
  args: { direction: "vertical" },
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args };
    },
    template: `
    <div class="h-24 w-24 mx-auto">
      <Separator v-bind="args" />
    </div>
    `,
  }),
};
