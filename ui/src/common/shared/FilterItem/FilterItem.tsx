import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

import './FilterItem.scss';

interface FilterItemProps {
  isVisible: boolean;
  name: string;
  children: React.ReactNode;
  toggleFilter: () => void;
}

const FilterItem = ({
  isVisible,
  children,
  name,
  toggleFilter,
}: FilterItemProps) => (
  <div className="filter__item">
    <div className="filter__item-title" onClick={toggleFilter}>
      <h2>{name}</h2>
      <Icon iconName={classNames('icon-arrow', isVisible && 'rotate')} />
    </div>
    <div className="filter__item-content">{children}</div>
  </div>
);

export default FilterItem;
