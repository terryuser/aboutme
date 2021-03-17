import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';


function Home() {
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <section className="section greeting">
        <h1 className="h3 text-white font-weight-light">Hi! I’m Terry</h1>
        <h2 className="h1 text-white font-weight-bold">Designer & Front-end Developer</h2>
        <NavLink to="/profile" exact className="btn btn-thirdary">About me</NavLink>
        <div className="next-section"><span className="arrow arrow-bottom"></span><span className="arrow arrow-bottom"></span></div>
      </section>
      <section className="section who-am-i">
        <div className="row d-flex">
          <div className="col-7 text-left">
            <h2>Who am I ?</h2>
            <p>I am multi-talented developer with 5+ years of experiences in web developing & multimedia design. In past 3 years I focus on programming, UI/UX design & project management. Passionate about building high-value web applications with analytic customers behaviour. </p>
          </div>
          <div className="col-5 justify-content-center">
            <div className="bg-primary" style={{width: 250, height: 250}}></div>
            <NavLink to="/profile" exact className="btn btn-thirdary">Know more me</NavLink>
          </div>
        </div>
        <div className="bg-white" style={{height: 200}}>

        </div>
      </section>
    </motion.div>
  );
}

export default Home;
