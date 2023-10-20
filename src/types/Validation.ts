import { FORMAT_REGEX } from '@/types/Formatted';
import { checkFormat } from '@/utilities/validation';

export const VALIDATOR = {
  ALPHA_NUMBER_EMPTY: checkFormat(FORMAT_REGEX.alnumOrEmpty),
  ALPHA_SPACE: checkFormat(FORMAT_REGEX.alphaAndSpace),
  EMAIL: checkFormat(FORMAT_REGEX.email),
  NUMBER: checkFormat(FORMAT_REGEX.formattedNum),
  PHONE: checkFormat(FORMAT_REGEX.phone),
} as const;

export type ValidationResult = {
  valid: boolean;
  message: string;
};

export type ValidationError = string | boolean;

export type Validator = (value: string) => ValidationResult;
