import React, { useState } from 'react';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      title: "Pulsechain Faucets",
      year: "2023",
      description: "The Pulsechain Faucets NFT introduces a novel distributing mechanism for native unwrapped PLS inside the Pulsechain network.",
      details: "When a user purchases an NFT on Binance Smart Chain or Polygon, 5,000 native PLS are distributed automatically for the user account inside Pulsechain network. It also incorporates a novel distribution mechanism that sends all the PLS received by the contract among the NFT holders proportionally based on users NFT amount.",
      image: "🪙",
      technologies: ["Smart Contracts", "Cross-Chain", "NFT", "Binance Smart Chain", "Polygon", "Pulsechain"]
    },
    {
      title: "Black Arrow Futures",
      year: "2022",
      description: "A novel copy trading platform for Binance Futures with Telegram bot integration for users to manage positions.",
      details: "Every time a master trader defined by the platform opens a position on Binance Futures, the bot automatically opens new positions for all the group members based on the Binance API and user preferences. There's also an automated Tradingview bot written in Pinescript that operates on behalf of users, opening positions based on custom strategies coded by Carlos Baeza.",
      image: "📊",
      technologies: ["Binance API", "TradingView", "Pinescript", "Telegram Bot", "Copy Trading", "Futures Trading"]
    },
    {
      title: "Condor Blockchain",
      year: "2021",
      description: "A public distributed permissioned blockchain compatible with smart contracts and the entire Ethereum ecosystem tooling like Metamask.",
      details: "The network was built using the Hyperledger Besu framework stack, adopting the IBFT 2.0 consensus for low energy consumption, with high throughput and immediate network finality. A native Uniswap v2 fork was launched in the network along with Gnosis safe vaults for multisig wallets.",
      image: "🦅",
      technologies: ["Hyperledger Besu", "IBFT 2.0", "Ethereum Compatible", "Uniswap Fork", "Gnosis Safe", "Smart Contracts"]
    },
    {
      title: "Solana Faction Cards",
      year: "2021",
      description: "Collection of 1,333 custom NFT on the Solana Blockchain which enabled staking, voting, and playing a strategy browser game using the NFT cards.",
      details: "The NFTs were minted using the CandyMachine library and the metadata was stored on Arweave network.",
      image: "🃏",
      technologies: ["Solana", "CandyMachine", "Arweave", "NFT", "Gaming", "Staking"]
    },
    {
      title: "CriptoMU Online",
      year: "2021",
      description: "The classic and traditional original MU Online game with token economy integrations, allowing players to exchange in-game gold for on-chain tokens.",
      details: "All the gold farmed by users inside the game was available to be switched for the token representation of it and to be traded on Uniswap Dex. Users could purchase the tokens on Uniswap and spend them in the game, paying for items, subscriptions, and in-game utility.",
      image: "🎮",
      technologies: ["Gaming", "Token Economy", "Uniswap", "DeFi", "P2E", "Game Integration"]
    },
    {
      title: "Copihue Stablecoin",
      year: "2020",
      description: "A stablecoin pegged to the Chilean CLP currency.",
      details: "Custom algorithmic approach for a non-collateralized stablecoin.",
      image: "💰",
      technologies: ["Stablecoin", "Algorithmic", "CLP Pegged", "Ethereum", "Finance"]
    },
    {
      title: "Cordillera EVM Bridge",
      year: "2020",
      description: "The Cordillera Bridge was a custom home made ERC20 and native token bridge between any EVM compatible network.",
      details: "The bridge implements a custom logic which considers 2 actors as signers to transfer tokens between networks using on-chain hash and sign validations.",
      image: "🌉",
      technologies: ["Bridge", "Cross-Chain", "ERC20", "Multi-Signature", "Interoperability"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">Blockchain</span> Projects
        </h2>
        
        <div className="grid grid-cols-4 md:grid-cols-7 gap-4 mb-8">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-2 rounded-lg transition-all duration-300 text-center ${activeIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <div className="text-2xl mb-1">{project.image}</div>
              <div className="text-xs md:text-sm truncate">{project.title}</div>
            </button>
          ))}
        </div>
        
        <div className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 shadow-2xl">
          <div className="md:grid md:grid-cols-2">
            <div className="p-8 flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800">
              <div className="text-9xl">{projects[activeIndex].image}</div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl md:text-3xl font-bold">{projects[activeIndex].title}</h3>
                <span className="px-3 py-1 rounded-full bg-blue-600 text-sm">{projects[activeIndex].year}</span>
              </div>
              
              <p className="text-xl text-gray-300 mb-4">{projects[activeIndex].description}</p>
              <p className="text-gray-400 mb-6">{projects[activeIndex].details}</p>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-300">Technologies Used:</h4>
                <div className="flex flex-wrap">
                  {projects[activeIndex].technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 rounded-full mr-2 mb-2 bg-gray-700 text-blue-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Hackathon Participation</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Carlos has actively participated in numerous blockchain hackathons, demonstrating his 
            commitment to continuous learning and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "ETHOnline By ETHGlobal", date: "Sept 17 - Oct 15, 2021", url: "https://online.ethglobal.com" },
              { name: "Celo's Make Crypto Mobile", date: "Oct 8 - Nov 28, 2021", url: "https://mobiledefi.devpost.com" },
              { name: "NFTHack By ETHGlobal", date: "Jan 14-16, 2022", url: "https://nft.ethglobal.co" },
              { name: "Road To Web3 By ETHGlobal", date: "February 3-9, 2022", url: "https://web3.ethglobal.com" },
              { name: "BUILD Quest By ETHGlobal", date: "March 4-16, 2022", url: "https://buildquest.ethglobal.com" },
              { name: "LFGrow By ETHGlobal", date: "March 18-30, 2022", url: "https://lfgrow.ethglobal.com" },
              { name: "DAOHacks By ETHGlobal", date: "Apr 8-10, 2022", url: "https://dao.ethglobal.com" },
              { name: "Hack Money By ETHGlobal", date: "May 6-27, 2022", url: "https://hackathon.money" }
            ].map((hackathon, index) => (
              <a 
                key={index}
                href={hackathon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300"
              >
                <h4 className="font-bold text-blue-400">{hackathon.name}</h4>
                <p className="text-sm text-gray-400">{hackathon.date}</p>
              </a>
            ))}
          </div>
          
          <div className="mt-8">
            <a 
              href="https://app.poap.xyz/scan/baeza.eth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
            >
              <span className="mr-2">View POAPs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 