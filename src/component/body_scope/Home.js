import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function Home() {
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <section className="section greeting">
        <div>Hi!</div>
        <button>Who am I?</button>
      </section>
      <section className="section about-me">
        <p>Hi, I'm Terry. A Front-end Web Developer.</p>
      </section>
    </motion.div>
  );
}

export default Home;
