import React from 'react';
import '../../App.css';
import Home from './Home';
import Portfolio from './Portfolio';

import { HashRouter, Route } from 'react-router-dom';

function Body() {
  return (
    <HashRouter basename='/'>
        <Route path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
    </HashRouter>
  );
}

export default Body;
