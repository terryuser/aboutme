import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';

import pageTransition from '../../config/pageTransition.json';
import pageVariants from '../../config/pageVariants.json';

function Profile() {
  const lang_status = {
    labels: ['Javascript', 'SCSS', 'HTML', 'React', 'SQL', 'PHP'],
    datasets: [
      {
        label: 'Programming Language',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 75, 80, 60, 60, 65]
      }
    ]
  };
  return (
    <motion.div className="page" initial="init" exit="out" animate="in" variants={pageVariants} transition={pageTransition}>
      <div>
        <Radar data={lang_status} />
      </div>
    </motion.div>
  );
}

export default Profile;
