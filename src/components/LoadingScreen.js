import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1, visibility: 'visible' }}
      animate={{
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="loading-spinner mb-4"></div>
        <motion.div 
          className="text-lg font-medium mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading amazing content...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 