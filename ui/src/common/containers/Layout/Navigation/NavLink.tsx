import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const isActive =
    location.pathname === to ||
    (location.pathname + location.search).includes(to);
  return (
    <li
      className={classNames(
        'menu__list-item',
        isActive && 'menu__list-item--active',
      )}
    >
      <Link to={to}>{children}</Link>
    </li>
  );
};
