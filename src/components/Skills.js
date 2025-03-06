import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Cell
} from 'recharts';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const skillCategories = [
    {
      title: "Blockchain Skills",
      icon: (
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 8.13 5.13 5 9 5H15C18.87 5 22 8.13 22 12C22 15.87 18.87 19 15 19H9C5.13 19 2 15.87 2 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="currentColor"/>
          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="currentColor"/>
          <path d="M21 12C21 13.6569 19.6569 15 18 15C16.3431 15 15 13.6569 15 12C15 10.3431 16.3431 9 18 9C19.6569 9 21 10.3431 21 12Z" fill="currentColor"/>
        </svg>
      ),
      skills: [
        "Ethereum", "Smart Contracts", "Solidity", "Web3.js", "Ethers.js", 
        "OpenZeppelin", "Hardhat", "Truffle", "DAOs", "NFTs", "DeFi", 
        "BSC", "Solana", "Avalanche", "RSK", "Polygon", "Gnosis", 
        "Chainlink", "Hyperledger", "Liquidity Pools", "Staking"
      ]
    },
    {
      title: "Programming Languages & Frameworks",
      icon: (
        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3V5.4C8 5.96005 8 6.24008 7.89443 6.45399C7.80306 6.64215 7.64215 6.80306 7.45399 6.89443C7.24008 7 6.96005 7 6.4 7H3M8 3H16M8 3V2.6C8 2.03995 8 1.75992 8.10557 1.54601C8.19694 1.35785 8.35785 1.19694 8.54601 1.10557C8.75992 1 9.03995 1 9.6 1H14.4C14.9601 1 15.2401 1 15.454 1.10557C15.6422 1.19694 15.8031 1.35785 15.8944 1.54601C16 1.75992 16 2.03995 16 2.6V3M16 3V5.4C16 5.96005 16 6.24008 16.1056 6.45399C16.1969 6.64215 16.3578 6.80306 16.546 6.89443C16.7599 7 17.0399 7 17.6 7H21M3 7V19.4C3 19.9601 3 20.2401 3.10557 20.454C3.19694 20.6422 3.35785 20.8031 3.54601 20.8944C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.8944C20.6422 20.8031 20.8031 20.6422 20.8944 20.454C21 20.2401 21 19.9601 21 19.4V7M12 12L7 15.5V8.5L12 12ZM12 12L17 8.5V15.5L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: [
        "PHP", "JavaScript", "Go", "CakePHP", "Symfony", "Laravel", 
        "ReactJS", "NextJS", "ExpressJS", "SailsJS", "REST APIs"
      ]
    },
    {
      title: "Databases & ORM",
      icon: (
        <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5C4 3.34315 7.58172 2 12 2C16.4183 2 20 3.34315 20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      skills: [
        "MySQL/MariaDB", "MongoDB", "PostgreSQL", "SQL Server", 
        "Prisma ORM", "Mongoose"
      ]
    },
    {
      title: "Front-End & CMS",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 9H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 5V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      skills: [
        "Wordpress", "Styled Components", "Ant Design", "ElasticUI", 
        "Material Design", "DaisyUI", "TailwindCSS", "Prestashop", 
        "WooCommerce", "Drupal", "Magento", "Moodle", "Shopify"
      ]
    },
    {
      title: "Methodologies & Others",
      icon: (
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 17V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V17M16 12L12 16M12 16L8 12M12 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: [
        "Scrum Master", "Kanban", "Lean", "ITIL", "PMI", "Git", 
        "Linux", "Apache", "Nginx", "WebSocket", "VPN", "TOR", "IoT"
      ]
    },
  ];

  // Skill Proficiency Data for Charts
  const blockchainSkillsData = [
    { name: 'Ethereum', value: 92 },
    { name: 'Solidity', value: 95 },
    { name: 'Smart Contracts', value: 90 },
    { name: 'Web3.js', value: 88 },
    { name: 'DeFi', value: 82 },
    { name: 'NFTs', value: 85 }
  ];

  const languageSkillsData = [
    { name: 'PHP', value: 90 },
    { name: 'JavaScript', value: 85 },
    { name: 'Go', value: 75 },
    { name: 'ReactJS', value: 88 },
    { name: 'ExpressJS', value: 82 },
    { name: 'REST APIs', value: 95 }
  ];

  // Radar Chart Data
  const fullStackSkillsData = [
    {
      subject: 'Frontend',
      A: 85,
      fullMark: 100,
    },
    {
      subject: 'Backend',
      A: 90,
      fullMark: 100,
    },
    {
      subject: 'UI/UX',
      A: 75,
      fullMark: 100,
    },
    {
      subject: 'Database',
      A: 80,
      fullMark: 100,
    },
    {
      subject: 'DevOps',
      A: 70,
      fullMark: 100,
    },
    {
      subject: 'Blockchain',
      A: 95,
      fullMark: 100,
    },
  ];

  const renderSkillsTab = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {skillCategories.map((category, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          className="skill-card rounded-xl backdrop-blur-sm relative overflow-hidden group"
          whileHover={{ 
            scale: 1.02, 
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r animate-gradient-x opacity-30 group-hover:opacity-60 transition-opacity duration-300 rounded-xl" 
               style={{
                 backgroundSize: "200% 200%",
                 backgroundPosition: "0% 0%",
                 animation: "gradient 8s linear infinite"
               }}></div>
          
          {/* Card Content */}
          <div className="p-6 bg-dark-card/90 h-full rounded-xl backdrop-filter backdrop-blur-sm">
            <div className="flex items-center mb-5">
              <div className="p-3 rounded-full bg-gray-800/60 group-hover:bg-black/40 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold ml-4 text-gray-100 group-hover:text-white transition-colors duration-300">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap">
              {category.skills.map((skill, skillIndex) => (
                <motion.span 
                  key={skillIndex} 
                  className="skill-badge m-1 py-1.5 px-3 bg-gray-800/60 text-gray-300 text-sm font-medium rounded-full transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.3)", 
                    color: "white",
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderChartsTab = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      <motion.div 
        variants={itemVariants} 
        className="chart-card rounded-xl overflow-hidden backdrop-blur-sm bg-dark-card/80 shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-green-500/20 rounded-lg mr-3">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </span>
            Programming Languages
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={languageSkillsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" strokeOpacity={0.5} />
              <XAxis type="number" domain={[0, 100]} tick={{fill: '#9ca3af'}} />
              <YAxis dataKey="name" type="category" tick={{fill: '#9ca3af'}} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(30, 30, 30, 0.9)', 
                  border: '1px solid #333',
                  color: '#f3f4f6',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }} 
              />
              <Bar 
                dataKey="value" 
                animationDuration={2000}
                animationEasing="ease-in-out"
              >
                {languageSkillsData.map((entry, index) => {
                  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#6366F1'];
                  return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants} 
        className="chart-card rounded-xl overflow-hidden backdrop-blur-sm bg-dark-card/80 shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-blue-500/20 rounded-lg mr-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            Blockchain Technologies
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={blockchainSkillsData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#333" strokeOpacity={0.5} />
              <XAxis type="number" domain={[0, 100]} tick={{fill: '#9ca3af'}} />
              <YAxis dataKey="name" type="category" tick={{fill: '#9ca3af'}} width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(30, 30, 30, 0.9)', 
                  border: '1px solid #333',
                  color: '#f3f4f6',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }} 
              />
              <Bar 
                dataKey="value" 
                animationDuration={2000}
                animationEasing="ease-in-out"
              >
                {blockchainSkillsData.map((entry, index) => {
                  const colors = ['#6366F1', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];
                  return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      
      <motion.div 
        variants={itemVariants} 
        className="chart-card rounded-xl overflow-hidden backdrop-blur-sm bg-dark-card/80 shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 lg:col-span-2"
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
            <span className="w-8 h-8 inline-flex items-center justify-center bg-purple-500/20 rounded-lg mr-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </span>
            Full Stack Development Profile
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius={150} data={fullStackSkillsData}>
              <PolarGrid stroke="#333" strokeOpacity={0.5} />
              <PolarAngleAxis dataKey="subject" tick={{fill: '#9ca3af'}} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{fill: '#9ca3af'}} />
              <Radar 
                name="Skills" 
                dataKey="A" 
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.6} 
                animationDuration={2000}
                animationEasing="ease-out"
              />
              <Legend formatter={() => (
                <span style={{ color: '#f3f4f6' }}>Proficiency Level</span>
              )}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(30, 30, 30, 0.9)', 
                  border: '1px solid #333',
                  color: '#f3f4f6',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-blue-900/20 filter blur-5xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-900/20 filter blur-5xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-green-900/20 filter blur-5xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Technical Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-gray-800/50 backdrop-blur-sm shadow-inner">
            <button
              onClick={() => setActiveTab('skills')}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'skills' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {activeTab === 'skills' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg -z-10"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Skills Overview
              </div>
            </button>
            <button
              onClick={() => setActiveTab('charts')}
              className={`relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'charts' 
                  ? 'text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {activeTab === 'charts' && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg -z-10"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Skill Charts
              </div>
            </button>
          </div>
        </div>
        
        {activeTab === 'skills' ? renderSkillsTab() : renderChartsTab()}
      </div>
      
      {/* Add some CSS for the animated gradient */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-x {
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.5), 
            rgba(139, 92, 246, 0.5), 
            rgba(236, 72, 153, 0.5), 
            rgba(59, 130, 246, 0.5)
          );
          background-size: 300% 100%;
          animation: gradient 15s ease infinite;
        }
        
        .skill-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(75, 85, 99, 0.3);
        }
        
        .bg-dark-card {
          background-color: rgba(17, 24, 39, 0.7);
        }
        
        .chart-card {
          transition: all 0.3s ease;
        }
        
        .chart-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default Skills; 