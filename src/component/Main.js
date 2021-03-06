import React from 'react';
import ReactDOM from 'react-dom';

import Home from './body_scope/Home';
import Portfolio from './body_scope/Portfolio';
import Profile from './body_scope/Profile';
import Contact from './body_scope/Contact';

import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import '../scss/main.scss';


function Main() {
    const location = useLocation();
    return (
        <div className="main-frame">
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/' component={Home} />
                    <Route path='/portfolio' component={Portfolio} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default Main;