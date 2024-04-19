export const ELEMENT = {
  BUTTON: 'button',
  LINK: 'a',
} as const;

export const ELEMENT_TEXT_AS_ICON = {
  BUTTON: 'button',
  DIV: 'div',
  LINK: 'a',
} as const;

export type Element = (typeof ELEMENT)[keyof typeof ELEMENT];
export type ElementTextAsIcon = (typeof ELEMENT_TEXT_AS_ICON)[keyof typeof ELEMENT_TEXT_AS_ICON];
