export const SIZE = {
  LARGE: 'large',
  SMALL: 'small',
} as const;

export type Size = (typeof SIZE)[keyof typeof SIZE];
