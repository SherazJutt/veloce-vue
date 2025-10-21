import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Popover from "./Index.vue";
import Button from "../button/Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: `\`\`\`bash \n import { Popover } from "veloce-vue";  \n \`\`\`
        `,
      },
    },
  },
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

export const Bottom: Story = {
  args: {
    position: "bottom",
  },
  render,
  parameters: {
    docs: {
      source: {
        code: `
          <script lang="ts" setup>
            import { ref } from "vue";
            import Popover from "veloce-vue";
            import Button from "veloce-vue";
          </script>
          <template>
            <Popover position="bottom">
              <template #default>
                <Button class="w-full" label="Hover me" />
              </template>
            </Popover>
          </template>
        `.trim(),
      },
    },
  },
};

export const Top: Story = {
  args: {
    position: "top",
  },
  render,
  parameters: {
    docs: {
      source: {
        code: `
          <script lang="ts" setup>
            import { ref } from "vue";
            import Popover from "veloce-vue";
            import Button from "veloce-vue";
          </script>
          <template>
            <Popover position="top">
              <template #default>
                <Button class="w-full" label="Hover me" />
              </template>
            </Popover>
          </template>
        `.trim(),
      },
    },
  },
};
