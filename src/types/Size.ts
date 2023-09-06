export const SIZE = {
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type Size = (typeof SIZE)[keyof typeof SIZE];
