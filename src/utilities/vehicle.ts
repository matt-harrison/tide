import type { BreadCrumb } from '../types/BreadCrumb';
import type { Detail } from '../types/Detail';
import type { VehicleDetail } from '../types/VehicleDetail';

import dummyVehicleData from '../data/dummy-vehicle-detail.json';
import { formatPhone } from './format';
import { realm } from '../config/main.config';

// hacky mapping of vehicle details into a VehicleDetail object.
// TODO: do a proper API call or something once we're able to dedicate time to it.
// we'll also want to add this to pinia
export const getVehicleDetail = () => {
  // eslint-disable-next-line no-constant-condition
  if (true) return dummyVehicleData as VehicleDetail;
};

export const getVehicleTitle = (vehicle: VehicleDetail) => {
  return `${vehicle.year} ${vehicle.makeDisplayName} ${vehicle.modelDisplayName}`;
};

export const getSellerNameLocation = (vehicle: VehicleDetail) => {
  return [vehicle.dealerName, vehicle.location].join(' • ');
};

export const getVehiclePrice = (vehicle: VehicleDetail) => {
  return vehicle.price;
};

export const getVehiclePhone = (vehicle: VehicleDetail) => {
  return formatPhone(Number(vehicle.phone));
};

export const getVehicleThumbnail = (vehicle: VehicleDetail) => {
  return vehicle.photos[0].url;
};

export const getVehiclePhoneHref = (vehicle: VehicleDetail) => {
  return `tel:${formatPhone(Number(vehicle.phone))}`;
};

export const getDetailItems = (vehicle: VehicleDetail): Detail[] => {
  return Object.keys(vehicle.details).map((key) => {
    return {
      label: key,
      value: vehicle.details[key],
    };
  });
};

export const getSearchPills = (vehicle: VehicleDetail) => {
  return vehicle.breadcrumbs.map((breadcrumb) => {
    return {
      label: breadcrumb.text,
      url: breadcrumb.link,
    };
  });
};

export const getBreadcrumbs = (vehicle: VehicleDetail): BreadCrumb[] => {
  return [
    {
      label: 'Home',
      url: '#',
    },
    {
      label: `Browse ${realm.label.plural}`,
      url: '#',
    },
    {
      label: 'Search results',
      url: '#',
    },
    {
      label: getVehicleTitle(vehicle),
    },
  ];
};
