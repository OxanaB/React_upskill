import React from 'react';
import { ContainerProps } from '../../interfaces/ContainerProps';
import classNames from 'classnames';

export const DefaultPageLeftContainer = ({
  children,
  leftblockName,
}: ContainerProps) => (
  <>
    <div className={classNames('defaultpage__inner-left', { leftblockName })}>
      <div className="defaultpage__inner-block defaultpage__leftblock">
        {children}
      </div>
    </div>
  </>
);

export const LeftBlockContainer = ({ children }: ContainerProps) => (
  <div className="defaultpage__inner-block defaultpage__leftblock">
    {children}
  </div>
);
