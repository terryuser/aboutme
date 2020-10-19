import React from 'react';
import { HashRouter, Route, Link, NavLink } from "react-router-dom";

function Navbar() {
  const isActive = (path, match, location) => !!(match || path === location.pathname);

  return (
    <nav className="nav-wrapper">
      <div className="container">
        <HashRouter basename="/">
          <NavLink to="/" exact className="nav-item" activeClassName="active" isActive={isActive.bind(this, '/')}>Home</NavLink>
          <NavLink to="/portfolio" className="nav-item" activeClassName="active" isActive={isActive.bind(this, '/portfolio')}>Porfolio</NavLink>
        </HashRouter>
      </div>
    </nav>
  );
}

export default Navbar;
