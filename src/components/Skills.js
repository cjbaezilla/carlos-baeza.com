import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Cell,
  PieChart, Pie
} from 'recharts';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
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
      id: "blockchain",
      title: "Blockchain Skills",
      icon: (
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12C2 8.13 5.13 5 9 5H15C18.87 5 22 8.13 22 12C22 15.87 18.87 19 15 19H9C5.13 19 2 15.87 2 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill="currentColor"/>
          <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="currentColor"/>
          <path d="M21 12C21 13.6569 19.6569 15 18 15C16.3431 15 15 13.6569 15 12C15 10.3431 16.3431 9 18 9C19.6569 9 21 10.3431 21 12Z" fill="currentColor"/>
        </svg>
      ),
      color: "from-blue-500/80 to-indigo-500/80",
      bgColor: "bg-blue-900/10",
      mainSkills: [
        { name: 'Ethereum', value: 92 },
        { name: 'Solidity', value: 95 },
        { name: 'Smart Contracts', value: 90 }
      ],
      skills: [
        "Web3.js", "Ethers.js", "OpenZeppelin", "Hardhat", "Truffle", 
        "DAOs", "NFTs", "DeFi", "BSC", "Solana", "Avalanche", "RSK", 
        "Polygon", "Gnosis", "Chainlink", "Hyperledger", "Liquidity Pools", "Staking"
      ]
    },
    {
      id: "programming",
      title: "Programming Languages",
      icon: (
        <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 3V5.4C8 5.96005 8 6.24008 7.89443 6.45399C7.80306 6.64215 7.64215 6.80306 7.45399 6.89443C7.24008 7 6.96005 7 6.4 7H3M8 3H16M8 3V2.6C8 2.03995 8 1.75992 8.10557 1.54601C8.19694 1.35785 8.35785 1.19694 8.54601 1.10557C8.75992 1 9.03995 1 9.6 1H14.4C14.9601 1 15.2401 1 15.454 1.10557C15.6422 1.19694 15.8031 1.35785 15.8944 1.54601C16 1.75992 16 2.03995 16 2.6V3M16 3V5.4C16 5.96005 16 6.24008 16.1056 6.45399C16.1969 6.64215 16.3578 6.80306 16.546 6.89443C16.7599 7 17.0399 7 17.6 7H21M3 7V19.4C3 19.9601 3 20.2401 3.10557 20.454C3.19694 20.6422 3.35785 20.8031 3.54601 20.8944C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.8944C20.6422 20.8031 20.8031 20.6422 20.8944 20.454C21 20.2401 21 19.9601 21 19.4V7M12 12L7 15.5V8.5L12 12ZM12 12L17 8.5V15.5L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-green-500/80 to-emerald-500/80",
      bgColor: "bg-green-900/10",
      mainSkills: [
        { name: 'PHP', value: 90 },
        { name: 'JavaScript', value: 85 },
        { name: 'Go', value: 75 }
      ],
      skills: [
        "ReactJS", "NextJS", "ExpressJS", "SailsJS", "REST APIs",
        "CakePHP", "Symfony", "Laravel"
      ]
    },
    {
      id: "databases",
      title: "Databases & ORM",
      icon: (
        <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5C4 3.34315 7.58172 2 12 2C16.4183 2 20 3.34315 20 5C20 6.65685 16.4183 8 12 8C7.58172 8 4 6.65685 4 5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 5V19C4 20.6569 7.58172 22 12 22C16.4183 22 20 20.6569 20 19V5" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "from-purple-500/80 to-violet-500/80",
      bgColor: "bg-purple-900/10",
      mainSkills: [
        { name: 'MySQL/MariaDB', value: 88 },
        { name: 'MongoDB', value: 85 },
        { name: 'PostgreSQL', value: 80 }
      ],
      skills: [
        "SQL Server", "Prisma ORM", "Mongoose"
      ]
    },
    {
      id: "frontend",
      title: "Front-End & CMS",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5H20V19H4V5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 9H20" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 5V9" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "from-yellow-500/80 to-amber-500/80",
      bgColor: "bg-yellow-900/10",
      mainSkills: [
        { name: 'React', value: 88 },
        { name: 'TailwindCSS', value: 92 },
        { name: 'Wordpress', value: 85 }
      ],
      skills: [
        "Styled Components", "Ant Design", "ElasticUI", 
        "Material Design", "DaisyUI", "Prestashop", 
        "WooCommerce", "Drupal", "Magento", "Moodle", "Shopify"
      ]
    },
    {
      id: "methodologies",
      title: "Methodologies & Others",
      icon: (
        <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 17V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V17M16 12L12 16M12 16L8 12M12 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "from-red-500/80 to-rose-500/80",
      bgColor: "bg-red-900/10",
      mainSkills: [
        { name: 'Scrum', value: 90 },
        { name: 'Git', value: 95 },
        { name: 'Linux', value: 85 }
      ],
      skills: [
        "Kanban", "Lean", "ITIL", "PMI", 
        "Apache", "Nginx", "WebSocket", "VPN", "TOR", "IoT"
      ]
    },
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

  // Function to toggle category selection
  const toggleCategory = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  // Colors for chart elements
  const getColorForIndex = (index) => {
    const colors = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#EF4444', '#6366F1'];
    return colors[index % colors.length];
  };

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
        
        {/* Full Stack Radar Chart - Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 max-w-3xl mx-auto"
        >
          <motion.div 
            variants={itemVariants} 
            className="rounded-2xl overflow-hidden backdrop-blur-sm bg-dark-card/80 shadow-lg border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500"
            whileHover={{ 
              boxShadow: "0 20px 40px -5px rgba(59, 130, 246, 0.2)",
              scale: 1.01
            }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-100 flex items-center">
                <span className="w-10 h-10 inline-flex items-center justify-center bg-indigo-500/20 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </span>
                Full Stack Development Profile
              </h3>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/5">
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart outerRadius={120} data={fullStackSkillsData}>
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
                <div className="w-full md:w-2/5 mt-4 md:mt-0 md:pl-8">
                  <h4 className="text-lg font-semibold text-gray-100 mb-4">Expertise Balance</h4>
                  <p className="text-gray-400 mb-6">My technical profile shows a strong balance across the full stack with exceptional strengths in blockchain and backend development.</p>
                  <div className="space-y-3">
                    {fullStackSkillsData.map((skill, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-gray-300">{skill.subject}</span>
                        <div className="w-32 bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="h-2.5 rounded-full" 
                            style={{ 
                              width: `${skill.A}%`,
                              backgroundColor: getColorForIndex(idx)
                            }}
                          ></div>
                        </div>
                        <span className="text-gray-400 w-8 text-right">{skill.A}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Skill Categories Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`rounded-xl relative overflow-hidden transition-all duration-500 ${
                selectedCategory === category.id ? 'col-span-full md:col-span-2 lg:col-span-3' : ''
              }`}
              layoutId={`card-${category.id}`}
              onClick={() => toggleCategory(category.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-30 hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-30 blur-xl group-hover:opacity-40`}></div>
              
              <div className={`p-6 bg-dark-card/90 h-full rounded-xl backdrop-filter backdrop-blur-sm relative z-10 border border-gray-800/50 
                ${selectedCategory === category.id ? 'border-blue-500/50' : 'hover:border-gray-700/80'} transition-colors duration-300`}>
                
                <div className="flex items-center mb-5">
                  <div className={`p-3 rounded-full ${category.bgColor}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-100">{category.title}</h3>
                </div>
                
                {selectedCategory === category.id ? (
                  <div className="expanded-content">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col lg:flex-row"
                    >
                      {/* Main skills bar chart */}
                      <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">Proficiency Levels</h4>
                        <ResponsiveContainer width="100%" height={200}>
                          <BarChart data={category.mainSkills} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" strokeOpacity={0.5} />
                            <XAxis type="number" domain={[0, 100]} tick={{fill: '#9ca3af'}} />
                            <YAxis dataKey="name" type="category" tick={{fill: '#9ca3af'}} width={100} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'rgba(30, 30, 30, 0.9)', 
                                border: '1px solid #333',
                                color: '#f3f4f6',
                                borderRadius: '8px'
                              }} 
                            />
                            <Bar dataKey="value" animationDuration={1500}>
                              {category.mainSkills.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getColorForIndex(index)} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                        <div className="mt-4">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategory(null);
                            }}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 mt-4 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Close
                          </button>
                        </div>
                      </div>
                      
                      {/* All skills */}
                      <div className="lg:w-1/2 lg:pl-8">
                        <h4 className="text-lg font-semibold text-gray-200 mb-4">All {category.title}</h4>
                        <div className="flex flex-wrap">
                          {[...category.mainSkills.map(s => s.name), ...category.skills].map((skill, skillIndex) => (
                            <motion.span 
                              key={skillIndex} 
                              className="skill-badge m-1 py-1.5 px-3 bg-gray-800/60 text-gray-300 text-sm font-medium rounded-full transition-all duration-300"
                              whileHover={{ 
                                scale: 1.05, 
                                backgroundColor: "rgba(59, 130, 246, 0.3)", 
                                color: "white"
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="collapsed-content">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-gray-300 font-medium">Top Skills</h4>
                      <span className="text-xs text-gray-500 bg-gray-800/60 px-2 py-1 rounded-full">
                        {category.mainSkills.length + category.skills.length} skills
                      </span>
                    </div>
                    
                    {/* Skill pills - preview */}
                    <div className="flex flex-wrap mb-3">
                      {category.mainSkills.map((skill, idx) => (
                        <div key={idx} className="flex items-center mr-4 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full mr-1" style={{ backgroundColor: getColorForIndex(idx) }}></div>
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Skill progress bars */}
                    <div className="space-y-2">
                      {category.mainSkills.map((skill, idx) => (
                        <div key={idx} className="w-full bg-gray-800/60 h-1.5 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full"
                            style={{ backgroundColor: getColorForIndex(idx) }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.value}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.2 * idx,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-right mt-4">
                      <span className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300">
                        Click to expand
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
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
        
        .bg-dark-card {
          background-color: rgba(17, 24, 39, 0.7);
        }
        
        .skill-badge {
          transition: all 0.3s ease;
        }
        
        .expanded-content {
          height: auto;
          transition: height 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Skills; 