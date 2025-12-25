<template>
  <!-- Basic -->
  <div v-if="basic" :class="props.class">
    <Fieldset legend="Personal Information">
      <div class="space-y-4">
        <div>
          <label class="text-muted mb-1 block text-sm" for="name-field">Name</label>
          <Input v-model="name" id="name-field" placeholder="Enter your name" />
        </div>
        <div>
          <label class="text-muted mb-1 block text-sm" for="email-field">Email</label>
          <Input v-model="email" id="email-field" placeholder="Enter your email" />
        </div>
      </div>
    </Fieldset>
  </div>

  <!-- With Icon -->
  <div v-if="withIcon" :class="props.class">
    <Fieldset :icon="Settings" legend="Settings">
      <div class="space-y-2">
        <Checkbox v-model="enableNotifications" label="Enable notifications" />
        <Checkbox v-model="enableDarkMode" label="Enable dark mode" />
      </div>
    </Fieldset>
  </div>

  <!-- Toggleable -->
  <div v-if="toggleable" :class="props.class">
    <Fieldset v-model:collapsed="isCollapsed" legend="Advanced Options" :toggleable="true">
      <div class="space-y-4">
        <div>
          <label class="text-muted mb-1 block text-sm" for="option1-field">Option 1</label>
          <Input v-model="option1" id="option1-field" />
        </div>
        <div>
          <label class="text-muted mb-1 block text-sm" for="option2-field">Option 2</label>
          <Input v-model="option2" id="option2-field" />
        </div>
      </div>
    </Fieldset>
  </div>
</template>

<script setup lang="ts">
import { Fieldset, Input, Checkbox } from "veloce-vue/ui";
import { Settings } from "veloce-vue/icons";
import { ref } from "vue";

const props = defineProps({
  basic: { type: Boolean, default: false },
  withIcon: { type: Boolean, default: false },
  toggleable: { type: Boolean, default: false },
  class: { type: String, default: "" },
});

const name = ref("");
const email = ref("");
const enableNotifications = ref(false);
const enableDarkMode = ref(false);
const isCollapsed = ref(false);
const option1 = ref("");
const option2 = ref("");
</script>
