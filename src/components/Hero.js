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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-background py-10 lg:py-0">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column with text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-100"
            >
              <span className="block">Carlos Baeza</span>
              <span className="text-gradient">Blockchain Engineer</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 md:mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              I build secure and scalable blockchain solutions, specializing in smart contracts, 
              DeFi protocols, and Web3 infrastructure.
            </motion.p>

            <motion.div 
              variants={itemVariants} 
              className="mt-4 flex flex-wrap gap-2 text-gray-400"
            >
              <span className="bg-dark-card px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Bitcoin</span>
              <span className="bg-dark-card px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Ethereum</span>
              <span className="bg-dark-card px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Solidity</span>
              <span className="bg-dark-card px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Smart Contracts</span>
              <span className="bg-dark-card px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Blockchain</span>
              <span className="bg-dark-card px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">DeFi</span>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap justify-center sm:justify-start gap-3 md:gap-4 mt-6 md:mt-8"
            >
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
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start mb-4">
                <a href="mailto:carlos.baeza@gmail.com" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                
                <a href="https://github.com/cjbaezilla" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a href="https://x.com/cjbaezilla" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                
                <a href="https://youtube.com/@cjbaezilla" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                
                <a href="https://primal.net/baeza" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.2 18.79c-3.95 0-7.16-3.21-7.16-7.16 0-3.34 2.29-6.15 5.38-6.94v2.02c-2.02.68-3.48 2.58-3.48 4.92 0 2.82 2.28 5.11 5.1 5.11 2.82 0 5.1-2.29 5.1-5.11 0-1.2-.42-2.29-1.11-3.16l1.66-1.18c.92 1.24 1.46 2.77 1.46 4.34.02 3.95-3.19 7.16-7.14 7.16h.2zm1.47-7.99c-.39.95-1.32 1.62-2.41 1.62-1.45 0-2.62-1.17-2.62-2.62 0-1.09.67-2.02 1.62-2.41v-2.05c-2.06.46-3.6 2.29-3.6 4.47 0 2.55 2.07 4.62 4.62 4.62s4.62-2.07 4.62-4.62c0-.83-.23-1.61-.62-2.29l-1.61 1.14c0 .81 0 1.45 0 2.14z" />
                  </svg>
                </a>
                
                <a href="https://t.me/cjbaezilla" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                
                <a href="https://wa.me/+56985644026" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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