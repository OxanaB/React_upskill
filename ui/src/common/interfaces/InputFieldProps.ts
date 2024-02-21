import { InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string;
  required?: boolean;
  label?: string;
  isCheck?: boolean;
  setIsCheck?: (isCheck: boolean) => boolean;
  children?: React.ReactNode | React.ReactNode[];
}
