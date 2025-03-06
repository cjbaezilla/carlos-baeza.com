import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Blockchain Skills",
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 17V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V17M16 12L12 16M12 16L8 12M12 16V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      skills: [
        "Scrum Master", "Kanban", "Lean", "ITIL", "PMI", "Git", 
        "Linux", "Apache", "Nginx", "WebSocket", "VPN", "TOR", "IoT"
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Technical Expertise</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card hover:border-blue-500 border-2 border-transparent p-6">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8 blockchain-gradient text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-4">Carlos's Current Focus</h3>
              <p className="text-gray-100 mb-4">
                Currently exploring and researching cutting-edge blockchain technologies:
              </p>
              <div className="flex flex-wrap">
                {[
                  "Bitcoin", "Lightning Network", "Taproot Assets", 
                  "BTCPay Server", "Nostr", "Nostr Wallet Connect", 
                  "ASIC Mining", "Self Sovereignty", "Self Custody", 
                  "Scripting", "Security"
                ].map((tech, index) => (
                  <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full mr-2 mb-2 text-sm hover:bg-white/30 transition duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <svg className="w-32 h-32 text-white/80" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.0399 39.74C58.1199 56.66 41.0599 67.12 24.1399 62.2C7.21985 57.28 -3.24015 40.22 1.67985 23.3C6.61985 6.38 23.6799 -4.08 40.5999 0.859999C57.5399 5.81 67.9799 22.86 63.0399 39.74ZM45.8999 35.77L47.4599 30.43L43.4199 29L44.9999 23.47L40.9599 22.04L39.3999 27.38L35.3399 25.95L36.9199 20.62L32.8799 19.19L31.2999 24.52L25.0199 22.36L23.4799 27.86L26.3399 28.74L22.2399 41.95L27.7399 43.49L28.5599 40.63L34.8399 42.78L34.0199 45.64L39.5199 47.18L43.6199 33.97L46.4799 34.85C46.9799 34.01 45.8999 35.77 45.8999 35.77ZM37.1799 38.48L30.8999 36.33L33.2999 29.24L39.5799 31.38L37.1799 38.48Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 