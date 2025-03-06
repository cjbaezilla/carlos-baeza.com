import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "DeFi Lending Protocol",
      description: "A decentralized lending platform that enables users to lend or borrow assets against collateral. Features automated interest rate adjustment based on supply and demand.",
      category: "defi",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "React", "Web3.js", "TheGraph", "Hardhat"],
      link: "#"
    },
    {
      title: "NFT Marketplace",
      description: "A peer-to-peer marketplace for creating, selling, and collecting NFTs with support for multiple blockchains and custom royalty structures.",
      category: "nft",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "IPFS", "React", "Ethers.js", "Typescript"],
      link: "#"
    },
    {
      title: "Cross-Chain Bridge",
      description: "A trustless bridge that enables asset transfers between Ethereum and other EVM-compatible chains with optimized gas efficiency.",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "Go", "React", "Web3.js", "Chainlink"],
      link: "#"
    },
    {
      title: "DAO Governance Platform",
      description: "A comprehensive platform for decentralized autonomous organizations with customizable governance models and proposal systems.",
      category: "defi",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "TheGraph", "React", "TypeScript", "IPFS"],
      link: "#"
    },
    {
      title: "Smart Contract Security Analyzer",
      description: "An automated tool for detecting vulnerabilities and optimizing gas usage in Ethereum smart contracts.",
      category: "development",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "Python", "Node.js", "AST Parsing", "Machine Learning"],
      link: "#"
    },
    {
      title: "Blockchain Explorer",
      description: "A comprehensive explorer for blockchain data visualization with real-time transaction monitoring and analytics.",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop",
      techStack: ["React", "Node.js", "WebSockets", "Chart.js", "Web3.js"],
      link: "#"
    },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'defi', label: 'DeFi' },
    { id: 'nft', label: 'NFT' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'development', label: 'Development Tools' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-dark-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-900/30 mix-blend-lighten opacity-30 filter blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-purple-900/30 mix-blend-lighten opacity-30 filter blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-green-900/30 mix-blend-lighten opacity-30 filter blur-3xl"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center mb-12 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {filterCategories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ 
                scale: activeFilter !== category.id ? 1.05 : 1,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ 
                y: -10,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }
              }}
            >
              <div className="card overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ 
                      scale: hoveredProject === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs font-semibold py-1 px-2 rounded-full"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 + 0.3 }
                    }}
                  >
                    {filterCategories.find(cat => cat.id === project.category)?.label || 'Project'}
                  </motion.div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-200">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-gray-800 text-gray-200 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.05 + (techIndex * 0.1) }
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "#3B82F6",
                          color: "white"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href={project.link} 
                    className="inline-flex items-center font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p className="text-gray-300 mb-4">
            These are just a few highlights from my portfolio of innovative blockchain projects.
          </motion.p>
          <motion.a 
            href="https://github.com/cjbaezilla" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 