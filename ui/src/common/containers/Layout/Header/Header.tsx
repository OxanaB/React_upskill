import React from 'react';
import Logo from './Logo';
import './Header.scss';

interface HeaderProps {
  children?: React.ReactNode | React.ReactNode[];
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
