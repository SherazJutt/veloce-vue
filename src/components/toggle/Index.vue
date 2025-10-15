<template>
  <div>
    <input type="checkbox" class="peer after:bg-primary bg-primary/25 hover:bg-primary/35 checked:after:bg-primary checked:bg-primary/25 relative h-6 w-12 cursor-pointer appearance-none rounded-xl transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:transition-all checked:after:left-6 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: { type: Boolean, default: false },
});
</script>
