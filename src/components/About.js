import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Geometric Pattern Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full h-full max-w-md mx-auto">
              <div className="aspect-[9/16] w-full rounded-xl overflow-hidden shadow-2xl border-2 border-dark-accent">
                <img 
                  src="https://png.pngtree.com/background/20210717/original/pngtree-vertical-multi-colored-isometric-decorative-background-for-instagram-stories-cover-landing-picture-image_1437597.jpg" 
                  alt="Geometric Pattern" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-5 -right-5 bg-dark-card py-4 px-6 rounded-lg shadow-xl border-2 border-dark-accent z-20"
              >
                <span className="block text-center text-gray-200 font-medium">Over</span>
                <span className="block text-center text-blue-500 text-3xl font-bold">15</span>
                <span className="block text-center text-gray-200 font-medium">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Content column */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-100">
                Blockchain Visionary & Software Engineering Leader
              </h3>
              <p className="text-blue-400 text-lg font-medium">
                Smart Contract Developer | IT Technical Professional | Certified Scrum Master
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              I'm a battle-tested blockchain engineer and software development leader with over 15 years of experience
              building innovative solutions across the full development lifecycle. My journey spans from junior programmer
              to blockchain engineering roles where I've consistently delivered high-impact solutions for companies across
              multiple countries.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 leading-relaxed"
            >
              From engineering smart contracts for tokenized real estate at RealT to designing algorithmic stablecoins 
              and cross-chain bridges, I bring a wealth of blockchain expertise to every project. I've been featured in
              multiple interviews and publications for my groundbreaking work, including the Copihue stablecoin pegged
              to the Chilean peso.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-3 bg-dark-card/50 p-4 rounded-lg border border-dark-accent"
            >
              <h4 className="text-lg font-medium text-blue-400 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Featured Interviews
              </h4>
              <ul className="space-y-2">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a 
                    href="https://es.cointelegraph.com/news/engineer-carlos-baeza-negroni-copihue-is-a-stablecoin-anchored-to-the-value-of-the-chilean-peso" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Ingeniero Carlos Baeza Negroni: "Copihue es una stablecoin, anclada al valor del peso chileno" - <span className="text-gray-400 text-sm">Cointelegraph</span></span>
                  </a>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a 
                    href="https://www.criptonoticias.com/entrevistas/inspirada-dai-stablecoin-copihue-tener-paridad-peso-chile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-start"
                  >
                    <span className="text-blue-500 mr-2">→</span>
                    <span>Inspirada en DAI, la stablecoin Copihue podría tener paridad con el peso de Chile - <span className="text-gray-400 text-sm">CriptoNoticias</span></span>
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Highlight boxes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8"
            >
              <div className="bg-dark-card p-5 rounded-xl border border-dark-accent hover:border-blue-500 transition-all duration-300 shadow-lg group">
                <div className="text-blue-500 mb-2 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-100 mb-2">Expert in Blockchain Technology</h4>
                <p className="text-gray-400 text-sm">Deep expertise in Ethereum, Solana, Polygon, BSC, and numerous other networks. Specializing in smart contracts, DeFi, and Web3 infrastructure.</p>
              </div>
              
              <div className="bg-dark-card p-5 rounded-xl border border-dark-accent hover:border-purple-500 transition-all duration-300 shadow-lg group">
                <div className="text-purple-500 mb-2 text-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-100 mb-2">Team Leadership & Agile Methodologies</h4>
                <p className="text-gray-400 text-sm">Certified Scrum Master with extensive experience leading cross-functional teams across multiple countries and coordinating international projects.</p>
              </div>
            </motion.div>
            
            {/* Recent focus/achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-5 rounded-xl border border-blue-800/50"
            >
              <h4 className="font-bold text-lg text-gray-100 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Recent Achievements
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Developed Ethereum Smart Contracts for NFT gamification at RealT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Participated in 8+ ETHGlobal hackathons, constantly pushing Web3 boundaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Created innovative stablecoin solutions pegged to the Chilean peso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Designed and implemented custom token bridges between EVM networks</span>
                </li>
              </ul>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a 
                href="/files/carlos_baeza_resume.pdf" 
                download 
                className="px-6 py-3 bg-dark-card text-blue-400 font-medium rounded-lg border border-blue-600 hover:bg-dark-primary transition duration-300 shadow-lg"
              >
                Download Resume
              </a>
              <a 
                href="https://github.com/cjbaezilla" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-dark-card text-gray-300 font-medium rounded-lg border border-gray-700 hover:border-gray-500 transition duration-300 shadow-lg flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 