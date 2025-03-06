import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BackgroundCubes from './BackgroundCubes';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const codeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  // Particles for background effect
  // eslint-disable-next-line no-unused-vars
  const particles = Array(20).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-background py-16 lg:py-0">
      {/* Three.js Background with falling cubes */}
      <BackgroundCubes />
      
      {/* Background gradient and blur effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/80 to-dark-primary/50"></div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%233B82F6" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E")',
          }}
        />
        
        {/* Accent light */}
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 mix-blend-lighten filter blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-purple-500/20 mix-blend-lighten filter blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-100"
            >
              <span className="block">Carlos Baeza</span>
              <span className="text-gradient">Blockchain Engineer</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              I build secure and scalable blockchain solutions, specializing in smart contracts, 
              DeFi protocols, and Web3 infrastructure.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="mt-4 flex flex-wrap gap-2 text-gray-400"
            >
              <span className="bg-dark-card px-3 py-1 rounded-full text-sm">Bitcoin</span>
              <span className="bg-dark-card px-3 py-1 rounded-full text-sm">Ethereum</span>
              <span className="bg-dark-card px-3 py-1 rounded-full text-sm">Solidity</span>
              <span className="bg-dark-card px-3 py-1 rounded-full text-sm">Smart Contracts</span>
              <span className="bg-dark-card px-3 py-1 rounded-full text-sm">DeFi</span>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
            >
              <motion.a 
                href="#contact" 
                className="btn px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn px-6 py-3 bg-dark-card text-blue-400 font-medium rounded-lg border border-blue-600 hover:bg-dark-primary transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12"
            >
              <div className="flex items-center space-x-4 justify-center md:justify-start mb-4">
                <a href="https://github.com/cjbaezilla" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/cjbaezilla" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/carlosbaeza" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column with Cyberpunk 3D Cube animation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <div className="scene">
              <div className="cube">
                <div className="cube__face cube__face--front">
                  <div className="cube-content">
                    <div className="cyberpunk-frame"></div>
                    <div className="cube-pattern"></div>
                  </div>
                </div>
                <div className="cube__face cube__face--back">
                  <div className="cube-content">
                    <div className="cyberpunk-frame"></div>
                    <div className="cube-pattern"></div>
                  </div>
                </div>
                <div className="cube__face cube__face--right">
                  <div className="cube-content">
                    <div className="cyberpunk-frame"></div>
                    <div className="cube-pattern"></div>
                  </div>
                </div>
                <div className="cube__face cube__face--left">
                  <div className="cube-content">
                    <div className="cyberpunk-frame"></div>
                    <div className="cube-pattern"></div>
                  </div>
                </div>
                <div className="cube__face cube__face--top">
                  <div className="cube-content">
                    <div className="cyberpunk-frame"></div>
                    <div className="cube-pattern"></div>
                  </div>
                </div>
                <div className="cube__face cube__face--bottom">
                  <div className="cube-content">
                    <div className="cyberpunk-frame"></div>
                    <div className="cube-pattern"></div>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              .scene {
                width: 300px;
                height: 300px;
                perspective: 800px;
                margin: 0 auto;
                position: relative;
                z-index: 10;
              }
              
              .cube {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
                transform: translateZ(-150px);
                animation: cube-spin 20s infinite ease-in-out;
              }
              
              .cube:hover {
                animation-play-state: paused;
              }
              
              .cube__face {
                position: absolute;
                width: 300px;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: white;
                border: 2px solid #00f3ff;
                box-shadow: 0 0 15px #00f3ff, inset 0 0 15px #00f3ff;
                background: rgba(10, 12, 16, 0.8);
                text-align: center;
                transition: all 0.2s;
                overflow: hidden;
                backdrop-filter: blur(4px);
              }
              
              .cube__face::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, transparent 45%, #ff00ff55 45%, #ff00ff55 55%, transparent 55%);
                background-size: 300% 300%;
                animation: gradient-move 3s ease infinite;
              }
              
              @keyframes gradient-move {
                0% { background-position: 0% 0%; }
                50% { background-position: 100% 100%; }
                100% { background-position: 0% 0%; }
              }
              
              .cube__face::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300f3ff' fill-opacity='0.2'/%3E%3C/svg%3E");
                opacity: 0.5;
              }
              
              .cube__face:hover {
                box-shadow: 0 0 30px #00f3ff, inset 0 0 30px #00f3ff;
              }
              
              .cube-content {
                padding: 20px;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 10;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              
              .cube-pattern {
                position: relative;
                width: 80%;
                height: 80%;
                background-image: 
                  linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
                background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
                background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
                animation: matrix-move 20s linear infinite;
              }
              
              @keyframes matrix-move {
                0% { background-position: 0px 0px, 0px 0px, 0px 0px, 0px 0px; }
                100% { background-position: 100px 100px, 100px 100px, 100px 100px, 100px 100px; }
              }
              
              .cyberpunk-text {
                text-shadow: 0 0 5px #00f3ff, 0 0 10px #00f3ff;
                position: relative;
              }
              
              .cyberpunk-frame {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 20px;
                height: 20px;
                border-top: 2px solid #ff00ff;
                border-right: 2px solid #ff00ff;
              }
              
              .cyberpunk-frame::before {
                content: '';
                position: absolute;
                bottom: -20px;
                left: -20px;
                width: 20px;
                height: 20px;
                border-bottom: 2px solid #ff00ff;
                border-left: 2px solid #ff00ff;
              }
              
              .cube__face--front  { transform: rotateY(  0deg) translateZ(150px); }
              .cube__face--right  { transform: rotateY( 90deg) translateZ(150px); }
              .cube__face--back   { transform: rotateY(180deg) translateZ(150px); }
              .cube__face--left   { transform: rotateY(-90deg) translateZ(150px); }
              .cube__face--top    { transform: rotateX( 90deg) translateZ(150px); }
              .cube__face--bottom { transform: rotateX(-90deg) translateZ(150px); }
              
              @keyframes cube-spin {
                0% { transform: translateZ(-150px) rotateX(0deg) rotateY(0deg); }
                25% { transform: translateZ(-150px) rotateX(90deg) rotateY(45deg); }
                50% { transform: translateZ(-150px) rotateX(180deg) rotateY(90deg); }
                75% { transform: translateZ(-150px) rotateX(270deg) rotateY(135deg); }
                100% { transform: translateZ(-150px) rotateX(360deg) rotateY(180deg); }
              }
              
              @keyframes text-glitch {
                0% {
                  text-shadow: 0.05em 0 0 #ff00ff, -0.05em -0.025em 0 #00f3ff;
                  transform: translate(0.025em, 0.0125em);
                }
                15% {
                  text-shadow: -0.05em -0.025em 0 #ff00ff, 0.025em 0.025em 0 #00f3ff;
                }
                50% {
                  text-shadow: 0.05em 0.05em 0 #ff00ff, 0.05em 0 0 #00f3ff;
                  transform: translate(0.05em, 0);
                }
                100% {
                  text-shadow: -0.05em 0 0 #ff00ff, -0.025em -0.05em 0 #00f3ff;
                  transform: translate(0.0125em, 0.05em);
                }
              }
            `}</style>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [1, 0.6, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 