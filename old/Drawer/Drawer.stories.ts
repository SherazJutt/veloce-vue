import type { Meta, StoryObj } from "@storybook/vue3";
import Drawer from "./Index.vue";
import Button from "../Button/Index.vue";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => ({
    components: { Drawer, Button },
    template: `
		<Drawer title="Drawer title" description="A short description" :footer="true">
			<template #default>
				<Button label="Open Drawer" />
			</template>
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
  }),
};
