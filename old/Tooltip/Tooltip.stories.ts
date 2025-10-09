import type { Meta, StoryObj } from "@storybook/vue3";
import Tooltip from "./Index.vue";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => ({
    components: { Tooltip },
    template: `
		<Tooltip>
			<template #default>
				<button class="rounded bg-primary px-3 py-1 text-white">Hover me</button>
			</template>
			<template #body>
				<div>Tooltip content</div>
			</template>
		</Tooltip>
		`,
  }),
};
