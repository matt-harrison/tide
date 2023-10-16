import type { FormValueTransformer } from '@/types/Form';
import type { SelectOption } from '@/types/Select';
import type { TextInputType } from '@/types/TextInput';
import type { ValidationError, Validator } from '@/types/Validation';

interface GenericField {
  disabled?: boolean;
  error?: ValidationError;
  label?: string;
  name: string;
  required?: boolean;
  transformValue?: FormValueTransformer;
  validators?: Validator[];
}

interface StringValue {
  value?: string;
}

interface BooleanValue {
  value?: boolean;
}

export type SelectField = GenericField &
  StringValue & {
    options: SelectOption[];
    placeholder?: string;
  };

export type TextField = GenericField &
  StringValue & {
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    type?: TextInputType;
    value?: string;
  };

export type TextareaField = GenericField &
  StringValue & {
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    value?: string;
  };

export type CheckboxField = GenericField &
  BooleanValue & {
    checked?: boolean;
    indeterminate?: boolean;
  };

export type StringField = SelectField | TextField | TextareaField;
export type BooleanField = CheckboxField;
export type Field = SelectField | TextField | TextareaField | CheckboxField;
