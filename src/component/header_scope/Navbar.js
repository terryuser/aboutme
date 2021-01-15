import React, { useState } from 'react';
import { HashRouter, Route, Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimateSharedLayout } from "framer-motion";

import { pages } from "../../config/pageTitle";

function Navbar() {
  const isActive = (path, match, location) => !!(match || path === location.pathname);
  const location = useLocation();

  return (
    <AnimateSharedLayout>
      <nav className="nav-wrapper">
        <div className="container">
            {pages.map(({title, path, filename}) => (
              <NavLink to={path} exact className="nav-item" activeClassName="active" isActive={isActive.bind(this, {path})}> 
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
            ))}
        </div>
      </nav>
    </AnimateSharedLayout>
  );
}

export default Navbar;
