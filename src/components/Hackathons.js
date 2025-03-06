import React from 'react';
import { motion } from 'framer-motion';

const Hackathons = () => {
  const hackathons = [
    {
      id: 1,
      title: "ETHOnline",
      organizer: "ETHGlobal",
      date: "Sept 17 - Oct 15, 2021",
      url: "https://online.ethglobal.com",
      description: "Global online Ethereum hackathon focused on building decentralized applications and blockchain solutions."
    },
    {
      id: 2,
      title: "Make Crypto Mobile Hackathon",
      organizer: "Celo",
      date: "Oct 8 - Nov 28, 2021",
      url: "https://mobiledefi.devpost.com",
      description: "Specialized hackathon focused on creating mobile-first DeFi applications on the Celo platform."
    },
    {
      id: 3,
      title: "NFTHack",
      organizer: "ETHGlobal",
      date: "Jan 14-16, 2022",
      url: "https://nft.ethglobal.co",
      description: "Hackathon dedicated to building innovative NFT projects and exploring new use cases for non-fungible tokens."
    },
    {
      id: 4,
      title: "Road To Web3",
      organizer: "ETHGlobal",
      date: "February 3-9, 2022",
      url: "https://web3.ethglobal.com",
      description: "Hackathon focused on developing solutions that contribute to the growth of Web3 ecosystem."
    },
    {
      id: 5,
      title: "BUILD Quest",
      organizer: "ETHGlobal",
      date: "March 4-16, 2022",
      url: "https://buildquest.ethglobal.com",
      description: "Challenge-based hackathon for building robust blockchain applications with real-world utility."
    },
    {
      id: 6,
      title: "LFGrow",
      organizer: "ETHGlobal",
      date: "March 18-30, 2022",
      url: "https://lfgrow.ethglobal.com",
      description: "Hackathon dedicated to growing the Ethereum ecosystem through innovative dApps and protocols."
    },
    {
      id: 7,
      title: "DAOHacks",
      organizer: "ETHGlobal",
      date: "Apr 8-10, 2022",
      url: "https://dao.ethglobal.com",
      description: "Specialized hackathon for building DAO tools, governance systems, and decentralized community solutions."
    },
    {
      id: 8,
      title: "Hack Money",
      organizer: "ETHGlobal",
      date: "May 6-27, 2022",
      url: "https://hackathon.money",
      description: "Finance-focused hackathon for creating DeFi protocols and innovative money solutions on Ethereum."
    }
  ];

  // Animation variants
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

  // Custom hackathon icons
  const hackathonIcon = (
    <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="url(#hackathonGrad)" rx="12" />
      <defs>
        <linearGradient id="hackathonGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <path d="M6 8H18V16H6V8Z" fill="none" stroke="white" strokeWidth="1.5" />
      <path d="M8 5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 16V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 16V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 12H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  const ethGlobalIcon = (
    <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill="url(#ethGlobalGrad)" rx="12" />
      <defs>
        <linearGradient id="ethGlobalGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4338CA" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <path d="M12 4L6 12L12 15L18 12L12 4Z" fill="white" fillOpacity="0.9" />
      <path d="M12 15L6 12L12 20L18 12L12 15Z" fill="white" fillOpacity="0.7" />
      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="0.5" strokeDasharray="1 1" />
    </svg>
  );

  // Helper function to get the right icon based on organizer
  const getHackathonIcon = (hackathon) => {
    if (hackathon.organizer.toLowerCase().includes('ethglobal')) return ethGlobalIcon;
    return hackathonIcon;
  };

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-900"></div>
      
      {/* CSS Grid pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow-delayed"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-[0.15] animate-float"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Hackathons</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Participating in global blockchain hackathons to build innovative solutions and expand my Web3 expertise
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-dark-card to-dark-card/80 rounded-2xl overflow-hidden shadow-xl border border-dark-border/40 group transition-all duration-300 relative flex flex-col h-full"
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-500/30 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
              
              {/* Card header with image */}
              <div className="h-40 w-full relative overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-pink-900/30 z-10 transition-all duration-300 group-hover:opacity-80"></div>
                <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center">
                  {getHackathonIcon(hackathon)}
                </div>
                <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="text-sm text-gray-300">{hackathon.date}</div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="pointer-events-auto">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                    <p className="text-indigo-400 font-medium">{hackathon.organizer}</p>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">{hackathon.title}</h3>
                  
                  <p className="text-gray-400 text-sm mb-4">{hackathon.description}</p>
                </div>
                
                <div className="pointer-events-auto">
                  <a 
                    href={hackathon.url} 
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors flex items-center mt-2 relative z-20 cursor-pointer inline-block"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(hackathon.url, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    View Hackathon
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

export default Hackathons; 