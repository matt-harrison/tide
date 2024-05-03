import { FORMAT_REGEX } from '@/types/Formatted';
import { checkFormat } from '@/utilities/validation';

export const VALIDATOR = {
  ALPHA_NUMBER_EMPTY: checkFormat(FORMAT_REGEX.alphaNumberOrEmpty),
  ALPHA_SPACE: checkFormat(FORMAT_REGEX.alphaSpace),
  EMAIL: checkFormat(FORMAT_REGEX.email),
  NUMBER: checkFormat(FORMAT_REGEX.numberFormatted),
  PHONE: checkFormat(FORMAT_REGEX.phone),
} as const;

export type ValidationError = string | boolean;
export type ValidationResult = {
  valid: boolean;
  message: string;
};

export type Validator = (value: string) => ValidationResult;
