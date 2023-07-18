import { defineStore } from 'pinia';

import type { VehicleDetail } from '@/types/VehicleDetail';
import { getVehicleDetail } from '@/utilities/vehicle';

type State = {
  vehicle: VehicleDetail;
};

export const useVehicleDetailStore = defineStore('vehicleDetailStore', {
  actions: {
    setVehicleDetail(vehicle: VehicleDetail) {
      this.vehicle = vehicle;
    },
  },
  state: (): State => ({
    vehicle: getVehicleDetail(),
  }),
});
