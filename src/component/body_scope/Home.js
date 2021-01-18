import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function Home() {
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <div className="App-header">
        <p>
          Hi!
        </p>
      </div>
    </motion.div>
  );
}

export default Home;
