import React from 'react';
import Navbar from './header_scope/Navbar';

import Logo from '../img/LOGO.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={Logo} className="logo-svg" alt="Terry Lau - FrontEnd Developer" /></div>
      <Navbar />
    </header>
  );
}

export default Header;
