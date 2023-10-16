export type ValidationResult = {
  valid: boolean;
  message: string;
};

export type ValidationError = string | boolean;

export type Validator = (value: string) => ValidationResult;
