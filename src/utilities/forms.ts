import type { Ref } from 'vue';
import type { SelectOption } from '@/types/Select';
import type { ValidationError, Validator } from '@/types/Validation';

import { errorMessageDefault, validateProperty } from '@/utilities/validation';

export const getFieldHasError = (errorFromProps: ValidationError, errorFromRef: ValidationError) =>
  errorFromProps !== false || errorFromRef !== false;

export const getSelectOptionsFromStrings = (strings: string[]) =>
  strings.map(
    (option) =>
      ({
        label: option,
        value: option,
      } as SelectOption)
  );

export const getSupportingText = (errorFromProps: ValidationError, errorFromRef: ValidationError) => {
  // error in props takes precedence over validation error
  if (typeof errorFromProps === 'string' && errorFromProps.length > 0) return errorFromProps;

  return typeof errorFromRef === 'string' && errorFromRef.length > 0 ? errorFromRef : errorMessageDefault;
};

export const handleFieldValidation = ({
  error,
  errorFromProps,
  validators,
  value,
}: {
  error: Ref<ValidationError>;
  errorFromProps: ValidationError;
  validators?: Validator[];
  value: Ref<string>;
}) => {
  // error in props takes precedence over validation error
  error.value = errorFromProps;

  if (!errorFromProps && validators) {
    const validation = validateProperty(value.value, validators);

    if (!validation.valid) {
      error.value = validation.message;
    }
  }
};
