import React from 'react';
import logo from '../../../assets/icons/logo-icon.svg';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = () => {
  return (
    <>
      <div className="logo">
        <Link to="/" className="logo__link">
          <img src={logo} alt="job-board-logo" />
          <h2>OmegaWork</h2>
        </Link>
      </div>
    </>
  );
};

export default Logo;
