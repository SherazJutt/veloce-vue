<template>
  <div>
    <!-- Basic -->
    <div v-if="basic" :class="props.class" class="flex flex-wrap gap-3">
      <Button label="Success Toast" severity="success" @click="showSuccess" />
      <Button label="Error Toast" severity="error" @click="showError" />
      <Button label="Warning Toast" severity="warning" @click="showWarning" />
      <Button label="Info Toast" severity="info" @click="showInfo" />
    </div>

    <!-- Custom Duration -->
    <div v-if="customDuration" :class="props.class" class="flex flex-wrap gap-3">
      <Button label="Long Duration (10s)" severity="info" @click="showLongDuration" />
      <Button label="Short Duration (2s)" severity="warning" @click="showShortDuration" />
      <Button label="No Auto-Close" severity="error" @click="showNoAutoClose" />
    </div>

    <!-- Custom Icons -->
    <div v-if="customIcons" :class="props.class" class="flex flex-wrap gap-3">
      <Button label="Toast with Custom Icon" severity="success" @click="showCustomIcon" />
      <Button label="Toast with Bell Icon" severity="info" @click="showBellIcon" />
    </div>

    <ToastContainer position="bottom-right" :max-toasts="5" />
  </div>
</template>

<script setup lang="ts">
import { Button } from "veloce-vue/ui";
import { useToast } from "veloce-vue/toast";
import { Upload, Bell } from "veloce-vue/icons";
import { markRaw } from "vue";
import { ToastContainer } from "veloce-vue/toast";

const props = defineProps({
  basic: { type: Boolean, default: false },
  customDuration: { type: Boolean, default: false },
  customIcons: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const toast = useToast();

const showSuccess = () => {
  toast.success("Operation completed successfully!");
};

const showError = () => {
  toast.error("Something went wrong. Please try again.");
};

const showWarning = () => {
  toast.warning("Please check your input before submitting.");
};

const showInfo = () => {
  toast.info("New update available. Check it out!");
};

const showLongDuration = () => {
  toast.info("This toast will stay for 10 seconds", { duration: 10000 });
};

const showShortDuration = () => {
  toast.warning("This toast disappears quickly", { duration: 2000 });
};

const showNoAutoClose = () => {
  toast.error("This toast won't auto-close. Click the X to dismiss.", { duration: 0 });
};

const showCustomIcon = () => {
  toast.success("File uploaded successfully!", { icon: markRaw(Upload) });
};

const showBellIcon = () => {
  toast.info("You have a new notification", { icon: markRaw(Bell) });
};
</script>
