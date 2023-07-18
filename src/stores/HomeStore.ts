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
      const vehiclesRaw: Raw[] = results as Raw[];
      const vehicles: Vehicle[] = mapResults(vehiclesRaw);

      this.setVehicles(vehicles);
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
