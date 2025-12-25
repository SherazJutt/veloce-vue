<template>
  <!-- Basic -->
  <div v-if="basic" :class="props.class">
    <Modal v-model="showBasic">
      <Button label="Open Modal" />
      <template #content>
        <p class="text-muted">This is the modal content. You can add any content here.</p>
      </template>
    </Modal>
  </div>

  <!-- With Footer -->
  <div v-if="withFooter" :class="props.class">
    <Modal v-model="showFooter">
      <Button label="Open Modal with Footer" />
      <template #content>
        <p class="text-muted">Modal content goes here.</p>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Cancel" variant="soft" @click="showFooter = false" />
          <Button label="Save" @click="showFooter = false" />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { Modal, Button } from "veloce-vue/ui";
import { ref } from "vue";

const props = defineProps({
  basic: { type: Boolean, default: false },
  withFooter: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const showBasic = ref(false);
const showFooter = ref(false);
</script>

