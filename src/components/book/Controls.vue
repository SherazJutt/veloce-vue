<template>
  <div v-if="selectedStory?.args && prop">
    <!-- controls -->
    <div class="flex items-center gap-4">
      <!-- input -->
      <template v-if="selectedComponent?.controls[prop].control === 'text'">
        <Input v-model="selectedStory.args[prop]" class="w-full" />
      </template>
      <!-- select -->
      <template v-if="selectedComponent?.controls[prop].control === 'select'">
        <Select v-model="selectedStory.args[prop]" class="w-full" :options="selectedComponent?.controls[prop].options" variant="gray" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import useBook from "@/composables/useBook";
import Input from "../input/Index.vue";
import Select from "../select/Index.vue";

const props = defineProps({
  prop: { type: String, required: true },
});

const { selectedStory, selectedComponent } = useBook();
</script>
