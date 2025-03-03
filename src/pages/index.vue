<script setup lang="ts">
import Button from "../components/ui/Button.vue";
import Popover from "../components/ui/Popover.vue";
</script>

<template>
	<div class="container py-8">
		<Popover>
			<Button label="Button" />
			<template #body>
				<div>Popover content</div>
			</template>
		</Popover>
	</div>
</template>
