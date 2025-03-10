<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/ui/Button.vue";
import Popover from "../components/ui/Popover.vue";
import Select from "../components/ui/Select.vue";
import Tooltip from "../components/ui/Tooltip.vue";
import Modal from "../components/ui/Modal.vue";
import Separator from "../components/ui/Separator.vue";
import RangeSlider from "../components/ui/RangeSlider.vue";
import Checkbox from "../components/ui/Checkbox.vue";

const selected = ref("Dashboard");
const checkbox = ref(true);
</script>

<template>
	<div class="container py-8">
		<div class="mb-6">
			<h3 class="text-primary mb-2 font-semibold">Buttons</h3>
			<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<Button variant="solid" label="Solid" />
				<Button variant="ghost" label="Ghost" />
				<Button variant="outlined" label="Outlined" />
				<Button variant="text" label="Text" />
				<Button loading label="Loading" />
				<Button icon="material-symbols:check" label="Icon" />
				<Button icon="material-symbols:check" icon-position="left" label="Icon position" />
			</div>
		</div>

		<Separator class="my-4" />

		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">Tooltip</h3>
				<!-- Tooltip -->
				<Tooltip>
					<Button class="w-full" label="Hover me" />
					<template #body>Tooltip content here</template>
				</Tooltip>
			</div>

			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">popover</h3>
				<!-- popover -->
				<Popover>
					<Button class="w-full" label="Popover" />

					<template #body>
						<div>Popover content</div>
					</template>
				</Popover>
			</div>

			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">Select</h3>
				<Select v-model="selected" :options="['Dashboard', 'Analytics', 'Settings', 'Profile']" />
			</div>

			<div class="mb-4">
				<h3 class="text-primary mb-2 font-semibold">Modal</h3>
				<Modal>
					<Button class="w-full" label="Modal" />
				</Modal>
			</div>
		</div>
		<Separator class="my-4" />

		<div>
			<RangeSlider />
			<Checkbox v-model="checkbox" label="Checkbox" />
		</div>
	</div>
</template>
