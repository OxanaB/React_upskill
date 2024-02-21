import React from 'react';
import { Link } from 'react-router-dom';

import './BlockItemInfo.scss';

interface BlockItemInfoProps {
  name: string;
  value: string;
  isLink?: boolean;
  isRedirect?: boolean;
}

export const BlockItemInfo = ({
  name,
  value,
  isLink = false,
  isRedirect = false,
}: BlockItemInfoProps) => (
  <div className="company__info-item">
    <p>
      {!isRedirect && `${name}: `}
      {isLink ? (
        <a target="_blank" rel="noopener noreferrer" href={value}>
          {value && value.split('//')[1]}
        </a>
      ) : isRedirect ? (
        <Link to={value}>{name}</Link>
      ) : (
        <span className="company__info-item--title">{value}</span>
      )}
    </p>
  </div>
);
