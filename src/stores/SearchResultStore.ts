import axios from 'axios';
import { defineStore } from 'pinia';

import type { Raw } from '@/types/Raw';
import type { Vehicle } from '@/types/Vehicle';

import { mapResults } from '@/utilities/map';

type State = {
  vehicles: Vehicle[];
};

const adData = (window as any).adData || null;

export const useSearchResultStore = defineStore('searchResultStore', {
  actions: {
    getVehicles() {
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
    },
    setVehicles(vehicles: Vehicle[]) {
      this.vehicles = vehicles;
    },
  },
  state: (): State => ({
    vehicles: [],
  }),
});
