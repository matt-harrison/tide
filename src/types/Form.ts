import type { SelectOptGroup, SelectOption } from '@/types/Select';
import type { TextInputType } from '@/types/TextInput';
import type { ValidationError, Validator } from '@/types/Validation';

interface GenericInput {
  error?: ValidationError;
  transformValue?: FormValueTransformer;
  name: string;
  validators?: Validator[];
  required?: boolean;
  label?: string;
  disabled?: boolean;
}

interface StringValue {
  value?: string;
}

interface BooleanValue {
  value?: boolean;
}

export type SelectInput = GenericInput &
  StringValue & {
    options?: SelectOption[] | readonly SelectOption[];
    placeholder?: string;
    optgroups?: SelectOptGroup[];
  };

export type TextInput = GenericInput &
  StringValue & {
    autocomplete?: boolean;
    maxlength?: number;
    minlength?: number;
    type?: TextInputType;
    placeholder?: string;
    value?: string;
  };

export type TextareaInput = GenericInput &
  StringValue & {
    maxlength?: number;
    minlength?: number;
    placeholder?: string;
    value?: string;
  };

export type CheckboxInput = GenericInput &
  BooleanValue & {
    checked?: boolean;
    indeterminate?: boolean;
  };

export type StringInput = SelectInput | TextInput | TextareaInput;
export type BooleanInput = CheckboxInput;
export type Input = SelectInput | TextInput | TextareaInput | CheckboxInput;

export type FormValueTransformer = (value: string) => string;
