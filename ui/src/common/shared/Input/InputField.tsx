import React from 'react';
import classNames from 'classnames';
import { InputFieldProps } from '../../interfaces/InputFieldProps';

import './Input.scss';

const InputField = ({
  errors,
  children,
  required,
  ...props
}: InputFieldProps) => {
  return (
    <>
      <div
        className={classNames('input-field', children && 'input-field--icon')}
      >
        {props.label && (
          <label
            className={classNames('input-field__label', required && 'required')}
          >
            {props.label}
          </label>
        )}
        <input {...props} />
        {children}
        {errors && <div className="input-field--errors">{errors}</div>}
      </div>
    </>
  );
};

export default InputField;
