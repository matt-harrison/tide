import type { StringField } from '@/types/Field';
import type { ValidationResult } from '@/types/Validation';
import type { Ref } from 'vue';

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

export function checkFormat(format: RegExp) {
  return (value: string): ValidationResult => {
    let result = {
      message: '',
      valid: true,
    };
    if (!value.trim().match(format)) {
      result = {
        message: 'Invalid Entry',
        valid: false,
      };
    }
    return result;
  };
}

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

export const getFieldLengthIsValid = ({
  maxLength,
  minLength,
  value,
}: {
  maxLength?: number;
  minLength?: number;
  value: string;
}) => {
  const tooShort = maxLength && value.length > maxLength;
  const tooLong = minLength && value.length < minLength;
  return tooShort || tooLong ? false : true;
};
