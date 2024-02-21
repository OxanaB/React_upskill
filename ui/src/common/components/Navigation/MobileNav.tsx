import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileSelector } from '../../redux/selectors/profileSelector';

import './MobileNav.scss';

export const MobileNav = () => {
  const { me } = useSelector(getProfileSelector);
  return (
    <nav className="mobile-menu">
      <div className="container">
        <ul className="mobile-menu__list">
          {!me ? (
            <>
              <li className="mobile-menu__list--item">
                <Link to="/sign-in">Sign in</Link>
              </li>
              <li className="mobile-menu__list--item">
                <Link className="btn btn-small primary" to="/sign-up">
                  Sign up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="mobile-menu__list--item">
                <Link to="/users?sort=-createdAt&page=1">Workers</Link>
              </li>
              <li className="mobile-menu__list--item">
                <Link to="/companies?sort=-createdAt&page=1">Companies</Link>
              </li>
              <li className="mobile-menu__list--item">
                {<Link to="/vacancies?sort=-createdAt&page=1">Vacancies</Link>}
              </li>
              {me?.role === 'Employer' && (
                <li className="mobile-menu__list--item">
                  {<Link to="/add-company">Add company</Link>}
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
