import type { SelectOption } from '@/types/Select';
import type { ValidationError, Validator } from '@/types/Validation';
import type { Ref } from 'vue';
import { validateProperty } from '@/utilities/validation';

export const getSelectOptionsFromStrings = (strings: string[]) => {
  return strings.map(
    (option) =>
      ({
        label: option,
        value: option,
      } as SelectOption)
  );
};

export const getSupportingText = (errorFromProps: ValidationError, errorFromRef: ValidationError) => {
  // error in props takes precedence over validation error
  if (typeof errorFromProps === 'string' && errorFromProps.length > 0) return errorFromProps;
  return typeof errorFromRef === 'string' && errorFromRef.length > 0 ? errorFromRef : 'Please enter a valid value.';
};

export const getFieldHasError = (errorFromProps: ValidationError, errorFromRef: ValidationError) => {
  return errorFromProps !== false || errorFromRef !== false;
};

export const handleFieldValidation = ({
  value,
  error,
  errorFromProps,
  validators,
}: {
  value: Ref<string>;
  error: Ref<ValidationError>;
  errorFromProps: ValidationError;
  validators?: Validator[];
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
