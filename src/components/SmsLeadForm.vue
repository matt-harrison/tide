<script setup lang="ts">
  import { ref } from 'vue';

  import BasicButton from './BasicButton.vue';
  import BasicTextInput from '@/components/BasicTextInput.vue';
  import VehiclePreview from '@/components/VehiclePreview.vue';
  import dummyVehicle from '@/data/dummy-vehicle-detail.json';
  import { realm } from '@/config/main.config';

  const form = ref<HTMLFormElement | null>(null);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
  };
</script>

<template>
  <VehiclePreview :vehicle="dummyVehicle" />
  <div class="tide-margin-top-1 tide-font-14">
    Let the dealer contact you over text about this {{ realm.label.singular }}.
  </div>
  <form
    ref="form"
    class="tide-display-flex tide-flex-column tide-margin-top-1 tide-margin-bottom-2 tide-gap-1/2"
  >
    <BasicTextInput
      label="Name"
      name="name"
      required
    />
    <BasicTextInput
      label="Phone"
      name="phone"
      required
    />
    <BasicTextInput
      label="Email"
      name="email"
    />
  </form>
  <footer class="footer sticky tide-left-0 tide-bottom-0 tide-padding-y-1/2 tide-padding-x-2 tide-bg-surface">
    <BasicButton
      @click="handleSubmit"
      class="tide-margin-left-auto"
      label="Send"
      type="submit"
    />
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    grid-column: 1 / -1;
  }
</style>
