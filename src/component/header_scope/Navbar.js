import React, { useState } from 'react';
import { HashRouter, Route, Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimateSharedLayout } from "framer-motion";

import { pages } from "../../config/pageTitle";

function Navbar() {
  const isActive = (path, match, location) => !!(match || path === location.pathname);
  const location = useLocation();

  return (
    <AnimateSharedLayout>
      <nav className="navbar">
        <ul className="nav-wrapper">
            {pages.map(({title, path, filename}) => (
              <li className="nav-item" key={title.toString()}>
                <NavLink to={path} exact className="nav-link" activeClassName="active" isActive={isActive.bind(this, {path})}> 
                  {title}
                  {location.pathname == path && (
                    <motion.div 
                      layoutId="underline" 
                      className="underline" 
                      initial={false} 
                      animate={ {background: '#000'} } 
                    />
                  )}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </AnimateSharedLayout>
  );
}

export default Navbar;
