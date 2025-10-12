import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Modal from "./Index.vue";
import { props } from "./props";
import { generateStoryControls } from "../../utils/storyControls";
import Button from "../Button/Index.vue";

const { args, argTypes } = generateStoryControls(props);

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args,
  argTypes,
};

export default meta;
type Story = StoryObj<typeof Modal>;

// reusable render factory
const createRender = () => (args: any) => ({
  components: { Modal, Button },
  setup() {
    return { args };
  },
  template: `
	  <Modal v-bind="args">
	  	<Button label="Open Modal" />
	  </Modal>
  `,
});

// reusable render wrapper for all stories
const render = createRender();

// reusable stories
export const Default: Story = {
  args: {
    show: false,
  },
  render,
};
