export interface Validation {
  required?: boolean;
  minLength: number;
  isSame?: boolean;
}

export interface Input {
  value: string;
  validation: Validation;
  error: string | null;
  isTouched: boolean
}