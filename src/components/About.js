import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-30 animate-pulse"></div>
              <img 
                src="/images/profile.jpg" 
                alt="Carlos Baeza" 
                className="rounded-2xl shadow-2xl relative z-10 border-2 border-dark-accent"
                style={{ maxHeight: '500px', objectFit: 'cover' }} 
              />
              
              {/* Experience badge */}
              <motion.div 
                initial={{ scale: 0, y: 50 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-5 -right-5 bg-dark-card py-4 px-6 rounded-lg shadow-xl border-2 border-dark-accent z-20"
              >
                <span className="block text-center text-gray-200 font-medium">Over</span>
                <span className="block text-center text-blue-500 text-3xl font-bold">10</span>
                <span className="block text-center text-gray-200 font-medium">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Content column */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-100"
            >
              Blockchain Developer & Smart Contract Specialist
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 leading-relaxed"
            >
              I'm a passionate blockchain developer with extensive experience in building decentralized applications
              and smart contract systems. My journey in the world of blockchain began in 2013 when I first discovered
              Bitcoin and became fascinated by its revolutionary technology.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 leading-relaxed"
            >
              With over 10 years of software development experience and 7+ years focusing exclusively on blockchain
              technology, I've helped numerous projects implement secure, efficient, and innovative blockchain solutions.
              My expertise spans from developing smart contracts and DeFi protocols to building comprehensive Web3
              infrastructure.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8"
            >
              {[
                { count: '50+', label: 'Projects Completed' },
                { count: '25+', label: 'Smart Contracts' },
                { count: '15+', label: 'DeFi Protocols' },
                { count: '30+', label: 'Happy Clients' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-dark-card rounded-lg shadow-lg border border-dark-border">
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.count}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="/files/carlos_baeza_resume.pdf" 
                download 
                className="px-6 py-3 bg-dark-card text-blue-400 font-medium rounded-lg border border-blue-600 hover:bg-dark-primary transition duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 