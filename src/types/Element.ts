export const ELEMENT = {
  ANCHOR: 'anchor',
  BUTTON: 'button',
} as const;

export const ELEMENT_TEXT_AS_ICON = {
  ANCHOR: 'anchor',
  BUTTON: 'button',
  DIV: 'div',
} as const;

export type Element = (typeof ELEMENT)[keyof typeof ELEMENT];
export type ElementTextAsIcon = (typeof ELEMENT_TEXT_AS_ICON)[keyof typeof ELEMENT_TEXT_AS_ICON];
