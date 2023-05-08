// import axios from 'axios';
import { defineStore } from 'pinia';

import type { Raw } from '@/types/Raw';
import type { Vehicle } from '@/types/Vehicle';

import { mapResults } from '@/utilities/map';

// Dummy API response to circumvent local/prod cross origin violation.
import dummyResponse from '@/data/dummy-search-results.json';

type State = {
  featuredListings: Vehicle[];
  recommendedVehicles: Vehicle[];
};

// const adData = (window as any).adData || null;

export const useHomeStore = defineStore('homeStore', {
  actions: {
    getVehicles() {
      const results: unknown = dummyResponse.results;
      const vehicles: VehicleRaw[] = results as VehicleRaw[];

      this.setVehicles(vehicles);

      /*
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
      const querystring = query.toString();

      axios
        .get(`/search-results-data/vdp-featured?${querystring}`)
        .then((response) => {
          const vehiclesRaw: Raw[] = response.data.results;
          const vehicles: Vehicle[] = mapResults(vehiclesRaw);

          this.setVehicles(vehicles);
        })
        .catch((error) => {
          console.error(error);
        });
      */
    },
    setVehicles(vehicles: Vehicle[]) {
      this.featuredListings = vehicles;
      this.recommendedVehicles = vehicles;
    },
  },
  state: (): State => ({
    featuredListings: [],
    recommendedVehicles: [],
  }),
});
