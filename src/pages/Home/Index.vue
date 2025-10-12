<template>
  <div>
    <h1 class="py-6 text-center text-3xl font-bold">Welcome</h1>

    <div class="mt-3">
      <h3 class="text-lg font-medium">Theme Colors</h3>

      <div class="theme-colors mt-2.5">
        <div :style="{ backgroundColor: 'var(--ui-color-primary)' }">Primary color</div>
        <div :style="{ backgroundColor: 'var(--ui-color-secondary)' }">Secondary color</div>
        <div :style="{ backgroundColor: 'var(--ui-color-accent)' }">Accent color</div>
      </div>
    </div>
  </div>
</template>
<style>
@reference "tailwindcss";

.theme-colors {
  @apply flex flex-wrap gap-2 text-center [&>*]:rounded-md [&>*]:px-6 [&>*]:py-2.5 [&>*]:transition-opacity [&>*]:duration-300;
  @apply [&>*:hover]:cursor-pointer [&>*:hover]:opacity-75;
}
</style>
