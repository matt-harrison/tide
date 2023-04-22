<script lang="ts" setup>
  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';

  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';

  const featuredListingStore = useFeaturedListingStore();

  featuredListingStore.getVehicles();
</script>

<template>
  <VehicleCardCarousel
    :offset-x="32"
    :vehicles="featuredListingStore.vehicles"
  />
</template>
