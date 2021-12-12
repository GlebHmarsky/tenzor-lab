export type TComponents = {
  fieldName: string;
  isStrict: boolean;
  key: keyof TFieldsProps;
  type?: string;
  placeholder?: string;
  component?: JSX.Element;
};

export type TCreateFieldProps<T = string> = {
  isCorrect: boolean;
  value: T;
};

export type TFieldsProps = {
  firstName: TCreateFieldProps;
  middleName: TCreateFieldProps;
  lastName: TCreateFieldProps;
  email: TCreateFieldProps;
  phone: TCreateFieldProps;
};

