export const SIZE = {
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export const SIZE_BUTTON = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type Size = (typeof SIZE)[keyof typeof SIZE];
export type SizeButton = (typeof SIZE_BUTTON)[keyof typeof SIZE_BUTTON];
