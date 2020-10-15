import React from 'react';

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a href="/home" className="">Home</a>
        <a href="/portfolio" className="">Porfolio</a>
      </div>
    </nav>
  );
}

export default Navbar;
