import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <HashRouter basename="/">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Porfolio</Link>
        </HashRouter>
      </div>
    </nav>
  );
}

export default Navbar;
