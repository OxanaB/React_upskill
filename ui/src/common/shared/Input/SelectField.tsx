import * as React from 'react';
import Select from 'react-select';
import { User } from '../../interfaces/UserModel';
import { FormikErrors } from 'formik';

interface SelectFieldProps {
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined,
  ) => Promise<void> | Promise<FormikErrors<User>>;
  options: Array<{ value: string; label: string }>;
  current?: any;
  name: string;
}

export const SelectField = ({
  options,
  onChange,
  current,
  name,
}: SelectFieldProps) => {
  const handleChange = (value: any) => {
    onChange(name, value.value || '');
  };

  return <Select options={options} onChange={handleChange} value={current} />;
};
