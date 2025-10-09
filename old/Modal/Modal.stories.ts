import type { Meta, StoryObj } from "@storybook/vue3";
import Modal from "./Index.vue";
import Button from "../Button/Index.vue";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => ({
    components: { Modal, Button },
    template: `
		<Modal>
			<Button label="Open Modal" />
		</Modal>
		`,
  }),
};
