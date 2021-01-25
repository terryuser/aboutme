import React from 'react';
import logo from '../../logo.svg';

import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function Contact() {
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <div className="">Have a question or want to work together?</div>
      <div className="row">
        <div className="col-6">
          <form className="custom-form p-2">
            <div className="input-container">
              <label>Name </label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>Email/Phone</label>
              <input type="text" />
            </div>
            <div className="input-container">
              <label>What would you like to say to me? </label>
              <input type="textarea" />
            </div>
          </form>
        </div>
        <div className="col-6">
          <img width="50" height="50"></img>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
