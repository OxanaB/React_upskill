import React from 'react';
import classNames from 'classnames';

import './Icon.scss';

interface SpanIconComponent {
  iconName: string;
  onClick?: any;
}

const Icon = ({ iconName, onClick }: SpanIconComponent) => (
  <span className={classNames('icon', iconName)} onClick={onClick}></span>
);

export default Icon;
