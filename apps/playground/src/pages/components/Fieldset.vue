<template>
  <div class="space-y-8 p-4">
    <!-- Basic Fieldset -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Basic Fieldset</h2>
      <Fieldset legend="Personal Information">
        <div class="space-y-4">
          <div>
            <label class="text-muted mb-1 block text-sm" for="name-field">Name</label>
            <Input id="name-field" placeholder="Enter your name" />
          </div>
          <div>
            <label class="text-muted mb-1 block text-sm" for="email-field">Email</label>
            <Input id="email-field" placeholder="Enter your email" />
          </div>
        </div>
      </Fieldset>
    </section>

    <!-- With Icon -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">With Icon</h2>
      <Fieldset :icon="Settings" legend="Settings">
        <div class="space-y-2">
          <Checkbox v-model="enableNotifications" label="Enable notifications" />
          <Checkbox v-model="enableDarkMode" label="Enable dark mode" />
        </div>
      </Fieldset>
    </section>

    <!-- Toggleable Fieldset -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Toggleable Fieldset</h2>
      <Fieldset v-model:collapsed="isCollapsed" legend="Advanced Options" toggleable>
        <div class="space-y-4">
          <div>
            <label class="text-muted mb-1 block text-sm" for="option1-field">Option 1</label>
            <Input id="option1-field" />
          </div>
          <div>
            <label class="text-muted mb-1 block text-sm" for="option2-field">Option 2</label>
            <Input id="option2-field" />
          </div>
        </div>
      </Fieldset>
    </section>

    <!-- Multiple Fieldsets -->
    <section>
      <h2 class="mb-4 text-xl font-semibold">Multiple Fieldsets</h2>
      <div class="space-y-4">
        <Fieldset :icon="User" legend="Account Details">
          <p class="text-muted text-sm">Account information goes here</p>
        </Fieldset>
        <Fieldset :icon="Settings" legend="Preferences">
          <p class="text-muted text-sm">User preferences go here</p>
        </Fieldset>
        <Fieldset :icon="Lock" legend="Security">
          <p class="text-muted text-sm">Security settings go here</p>
        </Fieldset>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Fieldset, Input, Checkbox } from "@veloce/ui";
import { Settings, User, Lock } from "@veloce/icons";

const isCollapsed = ref(false);
const enableNotifications = ref(false);
const enableDarkMode = ref(false);
</script>
