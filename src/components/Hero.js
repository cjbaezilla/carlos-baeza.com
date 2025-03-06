import React from 'react';
import { motion } from 'framer-motion';

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
  const particles = Array(20).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        <motion.div 
          className="absolute top-40 left-20 w-64 h-64 rounded-full bg-blue-300 filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-purple-300 filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-green-300 filter blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-center md:text-left">
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-2xl font-bold text-blue-600 mb-2"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1.5 }}
              >
                Blockchain Engineer & Smart Contract Developer
              </motion.h2>
              <motion.h1 
                className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1.5, delay: 0.2 }}
              >
                Carlos Baeza
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-700 max-w-2xl"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1.5, delay: 0.4 }}
              >
                Transforming ideas into secure, scalable blockchain solutions. Specializing in Ethereum, smart contracts, and DeFi infrastructure.
              </motion.p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap justify-center md:justify-start gap-4"
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
                className="btn px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-6 pt-4"
            >
              {[
                {
                  href: "https://github.com/cjbaezilla",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  href: "mailto:carlos.baeza@gmail.com",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  href: "tel:+56985644026",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )
                }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5, 
                    color: '#3B82F6',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            variants={codeVariants}
          >
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-xl"
              initial={{ rotateY: 10 }}
              animate={{ 
                rotateY: [10, 0, 10],
                y: [0, -10, 0]
              }}
              transition={{ 
                rotateY: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="ml-2 text-sm text-gray-500">smart-contract.sol</div>
              </div>
              <pre className="text-xs md:text-sm overflow-x-auto bg-gray-100 p-4 rounded-lg">
                <code className="language-solidity text-left">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarlosExpertise {
    string public name = "Carlos Baeza";
    string public role = "Blockchain Engineer";
    uint public yearsOfExperience = 10;
    
    string[] public skills = [
        "Smart Contracts",
        "DeFi",
        "Web3",
        "Ethereum",
        "Solidity"
    ];
    
    function getFullProfile() public pure returns (string memory) {
        return "Blockchain expert with deep technical knowledge and practical experience in developing cutting-edge solutions";
    }
}`}
                </code>
              </pre>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-lg z-[-1]"
              animate={{ 
                rotate: [12, 0, 12],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600 rounded-lg z-[-1]"
              animate={{ 
                rotate: [-12, 0, -12],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 