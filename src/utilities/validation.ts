import type { Ref } from 'vue';
import type { StringField } from '@/types/Field';
import type { ValidationResult } from '@/types/Validation';

export function checkFormat(format: RegExp) {
  return (value: string): ValidationResult => {
    let result = {
      message: '',
      valid: true,
    };

    if (!value.trim().match(format)) {
      result = {
        message: errorMessageDefault,
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

  return !tooShort && !tooLong;
};

export const errorMessageDefault = 'Please enter a valid value.';

export function validateFieldsFromRefs(fields: { [key: string]: Ref<StringField | null> }) {
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
