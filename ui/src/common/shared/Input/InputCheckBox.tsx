import React from 'react';
import { InputFieldProps } from '../../interfaces/InputFieldProps';
import './Input.scss';

const InputCheckbox = ({
  label,
  isCheck,
  setIsCheck,
  ...props
}: InputFieldProps) => {
  return (
    <>
      <div className="form-checkbox" onClick={props.onClick}>
        <input
          type="checkbox"
          className="checkbox"
          onChange={e => console.log(e)}
          checked={props.checked}
        />
        <label className="checkbox-label" htmlFor={props.name}>
          {label}
        </label>
      </div>
    </>
  );
};

export default InputCheckbox;
