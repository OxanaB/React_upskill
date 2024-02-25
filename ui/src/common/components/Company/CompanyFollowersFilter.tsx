import React, { FC } from 'react';
import classNames from 'classnames';
import Icon from '../../shared/Icon/Icon';

interface CompanyFollowerFilterProps {
  followers: {
    value: number;
    setFollowers: React.Dispatch<React.SetStateAction<number>>;
  };
  handleSortFollowers: (sortBy: number) => () => void;
}

export const CompanyFollowersFilter: FC<CompanyFollowerFilterProps> = ({
  followers,
  handleSortFollowers,
}) => {
  return (
    <>
      <span
        className={classNames(
          'companies__filter-item--text',
          followers.value !== 0 && 'active',
        )}
        onClick={handleSortFollowers(0)}
      >
        Followers
      </span>
      <div className="companies__filter-item--icons">
        <Icon
          iconName={classNames(
            'icon-filterup',
            followers.value === -1 && 'active',
          )}
          onClick={handleSortFollowers(-1)}
        />
        <Icon
          iconName={classNames(
            'icon-filterup rotate',
            followers.value === 1 && 'active',
          )}
          onClick={handleSortFollowers(1)}
        />
      </div>
    </>
  );
};
