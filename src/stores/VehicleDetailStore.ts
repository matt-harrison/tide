// import axios from 'axios';
import { defineStore } from 'pinia';

import type { VehicleRaw } from '@/types/Vehicle';

// Dummy API response to circumvent local/prod cross origin violation.
import dummyResponse from '@/data/dummy-search-results.json';

type State = {
  vehicle?: VehicleRaw;
};

export const useVehicleDetailStore = defineStore('vehicleDetailStore', {
  actions: {
    getVehicle() {
      const results: unknown = dummyResponse.results;
      const vehicles: VehicleRaw[] = results as VehicleRaw[];

      this.setVehicle(vehicles[0]);

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
          const vehiclesRaw: VehicleRaw[] = response.data.results;

          this.setVehicle(vehiclesRaw[0]);
        })
        .catch((error) => {
          console.error(error);
        });
      */
    },
    setVehicle(vehicle: VehicleRaw) {
      this.vehicle = vehicle;
    },
  },
  state: (): State => ({
    vehicle: undefined,
  }),
});
