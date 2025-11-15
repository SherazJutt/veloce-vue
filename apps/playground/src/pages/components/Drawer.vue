<template>
  <Drawer v-model="show" direction="bottom" showFooter title="Drawer Title" description="Drawer Description">
    <Button label="Close" />
    <template #footer>
      <div class="flex justify-end gap-2">
        <Button label="Close" variant="soft" />
        <Button label="Save" />
      </div>
    </template>
  </Drawer>
</template>
<script setup lang="ts">
import { Drawer, Button } from "@veloce-vue/ui";
import { ref } from "vue";

const show = ref(false);
</script>
