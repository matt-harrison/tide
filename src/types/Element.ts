export const ELEMENT = {
  ANCHOR: 'anchor',
  BUTTON: 'button',
} as const;

export const ELEMENT_PAGINATION = {
  ANCHOR: 'anchor',
  BUTTON: 'button',
  DIV: 'div',
} as const;

export type Element = (typeof ELEMENT)[keyof typeof ELEMENT];
export type ElementPagination = (typeof ELEMENT_PAGINATION)[keyof typeof ELEMENT_PAGINATION];
