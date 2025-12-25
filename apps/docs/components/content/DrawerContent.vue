<template>
  <!-- Directions -->
  <div v-if="directions" :class="props.class" class="flex flex-wrap gap-3">
    <Drawer v-model="showLeft" direction="left" title="Left Drawer" description="This drawer slides in from the left">
      <Button label="Open Left Drawer" />
      <template #content>
        <p class="text-muted">Content for left drawer</p>
      </template>
    </Drawer>
    <Drawer v-model="showBottom" direction="bottom" title="Bottom Drawer" description="This drawer slides in from the bottom">
      <Button label="Open Bottom Drawer" />
      <template #content>
        <p class="text-muted">Content for bottom drawer</p>
      </template>
    </Drawer>
    <Drawer v-model="showRight" direction="right" title="Right Drawer" description="This drawer slides in from the right">
      <Button label="Open Right Drawer" />
      <template #content>
        <p class="text-muted">Content for right drawer</p>
      </template>
    </Drawer>
  </div>

  <!-- With Footer -->
  <div v-if="withFooter" :class="props.class">
    <Drawer v-model="showFooter" direction="bottom" title="Drawer with Footer" description="This drawer has a footer section" :show-footer="true">
      <Button label="Open Drawer" />
      <template #content>
        <p class="text-muted">Drawer content goes here</p>
      </template>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button label="Cancel" variant="soft" @click="showFooter = false" />
          <Button label="Save" @click="showFooter = false" />
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup lang="ts">
import { Drawer, Button } from "veloce-vue/ui";
import { ref } from "vue";

const props = defineProps({
  directions: { type: Boolean, default: false },
  withFooter: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const showLeft = ref(false);
const showBottom = ref(false);
const showRight = ref(false);
const showFooter = ref(false);
</script>
