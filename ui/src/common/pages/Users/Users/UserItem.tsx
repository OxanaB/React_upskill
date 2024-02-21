import React from 'react';
import { Link } from 'react-router-dom';
import noavatar from '../../../../assets/images/no-avatar.png';
import { CurrentUserTags } from '../../../components/CurrentUser/CurrentUserTags';
import { User } from '../../../interfaces/UserModel';
import classNames from 'classnames';
import moment from 'moment';

interface UserItemProps {
  user: User;
  filter?: {
    value: string;
    label: string;
  };
}

export const UserItem = ({ user, filter }: UserItemProps) => (
  <div className="users__item">
    <div className="users__item-main">
      <img
        className="users__item-main--photo"
        src={user.avatar || noavatar}
        alt="avatar"
      />
      <Link to={`/users/${user._id}`}>
        {user.firstName} {user.lastName}
      </Link>
      <span className="users__item-main--position">
        {user.position || user.role}
      </span>
      <span
        className={classNames(
          user.status === 'Looking for'
            ? 'users__item-main--status-active'
            : 'users__item-main--status',
        )}
      >
        {user.status}
      </span>
      {user.salary && (
        <span className="users__item-main--salary">from {user.salary}$</span>
      )}
    </div>
    <span className="users__item-content--date">
      {filter?.value === '-createdAt'
        ? moment(user?.createdAt).format('D MMM')
        : moment(user?.updatedAt).format('D MMM')}
    </span>
    {user.tags && user.tags.length ? (
      <div className="users__item-content">
        <CurrentUserTags tags={user.tags} />
        {user.city && (
          <span className="users__item-content--city">{user.city}</span>
        )}
      </div>
    ) : (
      ''
    )}
  </div>
);
