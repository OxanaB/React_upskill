import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import classNames from 'classnames';
import { InputFieldProps } from '../../interfaces/InputFieldProps';

import './Input.scss';

const InputPasswordField = ({ errors, ...props }: InputFieldProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { type, ...rest } = props;
  return (
    <div className={classNames('input-field', 'input-field--password')}>
      <input type={isVisible ? 'text' : type} {...rest} />
      <Icon
        iconName={isVisible ? 'icon-eye--active' : 'icon-eye'}
        onClick={() => setIsVisible(!isVisible)}
      />
      <div className="input-field--errors">{errors || null}</div>
    </div>
  );
};

export default InputPasswordField;
