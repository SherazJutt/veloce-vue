import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Modal from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";
import Button from "../button/Index.vue";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: `\`\`\`bash \n import { Modal } from "veloce-vue";  \n \`\`\`
        `,
      },
      story: {
        inline: true,
        height: "320px",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    show: false,
  },
  render: (args: any) => ({
    components: { Modal, Button },
    setup() {
      return { args };
    },
    template: `
      <Modal v-bind="args" >
        <Button label="Open Modal" />
        <template #content>
          <p>Content of the modal</p>
        </template>
        <template #footer>
          <div class="flex items-center justify-end gap-4">
            <Button class="!px-3 !py-1" variant="ghost" label="Close" @click="show = false" />
            <Button class="!px-3 !py-1" label="Save" @click="show = false" />
          </div>
        </template>
      </Modal>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
          <script lang="ts" setup>
            import { ref } from "vue";
            import Modal from "veloce-vue";
            import Button from "veloce-vue";
            const show = ref(false);
          </script>
                
          <template>
            <Modal v-bind="args">
              <Button label="Open Modal" />
              <template #content>
                <p>Content of the modal</p>
              </template>
              <template #footer>
                <div class="flex items-center justify-end gap-4">
                  <Button class="!px-3 !py-1" variant="ghost" label="Close" @click="show = false" />
                  <Button class="!px-3 !py-1" label="Save" @click="show = false" />
                </div>
              </template>
            </Modal>
          </template>
        `.trim(),
      },
    },
  },
};
