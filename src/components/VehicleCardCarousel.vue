<script lang="ts" setup>
  import type { Vehicle } from '@/types/Vehicle';

  import SiteCarousel from '@/components/SiteCarousel.vue';
  import VehicleCard from '@/components/VehicleCard.vue';

  type Props = {
    getIsFavorite: boolean;
    handleFavoriteClick: (adId: number) => void;
    isTouchscreen: boolean | undefined;
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
    :is-touchscreen="props.isTouchscreen"
    :offset-x="offsetX"
    class="vehicle-card-carousel"
  >
    <VehicleCard
      :is-favorite="props.getIsFavorite(vehicle.adId)"
      :key="vehicle.adId"
      :vehicle="vehicle"
      @handle-favorite-click="props.handleFavoriteClick"
      v-for="vehicle in props.vehicles"
    />
  </SiteCarousel>
</template>

<style scoped></style>
