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

  // Animation variants - removed unused variables or use // eslint-disable-next-line for each
  // eslint-disable-next-line no-unused-vars
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Assign the proper ref and inView value based on index
  // eslint-disable-next-line no-unused-vars
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
    <section id="experience" className="py-16 bg-dark-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 -right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My journey through the blockchain ecosystem and software development industry
          </p>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600 z-0"></div>
          
          {/* Timeline Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:ml-auto md:pl-12 md:pr-0 md:text-left" : "md:mr-auto md:pr-12 md:pl-0 md:text-right"
              } md:w-1/2 z-10`}
            >
              {/* Timeline Circle */}
              <div className="hidden md:block absolute top-2 w-10 h-10 rounded-full bg-blue-600 border-4 border-dark-secondary left-1/2 transform -translate-x-1/2">
                <div className="w-full h-full rounded-full bg-blue-600 animate-ping opacity-20"></div>
              </div>
              
              {/* Timeline Card */}
              <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-dark-border hover:shadow-xl transition-shadow duration-300">
                <div className={`flex ${index % 2 !== 0 ? "md:justify-end" : ""} items-center mb-2`}>
                  <span className="text-sm font-medium text-blue-500 px-3 py-1 rounded-full bg-blue-500/10">
                    {experience.period}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-200 mb-1">{experience.role}</h3>
                <p className="text-blue-400 font-medium mb-4">{experience.company}</p>
                
                <ul className={`space-y-2 ${index % 2 !== 0 ? "md:text-right" : "md:text-left"}`}>
                  {experience.description.split('.').map((responsibility, rIndex) => (
                    <li key={rIndex} className="flex items-start">
                      <span className={`w-6 text-blue-500 h-5 flex-shrink-0 ${index % 2 !== 0 ? "md:order-2 md:ml-2" : "mr-2"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={`text-gray-400 ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                        {responsibility.trim()}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                  {experience.techStack.map((skill, sIndex) => (
                    <span key={sIndex} className="px-2 py-1 bg-dark-primary rounded-full text-xs text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 