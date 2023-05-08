// import axios from 'axios';
import { defineStore } from 'pinia';

import type { Raw } from '@/types/Raw';
import type { Vehicle } from '@/types/Vehicle';

import { mapResult } from '@/utilities/map';

// Dummy API response to circumvent local/prod cross origin violation.
import dummyResponse from '@/data/dummy-search-results.json';

type State = {
  vehicle: Vehicle | undefined;
};

// const adData = (window as any).adData || null;

export const useVehicleDetailStore = defineStore('vehicleDetailStore', {
  actions: {
    getVehicle() {
      const results: unknown = dummyResponse.results;
      const vehiclesRaw: Raw[] = results as Raw[];
      const vehicle: Vehicle = mapResult(vehiclesRaw[0]);

      this.setVehicle(vehicle);
    },
    setVehicle(vehicle: Vehicle) {
      this.vehicle = vehicle;
    },
  },
  state: (): State => ({
    vehicle: undefined,
  }),
});
