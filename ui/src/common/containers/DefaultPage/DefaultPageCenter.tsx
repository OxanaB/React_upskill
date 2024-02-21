import React from 'react';
import { ContainerProps } from '../../interfaces/ContainerProps';
import classNames from 'classnames';

export const DefaultPageCenterContainer = ({
  children,
  centerInnerName,
}: ContainerProps) => (
  <div className={classNames('defaultpage__inner-center', centerInnerName)}>
    {children}
  </div>
);

export const PageCenterBlockContainer = ({
  children,
  centerBlockName,
}: ContainerProps) => (
  <div className={classNames('defaultpage__inner-block', centerBlockName)}>
    {children}
  </div>
);
