import React, { useEffect, useState } from 'react';
import letter from '../../img/letter.svg';

import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function Contact() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <div className="">Have a question or want to work together?</div>
      <div className="row justify-content-center">
        <div className="mr-n5">
          <img src={letter} width={width*0.4}/>
        </div>
        <div className="">
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
      </div>
    </motion.div>
  );
}

export default Contact;
