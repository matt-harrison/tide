/* eslint-disable vue/sort-keys */

export const PRIORITY = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  FLOATING: 'floating',
} as const;

export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY];
