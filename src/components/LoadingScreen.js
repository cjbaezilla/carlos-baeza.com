import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  const [text, setText] = useState('');
  const fullText = 'Building amazing experiences...';
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing animation effect
  useEffect(() => {
    if (!isLoading) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [isLoading]);

  // Variants for cube animations
  const cubeVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: (i) => ({
      scale: 1,
      rotate: 360,
      transition: {
        scale: { duration: 0.7, delay: i * 0.1 },
        rotate: { duration: 2, repeat: Infinity, ease: "linear" }
      }
    })
  };

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
        {/* 3D Cube animation grid */}
        <div className="loading-cube-grid">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="loading-cube"
              custom={i}
              variants={cubeVariants}
              initial="initial"
              animate="animate"
              style={{
                backgroundColor: i % 3 === 0 ? 'var(--accent-blue)' : 
                               i % 3 === 1 ? 'var(--accent-purple)' : 
                               'var(--accent-green)'
              }}
            />
          ))}
        </div>
        
        {/* Typing animation with cursor */}
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span>{text}</span>
          <span className={`typing-cursor ${cursorVisible ? 'visible' : 'hidden'}`}>|</span>
        </motion.div>
        
        {/* Radial progress indicator */}
        <div className="loading-progress">
          <motion.div 
            className="loading-progress-inner"
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={{ 
              scale: [0.6, 1, 0.6], 
              opacity: [0.6, 0.9, 0.6] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 