import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import Main from './component/Main';
import Header from './component/Header';
import Footer from './component/Footer';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter  basename='/'>
      <Header />
      <Main />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
