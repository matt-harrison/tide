import { formatNumber, formatPhone, formatPrice } from '../utilities/format';

export type Formatted = {
  [key: string]: string | string[] | number;
};

export const FORMAT = {
  NUMBER: formatNumber,
  PHONE: formatPhone,
  PRICE: formatPrice,
} as const;

export const FORMAT_REGEX = {
  alpha: /^[a-zA-Z]+$/g,
  alphaNumberOrEmpty: /^$|^[a-z0-9]+$/i,
  alphaSpace: /^[a-zA-Z ]+$/g,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  numberFormatted: /^$|(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/,
  phone: /^(?:\d{3}-\d{3}-\d{4}|\d{1}-\d{3}-\d{3}-\d{4})?$/,
  price: /(?=.)^\$?(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/,
};
