export const TIER = {
  TIER_1: 'tier-1',
  TIER_2: 'tier-2',
  TIER_3: 'tier-3',
} as const;

export type Tier = (typeof TIER)[keyof typeof TIER];
