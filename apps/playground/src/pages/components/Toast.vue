<template>
  <div class="space-y-8 p-4">
    <!-- Basic Toasts -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Toasts</h2>
      <p class="text-muted mb-4 text-sm">Click the buttons below to show different types of toasts.</p>
      <div class="flex flex-wrap gap-3">
        <Button label="Success Toast" severity="success" @click="showSuccess" />
        <Button label="Error Toast" severity="error" @click="showError" />
        <Button label="Warning Toast" severity="warning" @click="showWarning" />
        <Button label="Info Toast" severity="info" @click="showInfo" />
        <Button label="Primary Toast" severity="primary" @click="showPrimary" />
        <Button label="Secondary Toast" severity="secondary" @click="showSecondary" />
      </div>
    </section>

    <!-- Custom Duration -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Custom Duration</h2>
      <p class="text-muted mb-4 text-sm">Toasts can have custom durations. This one lasts 10 seconds.</p>
      <div class="flex flex-wrap gap-3">
        <Button label="Long Duration (10s)" severity="info" @click="showLongDuration" />
        <Button label="Short Duration (2s)" severity="warning" @click="showShortDuration" />
        <Button label="No Auto-Close" severity="error" @click="showNoAutoClose" />
      </div>
    </section>

    <!-- Custom Icons -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Custom Icons</h2>
      <p class="text-muted mb-4 text-sm">You can specify custom icons for toasts.</p>
      <div class="flex flex-wrap gap-3">
        <Button label="Toast with Custom Icon" severity="success" @click="showCustomIcon" />
        <Button label="Toast with Bell Icon" severity="info" @click="showBellIcon" />
      </div>
    </section>

    <!-- Programmatic Usage -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Programmatic Usage</h2>
      <p class="text-muted mb-4 text-sm">Use the useToast composable to show toasts programmatically.</p>
      <div class="space-y-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <div>
          <h3 class="mb-2 font-semibold">Example Code:</h3>
          <pre class="overflow-x-auto rounded bg-neutral-100 p-3 text-sm dark:bg-neutral-800"><code>import { useToast } from "veloce/ui";

const toast = useToast();

// Show different types
toast.success("Operation completed!");
toast.error("Something went wrong!");
toast.warning("Please check your input");
toast.info("New update available");

// Custom options
toast.show("Custom message", {
  severity: "primary",
  duration: 7000,
  icon: "bell"
});

// Clear all toasts
toast.clear();</code></pre>
        </div>
        <div class="flex gap-3">
          <Button label="Show Multiple Toasts" severity="primary" @click="showMultiple" />
          <Button label="Clear All Toasts" variant="outlined" severity="neutral" @click="clearAll" />
        </div>
      </div>
    </section>

    <!-- Position Examples -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Positions</h2>
      <p class="text-muted mb-4 text-sm">Toasts can be positioned in different corners. Change the position prop on ToastContainer.</p>
      <div class="space-y-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-900">
        <p class="text-sm"><strong>Available positions:</strong> top-left, top-right, top-center, bottom-left, bottom-right, bottom-center</p>
        <p class="text-muted text-sm">Current position: <strong>top-right</strong> (configured in DefaultLayout.vue)</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@veloce-vue/ui";
import { useToast } from "@veloce-vue/toast";
import { Upload, Bell } from "@veloce-vue/icons";
import { markRaw } from "vue";

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

const showPrimary = () => {
  toast.show("This is a primary toast", { severity: "primary" });
};

const showSecondary = () => {
  toast.show("This is a secondary toast", { severity: "secondary" });
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

const showMultiple = () => {
  toast.success("First toast");
  setTimeout(() => toast.info("Second toast"), 300);
  setTimeout(() => toast.warning("Third toast"), 600);
  setTimeout(() => toast.error("Fourth toast"), 900);
};

const clearAll = () => {
  toast.clear();
};
</script>
