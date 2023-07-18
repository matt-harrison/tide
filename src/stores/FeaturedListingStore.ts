import { defineStore } from 'pinia';

import type { Vehicle } from '@/types/Vehicle';

// Dummy API response to circumvent local/prod cross origin violation.
import { dummyVehicles } from '@/data/dummy-vehicles';

type State = {
  vehicles: Vehicle[];
};

export const useFeaturedListingStore = defineStore('featuredListingStore', {
  actions: {
    getVehicles() {
      this.setVehicles(dummyVehicles);
    },
    setVehicles(vehicles: Vehicle[]) {
      this.vehicles = vehicles;
    },
  },
  state: (): State => ({
    vehicles: [],
  }),
});
