export const TARGET = {
  BLANK: '_blank',
  SELF: undefined,
} as const;

export type Target = (typeof TARGET)[keyof typeof TARGET];
