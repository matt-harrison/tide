<script lang="ts" setup>
  import { ref } from 'vue';

  import type { VehicleType } from '@/types/VehicleType';

  import SiteIcon from '@/components/SiteIcon.vue';

  let isActive = ref(false);

  type Props = {
    vehicleType: VehicleType;
  };

  const props = defineProps<Props>();

  const toggleIsActive = () => {
    isActive.value = !isActive.value;
  };
</script>

<template>
  <button
    :class="isActive ? 'bg-blue-light' : 'bg-gray-light'"
    @click="toggleIsActive"
    class="vehicle-type-toggle flex column axis2-center shrink-none mt-1 border-1 border-gray radius-1/2 pb-1/2 snap-start"
  >
    <div class="vehicle-type-thumb relative mb-1 radius-1/4 bg-gray" />

    <div class="flex axis1-center axis2-center gap-1/4">
      <span class="font-12 font-700 whitespace-nowrap">{{ props.vehicleType.label }}</span>

      <SiteIcon
        class="vehicle-type-check"
        icon="check"
        is-solid
        v-if="isActive"
      />
    </div>
  </button>
</template>

<style scoped>
  .vehicle-type-check {
    width: 15px;
    height: 15px;
  }

  .vehicle-type-thumb {
    margin-top: -1rem;
    width: 90px;
    height: 40px;
  }

  .vehicle-type-toggle {
    width: 125px;
  }
</style>
