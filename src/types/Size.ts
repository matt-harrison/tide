export const SIZE_BUTTON = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export const SIZE_ICON = {
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type SizeButton = (typeof SIZE_BUTTON)[keyof typeof SIZE_BUTTON];
export type SizeIcon = (typeof SIZE_ICON)[keyof typeof SIZE_ICON];
