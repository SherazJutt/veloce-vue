<script setup lang="ts">
import Button from "../components/ui/Button.vue";
import Popover from "../components/ui/Popover.vue";
import Tooltip from "../components/ui/Tooltip.vue";
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
	</div>
</template>
