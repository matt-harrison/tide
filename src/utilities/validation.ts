import type { Ref } from 'vue';

import type { RangeData } from '@/types/FacetRange';
import type { SelectOption } from '@/types/Select';
import type { StringInput } from '@/types/Form';
import type { ValidationError, ValidationLength, ValidationResult, Validator } from '@/types/Validation';

import { priceToNumber } from '@/utilities/format';

export const errorMessageDefault = 'Please enter a valid value.';

export const noError = {
  message: '',
  valid: true,
} as Readonly<ValidationResult>;

export const checkFormat = (format: RegExp) => {
  return (value: string): ValidationResult => {
    let result = noError;

    if (!value.trim().match(format)) {
      result = {
        message: errorMessageDefault,
        valid: false,
      };
    }

    return result;
  };
};

export const getErrorMessage = (errorFromProps: ValidationError, errorFromRef: ValidationError) => {
  // error in props takes precedence over validation error
  if (typeof errorFromProps === 'string' && errorFromProps.length > 0) return errorFromProps;

  return typeof errorFromRef === 'string' && errorFromRef.length > 0 ? errorFromRef : errorMessageDefault;
};

export const getFieldHasError = (errorFromProps: ValidationError, errorFromRef: ValidationError) =>
  errorFromProps !== false || errorFromRef !== false;

export const getFieldLengthIsValid = ({ maxlength, minlength, value }: ValidationLength) => {
  const tooShort = maxlength && value.length > maxlength;
  const tooLong = minlength && value.length < minlength;

  return !tooShort && !tooLong;
};

export const getMaxRangeIsValid = ({ min }: Pick<RangeData, 'min'>, type?: 'price') => {
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
};

export const getMinRangeIsValid = ({ max }: Pick<RangeData, 'max'>, type?: 'price') => {
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
};

export const getSelectOptionsFromStrings = (strings: string[]) =>
  strings.map(
    (option) =>
      ({
        label: option,
        value: option,
      } as SelectOption)
  );

export const handleFieldValidation = ({
  error,
  errorFromProps,
  maxlength,
  minlength,
  validators,
  value,
}: {
  error: Ref<ValidationError>;
  errorFromProps: ValidationError;
  maxlength?: number;
  minlength?: number;
  validators?: Validator[];
  value: Ref<string>;
}) => {
  // error in props takes precedence over validation error

  error.value = errorFromProps ? errorFromProps : false;

  if (!error.value && validators) {
    const validation = validateProperty(value.value, validators);

    if (!validation.valid) {
      error.value = validation.message;
    }
  }

  if (!error.value && (maxlength || minlength)) {
    const lengthvalidation = validateLength({
      maxlength,
      minlength,
      value: value.value,
    });

    if (!lengthvalidation.valid) {
      error.value = lengthvalidation.message;
    }
  }
};

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

export const validateLength = ({ maxlength, minlength, value }: ValidationLength): ValidationResult => {
  const response = {
    message: '',
    valid: true,
  };

  response.valid = getFieldLengthIsValid({
    maxlength,
    minlength,
    value,
  });

  if (response.valid) return response;

  response.message = errorMessageDefault;

  if (maxlength && minlength) {
    response.message = `Please enter a value between ${minlength} and ${maxlength} characters in length.`;
  } else if (maxlength) {
    response.message = `Please enter a value no more than ${maxlength} characters in length.`;
  } else if (minlength) {
    response.message = `Please enter a value no less than ${minlength} characters in length.`;
  }

  return response;
};

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
