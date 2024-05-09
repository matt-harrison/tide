import type { SelectOption } from '@/types/Select';

export const FACET_COMPONENT_ID_RANGE = {
  GROSS_WEIGHT: 'grossWeight',
  LENGTH: 'vehicleLength',
  MILEAGE: 'mileage',
  PRICE: 'price',
  SLEEPING_CAPACITY: 'sleepingCapacity',
  SLIDEOUTS: 'slideouts',
  YEAR: 'vehicleYear',
} as const;

export type FacetComponentIdRange = (typeof FACET_COMPONENT_ID_RANGE)[keyof typeof FACET_COMPONENT_ID_RANGE];

export type RangeData = {
  min: number | null;
  max: number | null;
};

const GROSS_WEIGHT_MIN = 1000;
const GROSS_WEIGHT_MAX = 12000;
export const GROSS_WEIGHT_OPTIONS: SelectOption[] = [
  {
    label: 'Any',
    value: null,
  },
  ...Array.from({ length: Math.floor((GROSS_WEIGHT_MAX - GROSS_WEIGHT_MIN) / 1000) + 1 }, (_, index) => ({
    label: (GROSS_WEIGHT_MAX - index * 1000).toString(),
    value: (GROSS_WEIGHT_MAX - index * 1000).toString(),
  })),
];

const SLEEP_CAP_MIN = 1;
const SLEEP_CAP_MAX = 10;
export const SLEEPING_CAPACITY_OPTIONS: SelectOption[] = [
  {
    label: 'Any',
    value: null,
  },
  ...Array.from({ length: SLEEP_CAP_MAX - SLEEP_CAP_MIN + 1 }, (_, index) => ({
    label: (SLEEP_CAP_MAX - index).toString(),
    value: (SLEEP_CAP_MAX - index).toString(),
  })),
];

const SLIDEOUT_MIN = 0;
const SLIDEOUT_MAX = 5;
export const SLIDEOUT_OPTIONS: SelectOption[] = [
  {
    label: 'Any',
    value: null,
  },
  ...Array.from({ length: SLIDEOUT_MAX - SLIDEOUT_MIN + 1 }, (_, index) => ({
    label: (SLIDEOUT_MAX - index).toString(),
    value: (SLIDEOUT_MAX - index).toString(),
  })),
];

const LENGTH_MIN = 10;
const LENGTH_MAX = 50;
export const LENGTH_OPTIONS: SelectOption[] = [
  {
    label: 'Any',
    value: null,
  },
  ...Array.from({ length: LENGTH_MAX - LENGTH_MIN + 1 }, (_, index) => ({
    label: (LENGTH_MAX - index).toString(),
    value: (LENGTH_MAX - index).toString(),
  })),
];

const YEAR_MIN = 1900;
const today = new Date();
const YEAR_MAX = today.getFullYear() + 2;
export const YEAR_OPTIONS: SelectOption[] = [
  {
    label: 'Any',
    value: null,
  },
  ...Array.from({ length: YEAR_MAX - YEAR_MIN + 1 }, (_, index) => ({
    label: (YEAR_MAX - index).toString(),
    value: (YEAR_MAX - index).toString(),
  })),
];
