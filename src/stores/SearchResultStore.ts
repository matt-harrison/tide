import { defineStore } from 'pinia';

import type { VehicleRaw } from '@/types/Vehicle';

// Dummy API response to circumvent local/prod cross origin violation.
import response from '@/data/search-results-data.json';

type State = {
  vehicles: VehicleRaw[];
};

export const useSearchResultStore = defineStore('searchResultStore', {
  actions: {
    getVehicles() {
      const results: unknown = response.results;
      const vehicles: VehicleRaw[] = results as VehicleRaw[];

      this.setVehicles(vehicles);
    },
    setVehicles(vehicles: VehicleRaw[]) {
      this.vehicles = vehicles;
    },
  },
  state: (): State => ({
    vehicles: [],
  }),
});
