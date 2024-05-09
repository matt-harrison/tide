import type { Ref } from 'vue';

import type { RangeData } from '@/types/FacetRange';
import type { StringInput } from '@/types/Form';
import type { ValidationResult } from '@/types/Validation';

import { priceToNumber } from '@/utilities/format';

export const errorMessageDefault = 'Please enter a valid value.';

export const noError = {
  message: '',
  valid: true,
} as Readonly<ValidationResult>;

export function checkFormat(format: RegExp) {
  return (value: string): ValidationResult => {
    let result = noError;
    if (!value.trim().match(format)) {
      result = {
        message: 'Invalid Entry',
        valid: false,
      };
    }
    return result;
  };
}

export function checkLength(minlength?: number, maxlength?: number) {
  return (value: string): ValidationResult => {
    const valid = getFieldLengthIsValid({
      maxlength,
      minlength,
      value,
    });

    let message = valid ? '' : errorMessageDefault;

    if (maxlength && minlength) {
      message = `Please enter a value between ${minlength} and ${maxlength} characters in length.`;
    }

    return {
      message,
      valid,
    };
  };
}

export const getFieldLengthIsValid = ({
  maxlength,
  minlength,
  value,
}: {
  maxlength?: number;
  minlength?: number;
  value: string;
}) => {
  const tooShort = maxlength && value.length > maxlength;
  const tooLong = minlength && value.length < minlength;
  return tooShort || tooLong ? false : true;
};

export function getMaxRangeIsValid({ min }: Pick<RangeData, 'min'>, type?: 'price') {
  return (value: string): ValidationResult => {
    let newMax: number | null = type === 'price' ? priceToNumber(value) : Number(value);
    newMax = !isNaN(newMax) ? newMax : null;
    if (min && newMax) {
      if (newMax >= min) {
        return {
          message: '',
          valid: true,
        };
      } else {
        return {
          message: `Must be greater than min`,
          valid: false,
        };
      }
    } else {
      return noError;
    }
  };
}

export function getMinRangeIsValid({ max }: Pick<RangeData, 'max'>, type?: 'price') {
  return (value: string): ValidationResult => {
    let newMin: number | null = type === 'price' ? priceToNumber(value) : Number(value);
    newMin = !isNaN(newMin) ? newMin : null;
    if (max && newMin) {
      if (newMin <= max) {
        return {
          message: '',
          valid: true,
        };
      } else {
        return {
          message: `Must be less than max`,
          valid: false,
        };
      }
    } else {
      return noError;
    }
  };
}

export function validateFieldsFromRefs(fields: { [key: string]: Ref<StringInput | null> }) {
  let valid = true;
  for (const key in fields) {
    if (fields[key].value?.required) {
      const value = fields[key].value?.value;
      valid = valid && !!value && value.trim() !== '';
    }
    const error = fields[key].value?.error;
    valid = valid && !error;
  }
  return valid;
}

export function validateProperty(value: string, validators: ((value: string) => ValidationResult)[]): ValidationResult {
  for (const validator of validators) {
    const validation = validator(value);
    if (!validation.valid) {
      return validation;
    }
  }

  return {
    message: '',
    valid: true,
  };
}
