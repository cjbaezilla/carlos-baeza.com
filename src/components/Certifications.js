import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Ethereum Básico",
      issuer: "Blockchain Academy Chile",
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
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-cyan-900"></div>
      
      {/* CSS Grid pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse-slow-delayed"></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-teal-400 rounded-full mix-blend-screen filter blur-3xl opacity-[0.15] animate-float"></div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Professional Certifications</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Credentials that validate my expertise in blockchain technologies and development
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-dark-card to-dark-card/80 rounded-2xl overflow-hidden shadow-xl border border-dark-border/40 group transition-all duration-300 relative flex flex-col"
            >
              {/* Glowing border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              {/* Card header with image - responsive design */}
              <div className="sm:h-48 md:h-56 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-purple-900/30 z-10 transition-all duration-300 group-hover:opacity-80"></div>
                <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center">
                  {getCertIcon(cert)}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm rounded-full z-30 shadow-lg shadow-blue-900/30">
                  {cert.date}
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                    <p className="text-blue-400 font-medium">{cert.issuer}</p>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{cert.title}</h3>
                  
                  <p className="text-gray-400 mb-5 leading-relaxed">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cert.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-dark-primary/50 text-gray-300 text-sm rounded-full border border-dark-border/50 group-hover:border-blue-600/30 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-3 border-t border-dark-border/50">
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(cert.url, '_blank', 'noopener,noreferrer');
                    }}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/20 group-hover:shadow-blue-500/30 cursor-pointer relative z-10"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17.25C18 17.66 17.66 18 17.25 18H6.75C6.34 18 6 17.66 6 17.25V16.38C6 15.21 6.68 14.13 7.76 13.65C8.93 13.14 10.37 12.75 12 12.75Z" fill="currentColor" />
                      <path d="M12 10.5C13.66 10.5 15 9.16 15 7.5C15 5.84 13.66 4.5 12 4.5C10.34 4.5 9 5.84 9 7.5C9 9.16 10.34 10.5 12 10.5Z" fill="currentColor" />
                      <path d="M17 8L19 10M19 10L21 8M19 10V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

        {/* POAP Collection Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 mb-10 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-dark-card/90 to-dark-card/70 rounded-2xl p-6 border border-purple-500/20 shadow-lg relative overflow-hidden group">
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg relative group-hover:scale-105 transition-transform duration-300">
                  {/* POAP SVG logo directly embedded */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-14 h-14 text-white" fill="currentColor">
                      <path d="M50 10C27.9 10 10 27.9 10 50s17.9 40 40 40 40-17.9 40-40S72.1 10 50 10zm0 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
                      <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"/>
                      <circle cx="50" cy="50" r="10"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-bold text-gradient-purple mb-2">POAP Collection</h4>
                <p className="text-gray-300 mb-4">
                  My collection of Proof of Attendance Protocol badges from blockchain events, conferences, and communities I've been part of.
                </p>
                
                <a 
                  href="https://app.poap.xyz/scan/baeza.eth"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-base font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-600/20 group-hover:shadow-purple-500/30"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>View My POAP Collection</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 