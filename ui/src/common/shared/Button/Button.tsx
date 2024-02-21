import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  btnTheme?: string;
  btnColor?: string;
}

export const Button = ({
  btnTheme,
  btnColor = 'primary',
  children,
  ...props
}: ButtonProps) => (
  <button className={classNames('btn', btnTheme, btnColor)} {...props}>
    {children}
  </button>
);
