<script lang="ts" setup>
  import type { Vehicle } from '@/types/Vehicle';

  import SiteCarousel from '@/components/SiteCarousel.vue';
  import VehicleCard from '@/components/VehicleCard.vue';

  type Props = {
    offsetX?: number;
    vehicles: Vehicle[];
  };

  const props = withDefaults(defineProps<Props>(), {
    offsetX: 0,
  });
</script>

<template>
  <SiteCarousel
    :card-width="208"
    :gap="16"
    :offset-x="offsetX"
    class="vehicle-card-carousel"
  >
    <VehicleCard
      :key="vehicle.adId"
      :vehicle="vehicle"
      v-for="vehicle in props.vehicles"
    />
  </SiteCarousel>
</template>

<style scoped></style>
