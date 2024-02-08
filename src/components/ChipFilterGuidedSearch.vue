<script lang="ts" setup>
  import type { VehicleType } from '@/types/VehicleType';

  import BasicChipFilter from '@/components/BasicChipFilter.vue';

  type Props = {
    isActive: boolean;
    vehicleType: VehicleType;
  };

  const props = defineProps<Props>();
</script>

<template>
  <BasicChipFilter
    :is-active="props.isActive"
    :label="props.vehicleType.label"
    class="chip-guided-search-toggle tide-shrink-none"
  >
    <img
      :alt="vehicleType.label"
      :src="vehicleType.img"
      class="chip-guided-search-toggle-thumb tide-margin-bottom-1/4"
    />
  </BasicChipFilter>
</template>

<style>
  .chip-guided-search-toggle {
    min-width: 125px;
    height: 97px;
  }

  .chip-guided-search-toggle-thumb {
    width: auto;
    height: 44px;
  }
</style>
