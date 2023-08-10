<script setup lang="ts">
  import { ref } from 'vue';

  import BasicButton from './BasicButton.vue';
  import BasicTextInput from '@/components/BasicTextInput.vue';
  import VehiclePreview from '@/components/VehiclePreview.vue';
  import dummyVehicle from '@/data/dummy-vehicle-detail.json';
  import { PRIORITY } from '@/types/Priority';
  import { TIER } from '@/types/Tier';
  import { realm } from '@/config/main.config';

  const form = ref<HTMLFormElement | null>(null);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (form.value) {
      console.log(form);
    }
  };
</script>

<template>
  <VehiclePreview :vehicle="dummyVehicle" />
  <div class="mt-3/2 font-14">Let the dealer contact you over text about this {{ realm.label.singular }}.</div>
  <form
    ref="form"
    class="flex column mt-1 mb-2 gap-3/4"
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
  <footer class="footer sticky left-0 bottom-0 py-1/2 px-2 bg-surface">
    <BasicButton
      :priority="PRIORITY.PRIMARY"
      :tier="TIER.TIER_1"
      @click="handleSubmit"
      class="ml-auto"
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
