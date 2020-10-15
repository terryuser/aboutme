import React from 'react';
import '../../App.css';
import Home from './Home';
import Portfolio from './Portfolio';

import { BrowserRouter, Route } from 'react-router-dom';

function Body() {
  return (
    <BrowserRouter>
        <Route path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
    </BrowserRouter>
  );
}

export default Body;
