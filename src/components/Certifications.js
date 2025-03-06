import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Certified Blockchain Developer",
      issuer: "Blockchain Council",
      date: "September 2022",
      image: "/images/certifications/blockchain-dev.png",
      description: "Demonstrates expertise in blockchain architecture, smart contract development, and distributed application design.",
      skills: ["Solidity", "Blockchain Security", "DApp Development"]
    },
    {
      id: 2,
      title: "Professional Scrum Master (PSM-1)",
      issuer: "Scrum.org",
      date: "March 2021",
      image: "/images/certifications/psm1.png",
      description: "Official certification in Scrum project management methodologies and agile development practices.",
      skills: ["Agile", "Scrum", "Project Management"]
    },
    {
      id: 3,
      title: "Ethereum Developer Certification",
      issuer: "Ethereum Foundation",
      date: "July 2020",
      image: "/images/certifications/ethereum-dev.png",
      description: "Specialized training in Ethereum blockchain development, smart contracts, and ERC standards.",
      skills: ["Ethereum", "Smart Contracts", "Web3.js"]
    },
    {
      id: 4,
      title: "Certified Bitcoin Professional",
      issuer: "Cryptocurrency Certification Consortium",
      date: "January 2020",
      image: "/images/certifications/bitcoin-pro.png",
      description: "Demonstrates a strong understanding of Bitcoin technology, security, and practical applications.",
      skills: ["Bitcoin Protocol", "Cryptography", "Lightning Network"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="certifications" className="py-16 bg-dark-secondary relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Professional Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Credentials that validate my expertise in blockchain technologies and development
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="bg-dark-card rounded-xl overflow-hidden shadow-lg border border-dark-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-10"></div>
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-blue-600/50 to-purple-600/50 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">{cert.title.split(' ').map(word => word[0]).join('')}</span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-24 z-20"></div>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-blue-600 text-white text-sm rounded-full z-30">
                  {cert.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-2">{cert.title}</h3>
                <p className="text-blue-400 mb-4">Issued by {cert.issuer}</p>
                
                <p className="text-gray-400 mb-6">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-dark-primary text-gray-400 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-dark-border">
                  <a 
                    href="#" 
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View Certificate</span>
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 