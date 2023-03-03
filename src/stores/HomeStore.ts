import { defineStore } from 'pinia';

import dummyVehicles from '@/data/dummy-vehicles.json';

import type { Vehicle } from '@/types/Vehicle';

type State = {
  vehicles: Vehicle[];
};

export const useHomeStore = defineStore('homeStore', {
  state: (): State => ({
    vehicles: dummyVehicles,
  }),
});
