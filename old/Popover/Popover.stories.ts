import type { Meta, StoryObj } from "@storybook/vue3";
import Popover from "./Index.vue";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => ({
    components: { Popover },
    template: `
		<Popover>
			<template #default>
				<button class="rounded bg-primary px-3 py-1 text-white">Hover me</button>
			</template>
			<template #body>
				<div>Popover body content</div>
			</template>
		</Popover>
		`,
  }),
};
