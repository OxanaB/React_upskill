import React from 'react';
import classNames from 'classnames';

import './Loader.scss';

interface LoaderProps {
  init?: boolean;
}

export const Loader = ({ init }: LoaderProps) => (
  <div className={classNames('loader', init && 'initial')}>
    {[...Array(3).keys()].map((item, index) => (
      <div key={index + item} className="loader-circle" />
    ))}
  </div>
);
