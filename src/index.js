import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './component/header_scope/Header';
import Home from './component/body_scope/Home';
import Portfolio from './component/body_scope/Portfolio';

import { HashRouter, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <HashRouter  basename='/'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
