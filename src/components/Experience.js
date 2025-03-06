import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  // Create individual refs for each experience item
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const experiences = [
    {
      company: "TechChain Solutions",
      role: "Lead Blockchain Engineer",
      period: "2019 - Present",
      description: "Leading blockchain development initiatives for enterprise clients. Designed and implemented custom Ethereum smart contracts for decentralized applications. Orchestrated the migration of legacy systems to blockchain infrastructure.",
      techStack: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "React", "Node.js"]
    },
    {
      company: "DeFi Innovate",
      role: "Senior Smart Contract Developer",
      period: "2018 - 2019",
      description: "Developed smart contracts for decentralized finance applications. Implemented automated market makers, lending protocols, and yield farming mechanisms. Conducted comprehensive security audits and optimized gas efficiency.",
      techStack: ["Solidity", "Truffle", "Hardhat", "OpenZeppelin", "JavaScript", "Ethers.js"]
    },
    {
      company: "BlockData Systems",
      role: "Blockchain Developer",
      period: "2016 - 2018",
      description: "Contributed to the development of private blockchain solutions for supply chain management. Created RESTful APIs for blockchain interaction. Designed and implemented consensus algorithms for permissioned networks.",
      techStack: ["Hyperledger Fabric", "Go", "JavaScript", "Node.js", "Docker", "MongoDB"]
    },
    {
      company: "Web3 Innovations",
      role: "Full Stack Developer",
      period: "2014 - 2016",
      description: "Developed full-stack web applications with RESTful APIs. Implemented real-time data processing systems. Managed database architecture and optimization. Integrated third-party services and payment gateways.",
      techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "AWS"]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Assign the proper ref and inView value based on index
  const getRefAndInView = (index) => {
    switch(index) {
      case 0: return { ref: ref1, inView: inView1 };
      case 1: return { ref: ref2, inView: inView2 };
      case 2: return { ref: ref3, inView: inView3 };
      case 3: return { ref: ref4, inView: inView4 };
      default: return { ref: ref1, inView: inView1 };
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-50 filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-50 filter blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
          Professional Journey
        </motion.h2>
        
        <motion.div 
          className="mt-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          
          {experiences.map((exp, index) => {
            const { ref, inView } = getRefAndInView(index);
            
            return (
              <motion.div 
                key={index}
                ref={ref}
                variants={itemVariants}
                className={`relative z-10 mb-12 md:mb-20 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg z-20"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
                
                {/* Year bubble */}
                <motion.div 
                  className={`hidden md:flex absolute top-0 left-1/2 transform ${
                    index % 2 === 0 ? '-translate-x-[calc(100%+2rem)]' : 'translate-x-[2rem]'
                  } items-center justify-center h-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 rounded-full shadow-lg`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="text-sm font-medium">{exp.period}</span>
                </motion.div>
                
                {/* Content card */}
                <motion.div 
                  className={`bg-white backdrop-blur-sm bg-opacity-90 p-6 rounded-xl shadow-lg border border-gray-100 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                    borderColor: "#3B82F6"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="md:hidden mb-2 inline-block bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium mb-4">{exp.company}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap">
                    {exp.techStack.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.5 + (techIndex * 0.1) }}
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
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Work Together</span>
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
          <motion.p 
            className="mt-4 text-gray-500 italic"
            animate={{ 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Over 8+ years of blockchain and software development experience
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 