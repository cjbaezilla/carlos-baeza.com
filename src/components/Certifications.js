import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Ethereum Básico: Fundamentos",
      issuer: "BAC",
      date: "2020",
      url: "https://registrado.org/r/1ead5c69b0015f8ed7ff730ff0c9163e8852ffc6.jpg",
      description: "Comprehensive course covering Ethereum fundamentals, smart contracts, and blockchain applications.",
      skills: ["Ethereum", "Smart Contracts", "Web3"]
    },
    {
      id: 2,
      title: "Blockchain: Foundations and Use Cases",
      issuer: "Coursera/Consensys",
      date: "2020",
      url: "https://coursera.org/share/26189cd0c0f12adb616cc0ec6fd81b62",
      description: "Detailed exploration of blockchain technology fundamentals and practical business applications.",
      skills: ["Blockchain", "DApps", "Distributed Systems"]
    },
    {
      id: 3,
      title: "Certified Smart Contract Developer",
      issuer: "Blockchain Council",
      date: "2020",
      url: "https://certificates.blockchain-council.org/0e592af0-a148-48e6-92f3-872378740fd7",
      description: "Professional certification in developing, testing, and deploying secure smart contracts.",
      skills: ["Solidity", "Smart Contracts", "Security"]
    },
    {
      id: 4,
      title: "Professional Scrum Master PSM-1",
      issuer: "Scrum.org",
      date: "2016",
      url: "https://www.scrum.org/user/228026",
      description: "Official certification in Scrum framework, agile methodologies, and team leadership.",
      skills: ["Agile", "Scrum", "Team Leadership"]
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

  // Function to create placeholder SVG for certifications
  const createCertSvg = (title, color) => {
    // Extract initials from title
    const initials = title.split(' ').map(word => word[0]).join('');
    const gradient = color || "from-blue-600 to-purple-600";
    
    return `data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3e%3cdefs%3e%3clinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%233b82f6' /%3e%3cstop offset='100%25' stop-color='%238b5cf6' /%3e%3c/linearGradient%3e%3c/defs%3e%3crect width='300' height='200' fill='url(%23grad)' /%3e%3ccircle cx='150' cy='80' r='40' fill='rgba(255,255,255,0.2)' /%3e%3ctext x='150' y='90' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='bold' font-size='36px' fill='white'%3e${initials}%3c/text%3e%3ctext x='150' y='150' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16px' fill='white'%3eCertification%3c/text%3e%3c/svg%3e`;
  };

  // Custom certification icons
  const certIcons = {
    blockchain: (
      <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#blockchainGrad)" rx="12" />
        <defs>
          <linearGradient id="blockchainGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M6 12H8V16H6V12Z" fill="white" />
        <path d="M11 8H13V16H11V8Z" fill="white" />
        <path d="M16 4H18V16H16V4Z" fill="white" />
        <path d="M4 17H20V19H4V17Z" fill="white" />
      </svg>
    ),
    scrum: (
      <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#scrumGrad)" rx="12" />
        <defs>
          <linearGradient id="scrumGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#059669" />
            <stop offset="1" stopColor="#0D9488" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="7" r="3" fill="white" />
        <path d="M17.2 20H6.8C6.3 20 6 19.5 6.3 19.1C7.4 17.5 9.5 16.5 12 16.5C14.5 16.5 16.6 17.5 17.7 19.1C18 19.5 17.7 20 17.2 20Z" fill="white" />
        <path d="M7 13H17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 10L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 10L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    ethereum: (
      <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#ethereumGrad)" rx="12" />
        <defs>
          <linearGradient id="ethereumGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4338CA" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <path d="M12 4L6 12L12 15L18 12L12 4Z" fill="white" fillOpacity="0.9" />
        <path d="M12 15L6 12L12 20L18 12L12 15Z" fill="white" fillOpacity="0.7" />
      </svg>
    ),
    bitcoin: (
      <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#bitcoinGrad)" rx="12" />
        <defs>
          <linearGradient id="bitcoinGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EA580C" />
            <stop offset="1" stopColor="#EAB308" />
          </linearGradient>
        </defs>
        <path d="M16 11.5C16 13.43 14.43 15 12.5 15H10V8H12.5C14.43 8 16 9.57 16 11.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 15H10V19H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 11.5H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 8V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 8V5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 19V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 19V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    smartContract: (
      <svg className="w-full h-full object-contain p-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#smartContractGrad)" rx="12" />
        <defs>
          <linearGradient id="smartContractGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <path d="M6 8H10V12H6V8Z" fill="white" />
        <path d="M14 8H18V12H14V8Z" fill="white" />
        <path d="M6 16H10V20H6V16Z" fill="white" />
        <path d="M14 16H18V20H14V16Z" fill="white" />
        <path d="M12 4V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 2" />
        <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 2" />
      </svg>
    )
  };

  // Helper function to get the right icon
  const getCertIcon = (cert) => {
    if (cert.title.toLowerCase().includes('ethereum')) return certIcons.ethereum;
    if (cert.title.toLowerCase().includes('smart contract')) return certIcons.smartContract;
    if (cert.title.toLowerCase().includes('blockchain')) return certIcons.blockchain;
    if (cert.title.toLowerCase().includes('scrum')) return certIcons.scrum;
    if (cert.title.toLowerCase().includes('bitcoin')) return certIcons.bitcoin;
    
    // Default fallback
    return <div className="w-full h-full p-8 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
      <span className="text-white text-6xl font-bold">{cert.title.split(' ').map(word => word[0]).join('')}</span>
    </div>;
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Dynamic background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"></div>
      
      {/* Hexagon pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="24.8,22 37.3,29 37.3,43 24.8,50 12.3,43 12.3,29" fill="none" stroke="currentColor" strokeWidth="0.6"></polygon>
            <polygon points="24.8,0 37.3,7 37.3,21 24.8,28 12.3,21 12.3,7" fill="none" stroke="currentColor" strokeWidth="0.6"></polygon>
            <polygon points="0,22 12.5,29 12.5,43 0,50 -12.5,43 -12.5,29" fill="none" stroke="currentColor" strokeWidth="0.6"></polygon>
            <polygon points="49.6,22 62.1,29 62.1,43 49.6,50 37.1,43 37.1,29" fill="none" stroke="currentColor" strokeWidth="0.6"></polygon>
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)"></rect>
        </svg>
      </div>
      
      {/* Floating gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[60px] animate-float-slow"></div>
        <div className="absolute top-[70%] right-[5%] w-80 h-80 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[70px] animate-float-slow-delayed"></div>
        <div className="absolute top-[30%] left-[60%] w-60 h-60 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[80px] animate-pulse-slow"></div>
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
          {/* Stylized heading with animated underline */}
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">Professional Certifications</h2>
            <div className="w-full h-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full relative">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-white/30 rounded-full animate-shimmer"></div>
            </div>
          </div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
            Credentials that validate my expertise in blockchain technologies and development methodologies
          </p>
        </motion.div>
        
        {/* Circular layout for certifications */}
        <div className="relative mb-8">
          {/* Central connecting element */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full mx-auto mb-16 flex items-center justify-center relative"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L12 22M12 22L9 19M12 22L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8L12 3M12 3L15 6M12 3L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 10L22 10M22 10L19 13M22 10L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 10L2 10M2 10L5 7M2 10L5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Pulsing rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 animate-ping-slow"></div>
            <div className="absolute -inset-4 rounded-full border border-purple-500/30"></div>
            <div className="absolute -inset-8 rounded-full border border-teal-500/20"></div>
          </motion.div>
          
          {/* Honeycomb grid layout */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="flex justify-center"
              >
                <div className="w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-blue-900/20 group">
                  {/* Top glowing bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                  
                  {/* Card header with floating icon */}
                  <div className="flex justify-between items-start p-5 pb-0 relative">
                    <div>
                      <div className="bg-slate-700/50 px-3 py-1 rounded-full text-xs font-medium text-slate-300 inline-flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-1.5"></span>
                        {cert.issuer}
                      </div>
                      <h3 className="text-xl font-bold mt-2 text-white group-hover:text-blue-200 transition-colors duration-300">{cert.title}</h3>
                    </div>
                    
                    {/* Date chip */}
                    <div className="flex flex-col items-center">
                      <div className="text-sm font-bold text-white bg-gradient-to-br from-blue-600 to-purple-600 px-3 py-1 rounded shadow-lg transform group-hover:scale-110 transition-all duration-300">
                        {cert.date}
                      </div>
                    </div>
                  </div>
                  
                  {/* Icon with glow effect */}
                  <div className="relative px-5 mt-4">
                    <div className="relative h-16 bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded-xl overflow-hidden backdrop-blur-sm p-2 flex items-center">
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full filter blur-xl"></div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 mr-4 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 p-1 flex items-center justify-center border border-slate-600/50">
                          {getCertIcon(cert)}
                        </div>
                        <p className="text-sm text-slate-300 line-clamp-2">{cert.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills section */}
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center px-2.5 py-0.5
                                     bg-gradient-to-r from-slate-800 to-slate-700
                                     text-gray-300 text-xs font-medium
                                     rounded-md border border-slate-700 
                                     group-hover:border-blue-800/30 transition-all"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action button */}
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 
                                 bg-gradient-to-r from-blue-600 to-purple-600 
                                 text-white rounded-lg font-medium 
                                 hover:from-blue-700 hover:to-purple-700 
                                 transition-all duration-300 shadow-lg 
                                 hover:shadow-blue-600/20 group-hover:shadow-blue-500/30"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 14L4.5 23L12 20L19.5 23L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>View Certificate</span>
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 