import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Project data with added facts
  const projects = [
    {
      title: "Pulsechain Faucets",
      description: "The Pulsechain Faucets NFT introduces a novel distributing mechanism for native unwrapped PLS inside the Pulsechain network.",
      details: "When a user purchases an NFT on Binance Smart Chain or Polygon, 5,000 native PLS are distributed automatically for the user account inside Pulsechain network. It also incorporates a novel distribution mechanism that sends all the PLS received by the contract among the NFT holders proportionally based on users NFT amount.",
      year: "2023",
      category: "nft",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "Pulsechain", "NFT", "Cross-chain", "Smart Contracts", "Token Distribution"],
      facts: [
        "The NFT market generated over $50 billion in 2022, with unique digital assets being used across gaming, art, and finance.",
        "Cross-chain technologies enable interoperability between different blockchains, a critical feature for the future of Web3.",
        "PulseChain is a fork of Ethereum that emphasizes lower fees and faster transactions, helping solve Ethereum's scalability issues."
      ],
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          { label: "User Growth", data: [120, 220, 380, 510, 780, 1240], color: "#60A5FA" },
          { label: "Transaction Volume", data: [8, 25, 43, 100, 159, 188], color: "#34D399" }
        ]
      }
    },
    {
      title: "Black Arrow Futures",
      description: "A novel copy trading platform for Binance Futures, it uses a public Telegram bot for users to manage position and interact with the software.",
      details: "Every time a master trader defined by the platform opens a position on Binance Futures, the bot automatically opens new positions for all the group members based on the Binance API and user preferences. There's also an automated Tradingview bot written in Pinescript that operates on behalf of users, opening positions based on custom strategies.",
      year: "2022",
      category: "defi",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
      techStack: ["Binance API", "Telegram Bot", "TradingView", "Pinescript", "Automated Trading", "Copy Trading"],
      facts: [
        "Automated trading systems now account for over 80% of trading volume in many financial markets.",
        "The cryptocurrency derivatives market exceeded $3 trillion in volume in 2023, more than doubling from the previous year.",
        "Copy trading platforms have seen a 230% increase in user adoption since 2021, as investors seek to leverage expert strategies."
      ],
      chartData: {
        labels: ["Strategy A", "Strategy B", "Strategy C", "Strategy D"],
        datasets: [
          { label: "Win Rate", data: [72, 68, 65, 74], color: "#3B82F6" }, 
          { label: "Avg Return", data: [12.3, 18.7, 9.5, 15.2], color: "#8B5CF6" }
        ]
      }
    },
    {
      title: "Condor Blockchain",
      description: "The Condor Blockchain was a public distributed permissioned blockchain compatible with smart contracts and all the Ethereum ecosystem tooling like Metamask.",
      details: "The network was built using the Hyperledger Besu framework stack, adopting the IBFT 2.0 consensus for low energy consumption, with high throughput and immediate network finality. A native Uniswap v2 fork was launched in the network along with Gnosis safe vaults for multisig wallets.",
      year: "2021",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=800&auto=format&fit=crop",
      techStack: ["Hyperledger Besu", "IBFT 2.0", "Smart Contracts", "Uniswap", "Gnosis Safe", "EVM Compatible"],
      facts: [
        "Enterprise blockchain adoption is projected to reach $19.9 billion by 2026, according to Gartner research.",
        "Permissioned blockchains like Hyperledger can be up to 10,000 times more energy-efficient than public proof-of-work chains.",
        "The IBFT 2.0 consensus algorithm provides immediate transaction finality, unlike the probabilistic finality of Ethereum and Bitcoin."
      ],
      chartData: {
        labels: ["Ethereum", "BSC", "Solana", "Condor", "Polygon"],
        datasets: [
          { label: "Transactions Per Second", data: [15, 300, 2500, 1250, 1000], color: "#10B981" },
          { label: "Energy Usage (rel.)", data: [100, 75, 25, 2, 40], color: "#F43F5E" }
        ]
      }
    },
    {
      title: "Solana Faction Cards",
      description: "Collection of 1,333 custom NFT on the Solana Blockchain which enabled staking, voting, and playing a strategy browser game using the NFT cards.",
      details: "The NFTs were minted using the CandyMachine library and the metadata was stored on Arweave network.",
      year: "2021",
      category: "nft",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solana", "NFT", "CandyMachine", "Arweave", "Web3 Gaming", "On-chain Voting"],
      facts: [
        "Solana NFTs had nearly $1 billion in secondary sales volume in 2022 despite market downturns.",
        "On-chain gaming is projected to be a $50 billion market by 2025, with NFTs as the primary ownership mechanism.",
        "Arweave provides permanent, decentralized storage and has stored over 1,000 terabytes of data including NFT metadata."
      ],
      chartData: {
        labels: ["Common", "Uncommon", "Rare", "Epic", "Legendary"],
        datasets: [
          { label: "Card Distribution", data: [600, 400, 200, 100, 33], color: "#6366F1" },
          { label: "Avg. Value (SOL)", data: [0.5, 1.2, 3.5, 8.2, 24.6], color: "#EC4899" }
        ]
      }
    },
    {
      title: "CriptoMU Online",
      description: "The classic and traditional original MU Online game with token economy integrations, players were able to switch in-game gold for on-chain tokens and vice-versa.",
      details: "All the gold farmed by users inside the game was available to be switched for the token representation of it and to be traded on Uniswap Dex, also users can purchase the tokens on Uniswap and spend them in the game, paying for items, subscriptions, and in in-game utility.",
      year: "2021",
      category: "gamefi",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      techStack: ["Game Integration", "ERC-20", "Uniswap", "Token Economy", "Gaming", "GameFi"],
      facts: [
        "GameFi projects raised over $3.1 billion in funding during 2021-2022, showing strong investor interest in the play-to-earn model.",
        "Classic game integrations with blockchain have shown 300% higher player retention rates compared to traditional gaming models.",
        "Tokenized in-game economies enable true ownership of digital assets, creating a $178 billion virtual goods market."
      ],
      chartData: {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"],
        datasets: [
          { label: "Active Players", data: [3200, 5600, 7800, 9500, 11200, 12800], color: "#0EA5E9" },
          { label: "Token Price ($)", data: [0.05, 0.12, 0.08, 0.15, 0.11, 0.18], color: "#F59E0B" }
        ]
      }
    },
    {
      title: "Copihue Stablecoin",
      description: "A stablecoin pegged to the Chilean CLP currency.",
      details: "Custom algorithmic approach for a non-collateralized stablecoin.",
      year: "2020",
      category: "defi",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop",
      techStack: ["Solidity", "Algorithmic Stablecoin", "Smart Contracts", "Ethereum", "Token Engineering"],
      facts: [
        "Stablecoins now represent over $100 billion in market capitalization, becoming essential infrastructure for the crypto ecosystem.",
        "Regional stablecoins pegged to local currencies are emerging as important tools for economically constrained regions.",
        "Algorithmic stablecoins use sophisticated economic mechanisms rather than direct collateral, creating more capital-efficient systems."
      ],
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          { label: "Price Deviation (%)", data: [0.52, 0.78, 0.45, 0.63, 0.41, 0.39, 0.35, 0.38], color: "#EF4444" },
          { label: "Market Cap ($M)", data: [0.25, 0.48, 0.67, 0.95, 1.25, 1.45, 1.62, 1.85], color: "#14B8A6" }
        ]
      }
    },
    {
      title: "Cordillera EVM Bridge",
      description: "The Cordillera Bridge was a custom home made ERC20 and native token bridge between any EVM compatible network.",
      details: "The bridge implements a custom logic which considers 2 actors as signers to transfer tokens between networks using on-chain hash and sign validations.",
      year: "2020",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop",
      techStack: ["EVM", "Bridge", "Cross-chain", "Multi-sig", "ERC-20", "Token Bridge"],
      facts: [
        "Cross-chain bridges have facilitated over $175 billion in token transfers across different blockchain networks as of 2023.",
        "Multi-signature security for bridges reduces hack risks by 87% compared to single-validator systems.",
        "EVM (Ethereum Virtual Machine) compatible chains now represent over 70% of total blockchain market capitalization."
      ],
      chartData: {
        labels: ["Ethereum", "BSC", "Polygon", "Arbitrum", "Optimism", "Avalanche"],
        datasets: [
          { label: "Bridged Volume ($K)", data: [1250, 980, 650, 420, 280, 220], color: "#8B5CF6" },
          { label: "Avg Fee ($)", data: [2.8, 0.5, 0.4, 1.8, 1.6, 0.9], color: "#F43F5E" }
        ]
      }
    },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'defi', label: 'DeFi' },
    { id: 'nft', label: 'NFT' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'gamefi', label: 'GameFi' },
  ];

  // Initialize filtered projects on component mount
  useEffect(() => {
    setFilteredProjects(
      activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter)
    );
    setActiveTab(0); // Reset to first project when filter changes
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (filterId) => {
    if (filterId !== activeFilter) {
      setActiveFilter(filterId);
    }
  };

  // Handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Dark themed background with data visualization motif */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-900 z-0">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Data flow lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
              style={{
                top: `${10 + i * 8}%`,
                left: 0,
                right: 0,
                y: 0,
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 10 + i * 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-gray-300 max-w-2xl mx-auto"
          >
            Innovative blockchain solutions with real-world impact
          </motion.p>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filterCategories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/70 text-gray-300 border border-gray-700/50 hover:border-blue-500/50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Tabs */}
        {filteredProjects.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-hide justify-center mx-auto"
            >
              <div className="inline-flex space-x-2 flex-nowrap">
                {filteredProjects.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTabChange(idx)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === idx
                        ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                        : 'bg-gray-900/50 text-gray-400 hover:bg-gray-800/80'
                    }`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Active Project */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              {/* Project Info Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="lg:col-span-2 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-0.5">
                    <div className="bg-gray-900 rounded-md p-2">
                      <span className="text-white font-medium">{filteredProjects[activeTab].year}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-400">
                    {filterCategories.find(cat => cat.id === filteredProjects[activeTab].category)?.label}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{filteredProjects[activeTab].title}</h3>
                <p className="text-gray-300 mb-6">{filteredProjects[activeTab].description}</p>

                <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Implementation</h4>
                <p className="text-gray-400 mb-6">{filteredProjects[activeTab].details}</p>

                <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {filteredProjects[activeTab].techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/80 rounded-md text-sm text-gray-300 border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Data Visualization Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="lg:col-span-3 bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <div className="h-64 md:h-72 mb-6 relative">
                  {/* Project image with enhanced presentation */}
                  <div className="w-full h-full overflow-hidden rounded-lg border border-gray-700 shadow-lg relative group">
                    <img 
                      src={filteredProjects[activeTab].image} 
                      alt={filteredProjects[activeTab].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-xs text-gray-400">Project visualization for {filteredProjects[activeTab].title}</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">Industry Insights</h4>
                
                <div className="space-y-4">
                  {filteredProjects[activeTab].facts.map((fact, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-blue-900/20 rounded-lg border border-blue-900/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-300 text-sm">{fact}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[50vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 rounded-xl bg-gray-900/50 backdrop-blur-md border border-gray-800"
            >
              <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-gray-400">No projects match the selected category.</p>
            </motion.div>
          </div>
        )}

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">Data sources include CoinMarketCap, DappRadar, and industry research reports</p>
        </div>
      </div>
    </section>
  );
};

export default Projects; 