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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  // SVG Icons with improved design
  const ethGlobalIcon = (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="url(#ethGlobalGrad)" />
      <defs>
        <linearGradient id="ethGlobalGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <path d="M12 5L6.5 12L12 14.5L17.5 12L12 5Z" fill="white" fillOpacity="0.9" />
      <path d="M12 14.5L6.5 12L12 19L17.5 12L12 14.5Z" fill="white" fillOpacity="0.7" />
      <path d="M12 5L6.5 12L12 14.5L17.5 12L12 5Z" stroke="white" strokeOpacity="0.5" strokeWidth="0.3" />
      <path d="M12 14.5L6.5 12L12 19L17.5 12L12 14.5Z" stroke="white" strokeOpacity="0.3" strokeWidth="0.3" />
    </svg>
  );

  const celoIcon = (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="url(#celoGrad)" />
      <defs>
        <linearGradient id="celoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#35D07F" />
          <stop offset="1" stopColor="#2DB168" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12" fill="none" stroke="white" strokeWidth="1.5" />
      <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12" fill="none" stroke="white" strokeWidth="1.5" />
    </svg>
  );

  const defaultHackathonIcon = (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="url(#hackathonGrad)" />
      <defs>
        <linearGradient id="hackathonGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect x="7" y="8" width="10" height="8" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M9 6V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 6V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 16V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 16V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 12H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10.5V13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  // Helper function to get the right icon based on organizer
  const getHackathonIcon = (hackathon) => {
    const org = hackathon.organizer.toLowerCase();
    if (org.includes('ethglobal')) return ethGlobalIcon;
    if (org.includes('celo')) return celoIcon;
    return defaultHackathonIcon;
  };

  return (
    <section id="hackathons" className="py-20 relative overflow-hidden">
      {/* Enhanced background with gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-900"></div>
      
      {/* Grid pattern with custom styling */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Improved ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-pink-400 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-15"></div>
      </div>
      
      {/* Floating 3D cubes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cube 1 */}
        <div className="cube-wrapper absolute top-[15%] left-[10%]">
          <div className="cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        
        {/* Cube 2 */}
        <div className="cube-wrapper absolute top-[60%] left-[75%]">
          <div className="cube cube-2">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        
        {/* Cube 3 */}
        <div className="cube-wrapper absolute top-[75%] left-[20%]">
          <div className="cube cube-3">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        
        {/* Cube 4 - smaller */}
        <div className="cube-wrapper absolute top-[25%] left-[85%] scale-75">
          <div className="cube cube-4">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        
        {/* Wireframe cube */}
        <div className="cube-wrapper absolute top-[40%] left-[50%] scale-150">
          <div className="wireframe-cube">
            <div className="wireframe-face front"></div>
            <div className="wireframe-face back"></div>
            <div className="wireframe-face right"></div>
            <div className="wireframe-face left"></div>
            <div className="wireframe-face top"></div>
            <div className="wireframe-face bottom"></div>
          </div>
        </div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Section heading with improved animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Hackathons</h2>
          <div className="w-36 h-1.5 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Participating in global blockchain hackathons to build innovative solutions and expand my Web3 expertise
          </p>
        </motion.div>
        
        {/* Hackathon cards grid with improved layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 },
                boxShadow: "0 15px 30px -10px rgba(79, 70, 229, 0.4)"
              }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden border border-indigo-900/30 shadow-lg hover:shadow-indigo-500/20 group transition-all duration-300 h-full flex flex-col"
            >
              {/* Card header with improved visual design */}
              <div className="relative overflow-hidden">
                {/* Organization identifier tag */}
                <div className="absolute top-0 right-0 px-2 py-1 bg-indigo-600/90 text-xs font-medium text-white rounded-bl-lg z-10">
                  {hackathon.organizer}
                </div>
                
                {/* Icon background with gradient and pattern */}
                <div className="h-28 bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center relative">
                  {/* Animated subtle pattern */}
                  <div className="absolute inset-0 opacity-20" 
                      style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}>
                  </div>
                  
                  {/* Hackathon icon with improved rendering */}
                  <div className="w-16 h-16 transform group-hover:scale-110 transition-transform duration-300">
                    {getHackathonIcon(hackathon)}
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 w-full py-1.5 bg-gradient-to-t from-gray-900 to-transparent">
                    <h3 className="text-base font-bold text-white text-center group-hover:text-indigo-300 transition-colors px-2">
                      {hackathon.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Card content with improved typography and spacing */}
              <div className="p-3 flex-1 flex flex-col">
                {/* Date display in compact format */}
                <div className="text-xs text-indigo-300 font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {hackathon.date}
                </div>
                
                <p className="text-xs text-gray-400 leading-tight mb-3 flex-grow line-clamp-3">
                  {hackathon.description}
                </p>
                
                {/* Improved action link */}
                <a 
                  href={hackathon.url} 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors group-hover:text-indigo-300 mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(hackathon.url, '_blank', 'noopener,noreferrer');
                  }}
                >
                  View Hackathon
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-indigo-500/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* POAP Collection floating card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 mb-10 max-w-4xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl transform -rotate-1"></div>
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/80 rounded-2xl p-8 border border-purple-500/20 shadow-xl relative overflow-hidden group transform hover:rotate-1 transition-transform duration-300">
            {/* Floating badge */}
            <div className="absolute -top-5 -right-5 w-28 h-28">
              <div className="absolute top-0 right-0 w-full h-full transform rotate-12 transition-transform duration-300 group-hover:rotate-6">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                  <defs>
                    <linearGradient id="poapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                  </defs>
                  <path d="M50,0 L97,25 L97,75 L50,100 L3,75 L3,25 Z" fill="url(#poapGrad)" />
                  <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="white">POAP</text>
                </svg>
              </div>
            </div>
            
            {/* Background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/5 rounded-full filter blur-3xl opacity-70 translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-lg relative group-hover:scale-105 transition-transform duration-300">
                  {/* POAP logo with animation */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                    <svg viewBox="0 0 100 100" className="w-16 h-16 text-white relative z-10 animate-pulse-slow">
                      <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 82c-20.4 0-37-16.6-37-37s16.6-37 37-37 37 16.6 37 37-16.6 37-37 37z" fill="currentColor"/>
                      <path d="M50 15c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm0 60c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z" fill="currentColor"/>
                      <circle cx="50" cy="50" r="12" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-3">Proof of Attendance Protocol</h3>
                <p className="text-gray-300 mb-5 text-lg leading-relaxed">
                  Browse my collection of POAP tokens – digital badges that authenticate my participation in blockchain events, conferences, and communities around the world.
                </p>
                
                <a 
                  href="https://app.poap.xyz/scan/baeza.eth"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-base font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg transform group-hover:translate-y-[-2px]"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Explore My POAP Collection</span>
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
            
            {/* Floating certificate-like elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-32 bg-purple-500/10 rounded-lg transform rotate-12 border border-purple-500/20"></div>
            <div className="absolute -bottom-4 -right-1 w-16 h-24 bg-indigo-500/10 rounded-lg transform -rotate-6 border border-indigo-500/20"></div>
          </div>
        </motion.div>
      </div>
      
      {/* CSS for the 3D cubes */}
      <style jsx>{`
        .cube-wrapper {
          perspective: 800px;
          width: 100px;
          height: 100px;
          opacity: 0.15;
          z-index: 1;
        }
        
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 20s infinite linear;
        }
        
        .cube-2 {
          animation: rotate 25s infinite linear reverse;
        }
        
        .cube-3 {
          animation: float-rotate 18s infinite ease-in-out;
        }
        
        .cube-4 {
          animation: float-rotate 22s infinite ease-in-out reverse;
        }
        
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(139, 92, 246, 0.3);
          backface-visibility: visible;
        }
        
        .front {
          transform: translateZ(50px);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(67, 56, 202, 0.1));
        }
        
        .back {
          transform: rotateY(180deg) translateZ(50px);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(67, 56, 202, 0.1));
        }
        
        .right {
          transform: rotateY(90deg) translateZ(50px);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.1));
        }
        
        .left {
          transform: rotateY(-90deg) translateZ(50px);
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.1));
        }
        
        .top {
          transform: rotateX(90deg) translateZ(50px);
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(167, 139, 250, 0.1));
        }
        
        .bottom {
          transform: rotateX(-90deg) translateZ(50px);
          background: linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(167, 139, 250, 0.1));
        }
        
        .wireframe-cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: float-rotate-wire 30s infinite linear;
        }
        
        .wireframe-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(139, 92, 246, 0.25);
          background: transparent;
        }
        
        @keyframes rotate {
          0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        
        @keyframes float-rotate {
          0% { transform: rotateX(0) rotateY(0) translateY(0); }
          25% { transform: rotateX(90deg) rotateY(90deg) translateY(-20px); }
          50% { transform: rotateX(180deg) rotateY(180deg) translateY(0); }
          75% { transform: rotateX(270deg) rotateY(270deg) translateY(20px); }
          100% { transform: rotateX(360deg) rotateY(360deg) translateY(0); }
        }
        
        @keyframes float-rotate-wire {
          0% { transform: rotateX(0) rotateY(0); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hackathons; 