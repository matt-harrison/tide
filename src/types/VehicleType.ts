export type VehicleType = {
  img?: string;
  label: string;
};

// TODO: Replace upon determining a method for retrieving live Elasticsearch data.
export const vehicleTypes: VehicleType[] = [
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/fifth-wheel.png', import.meta.url).href,
    label: 'Fifth-wheel',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/class-a.png', import.meta.url).href,
    label: 'Class A',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/class-b.png', import.meta.url).href,
    label: 'Class B',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/class-c.png', import.meta.url).href,
    label: 'Class C',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/fish-house.png', import.meta.url).href,
    label: 'Fish House',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/park-model.png', import.meta.url).href,
    label: 'Park model',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/pop-up-camper.png', import.meta.url).href,
    label: 'Pop-up camper',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/toy-hauler.png', import.meta.url).href,
    label: 'Toy hauler',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/travel-trailer.png', import.meta.url).href,
    label: 'Travel trailer',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/truck-camper.png', import.meta.url).href,
    label: 'Truck camper',
  },
];

// TODO: Replace upon determining a method for retrieving live Elasticsearch data.
export const vehicleMakes: VehicleType[] = [
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/fifth-wheel.png', import.meta.url).href,
    label: 'Airstream',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/class-a.png', import.meta.url).href,
    label: 'Alliance',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/class-b.png', import.meta.url).href,
    label: 'Coachmen',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/class-c.png', import.meta.url).href,
    label: 'Fleetwood',
  },
  {
    img: new URL('@/assets/images/realm/rv/vehicle-types/fish-house.png', import.meta.url).href,
    label: 'Forest River',
  },
];
