export const REALM = {
  AERO: 'aero',
  ATV: 'atv',
  BOATLINE: 'boatline',
  CYCLE: 'cycle',
  EQUIP: 'equip',
  PWC: 'pwc',
  RV: 'rv',
  SNOW: 'snow',
  TRUCK: 'truck',
} as const;

export type Realm = (typeof REALM)[keyof typeof REALM];
