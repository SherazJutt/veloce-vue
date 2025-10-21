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
  parameters: {
    docs: {
      description: {
        component: `\`\`\`bash \n import { Separator } from "veloce-vue";  \n \`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

const render = (args: any) => ({
  components: { Separator },
  setup() {
    return { args };
  },
  // <div class="h-24 mx-auto">
  template: `
    <div class="flex justify-center items-center" :class="args.direction === 'vertical' ? 'h-40' : 'h-fit'">
      <Separator v-bind="args" />
    </div>
  `,
});

export const Horizontal: Story = {
  args: { direction: "horizontal" },
  render,
};

export const Vertical: Story = {
  args: { direction: "vertical" },
  render,
};
