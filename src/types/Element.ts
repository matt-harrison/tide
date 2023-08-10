export const ELEMENT = {
  ANCHOR: 'anchor',
  BUTTON: 'button',
} as const;

export type Element = (typeof ELEMENT)[keyof typeof ELEMENT];
