import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileSelector } from '../../../redux/selectors/profileSelector';
import Profile from './Profile/Profile';

import './Navigation.scss';
import { NavLink } from './NavLink';

const Navigation = () => {
  const { me } = useSelector(getProfileSelector);
  return (
    <>
      <nav className="menu">
        {!me ? (
          <>
            <ul className="menu__list--mobile">
              <NavLink to="/sign-in">Sign In</NavLink>
              <li className="menu__list-item">
                <Link className="btn btn-small primary" to="/sign-up">
                  Sign up
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu__list">
              <NavLink to="/users?sort=-createdAt&page=1">Workers</NavLink>
              <NavLink to="/companies?sort=-createdAt&page=1">
                Companies
              </NavLink>
              <NavLink to="/vacancies?sort=-createdAt&page=1">
                Vacancies
              </NavLink>
              {me?.role === 'Employer' && (
                <li className="menu__list-item">
                  {
                    <Link className="btn btn-small primary" to="/add-company">
                      Add company
                    </Link>
                  }
                </li>
              )}
            </ul>
          </>
        )}
      </nav>
      {me && <Profile />}
    </>
  );
};

export default Navigation;
