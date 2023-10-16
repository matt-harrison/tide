import type { FormValueTransformer } from '@/types/Form';
import type { SelectOption } from '@/types/Select';
import type { TextInputType } from '@/types/TextInput';
import type { ValidationError, Validator } from '@/types/Validation';

interface BooleanValue {
  value?: boolean;
}

interface CheckboxField extends GenericField, BooleanValue {
  checked?: boolean;
  indeterminate?: boolean;
}

interface GenericField {
  disabled?: boolean;
  error?: ValidationError;
  label?: string;
  name: string;
  required?: boolean;
  transformValue?: FormValueTransformer;
  validators?: Validator[];
}

interface SelectField extends GenericField, StringValue {
  options: SelectOption[];
  placeholder?: string;
}

interface StringValue {
  value?: string;
}

interface TextareaField extends GenericField, StringValue {
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  value?: string;
}

interface TextField extends GenericField, StringValue {
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  type?: TextInputType;
  value?: string;
}

export type BooleanField = CheckboxField;
export type Field = SelectField | TextField | TextareaField | CheckboxField;
export type StringField = SelectField | TextField | TextareaField;
export type { BooleanValue, StringValue };
export type { CheckboxField, GenericField, SelectField, TextareaField, TextField };
