import React from 'react';
import logo from '../../logo.svg';
import '../useless/App.css';

import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function Contact() {
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <div className="App-header">
        <p>
          Contact
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
