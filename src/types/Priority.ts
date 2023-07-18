export const PRIORITY = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY];
