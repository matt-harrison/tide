import { defineStore } from 'pinia';

import type { Vehicle } from '@/types/Vehicle';

// Dummy API response to circumvent local/prod cross origin violation.
import { dummyVehicles } from '@/data/dummy-vehicles';

type State = {
  featuredListings: Vehicle[];
  recommendedVehicles: Vehicle[];
};

export const useHomeStore = defineStore('homeStore', {
  actions: {
    getVehicles() {
      this.setVehicles(dummyVehicles);
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
