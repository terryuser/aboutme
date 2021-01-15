import React from 'react';
import '../useless/App.css';

import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function AboutMe() {
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <div className="App-header">
        <p>
          Coming Soon
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
