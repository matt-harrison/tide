import { defineStore } from 'pinia';

import dummyVehicles from '@/data/dummy-vehicles.json';

import type { Vehicle } from '@/types/Vehicle';

type State = {
  vehicle: Vehicle;
};

export const useVehicleDetailStore = defineStore('vehicleDetailStore', {
  state: (): State => ({
    vehicle: dummyVehicles[0],
  }),
});
