<script lang="ts" setup>
  import type { VehicleRaw } from '@/types/Vehicle';

  import axios from 'axios';

  import VehicleCardCarousel from '@/components/VehicleCardCarousel.vue';

  import { useFeaturedListingStore } from '@/stores/FeaturedListingStore';

  const featuredListingStore = useFeaturedListingStore();

  const adDataRaw = document.querySelector('[data-vue-selector="ad-data"]')?.innerHTML;

  const adData = adDataRaw ? JSON.parse(adDataRaw) : {};

  const params = {
    ad_id: adData.id || '',
    dealer_group_id: '',
    dealer_id: adData.dealerId || '',
    make: adData.details.Make || '',
    make_id: '',
    model: adData.details.Model || '',
  };

  const query = new URLSearchParams(params);
  const url = query.toString();

  axios
    .get(`/api/search-results-data/vdp-featured?${url}`)
    .then((response) => {
      const vehiclesRaw: VehicleRaw[] = response.data.results;

      featuredListingStore.setVehicles(vehiclesRaw);
    })
    .catch((error) => {
      console.error(error);
    });
</script>

<template>
  <VehicleCardCarousel :vehicles="featuredListingStore.vehicles" />
</template>
