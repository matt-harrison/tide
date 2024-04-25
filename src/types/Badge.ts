export const BADGE = {
  JUST_LISTED: 'Just listed',
  NATIONWIDE: 'Nationwide',
  REDUCED: 'Reduced',
  UPDATED: 'Updated',
} as const;

export const BADGE_PREMIUM = {
  PREMIUM: 'Premium',
  PREMIUM_SELECT: 'Premium SELECT',
} as const;

export const BADGE_TRUSTED = {
  YEARS_10: '10',
  YEARS_15: '15',
  YEARS_5: '5',
} as const;

export type Badge = (typeof BADGE)[keyof typeof BADGE];
export type BadgePremium = (typeof BADGE_PREMIUM)[keyof typeof BADGE_PREMIUM];
export type BadgeTrustedYears = (typeof BADGE_TRUSTED)[keyof typeof BADGE_TRUSTED];
