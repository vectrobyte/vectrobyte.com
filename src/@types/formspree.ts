export type ValidationError<T> = {
  code: string;
  field: T;
  message: string;
};

export type FormSpreeError<T> = {
  error: string;
  errors: ValidationError<T>[];
};
