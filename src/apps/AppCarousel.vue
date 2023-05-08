<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';

  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';

  import { useBreakpointStore } from '@/stores/BreakpointStore';
  import { useFavoriteStore } from '@/stores/FavoriteStore';
  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';
  import { useUserAgentStore } from '@/stores/UserAgentStore';

  const breakpointStore = useBreakpointStore();
  const favoriteStore = useFavoriteStore();
  const featuredListingStore = useFeaturedListingStore();
  const userAgentStore = useUserAgentStore();

  featuredListingStore.getVehicles();

  onMounted(() => {
    breakpointStore.initialize();
    userAgentStore.initialize();
  });

  onUnmounted(() => {
    breakpointStore.cleanup();
  });
</script>

<template>
  <VehicleCardCarousel
    :get-is-favorite="favoriteStore.getIsFavorite"
    :handle-favorite-click="favoriteStore.toggleIsFavorite"
    :is-touchscreen="userAgentStore.isTouchscreen"
    :offset-x="32"
    :vehicles="featuredListingStore.vehicles"
  />
</template>
