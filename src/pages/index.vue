<script setup lang="ts">
import { ref } from "vue";
import Button from "../components/ui/Button.vue";
import Popover from "../components/ui/Popover.vue";
import Select from "../components/ui/Select.vue";
import Tooltip from "../components/ui/Tooltip.vue";
import Modal from "../components/ui/Modal.vue";

const selected = ref("Dashboard");
</script>

<template>
	<div class="container py-8">
		<div class="grid grid-cols-3 gap-4">
			<!-- button -->
			<Button label="Button" />

			<!-- Tooltip -->
			<Tooltip>
				<Button class="w-full" label="Hover me" />
				<template #body>Tooltip content here</template>
			</Tooltip>

			<!-- popover -->
			<Popover>
				<Button class="w-full" label="Popover" />

				<template #body>
					<div>Popover content</div>
				</template>
			</Popover>
		</div>
		<div class="mt-6 grid grid-cols-3 gap-4">
			<Select v-model="selected" :options="['Dashboard', 'Analytics', 'Settings', 'Profile']" />
			<Modal>
				<Button class="w-full" label="Modal" />
			</Modal>
		</div>
	</div>
</template>
