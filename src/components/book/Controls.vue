<template>
  <template v-if="selectedStory?.args">
    <div v-for="(value, key) in selectedStory?.args" :key="key">
      <div class="flex items-center gap-4">
        <h4 class="text-sm font-medium capitalize">{{ key }}</h4>
        <!-- controls -->
        <template v-if="selectedComponent?.controls[key].control === 'text'">
          <Input v-model="selectedStory.args[key]" class="w-full" />
        </template>
      </div>
    </div>

    <!-- <pre>{{ selectedStory.args }}</pre> -->
  </template>

  <!-- <template v-for="(value, key) in selectedComponent?.controls" :key="key">
    <div class="flex items-center gap-8">
      <div>{{ key }}</div>
      <div>{{ value }}</div>
    </div>
  </template> -->
</template>
<script setup lang="ts">
import useBook from "@/composables/useBook";
import Input from "../input/Index.vue";

const { selectedStory, selectedComponent } = useBook();
</script>
