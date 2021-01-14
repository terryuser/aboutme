import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';

import Home from './body_scope/Home';
import Portfolio from './body_scope/Portfolio';

import SwitchWithSlide from './tools/SwitchWithSlide';

import { HashRouter, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Main() {
    const location = useLocation();
    return (
        <div className="Main">
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/portfolio' component={Portfolio} />
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default Main;