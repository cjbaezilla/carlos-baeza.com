import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">About Carlos</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Carlos Baeza Negroni is a Chilean blockchain engineer and certified smart contract developer with extensive experience in the cryptocurrency and decentralized finance (DeFi) ecosystem. With a strong foundation in IT and a passion for blockchain technology, Carlos has positioned himself as a respected expert in the field.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Throughout his career, Carlos has worked with major organizations like RealT LLC, where he developed Ethereum smart contracts and created internal tools for accounting, compliance, and operations. His expertise spans across multiple blockchain networks including Ethereum, BSC, Solana, Avalanche, and more.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Carlos is known for his innovative approach to blockchain solutions, having developed projects like Pulsechain Faucets, Black Arrow Futures, and the Condor Blockchain. He's also been interviewed by respected industry publications like Cointelegraph and Criptonoticias about his work on stablecoins pegged to the Chilean peso.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center">
                <span className="font-bold mr-2">Nationality:</span>
                <span>Chilean</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Education:</span>
                <span>IT Technician, IACC University</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-2">Graduation:</span>
                <span>2013</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Summary</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Over 10 years of experience in software development with strong focus on blockchain technology since 2020</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Certified Smart Contract Developer and Professional Scrum Master (PSM-1)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Participant in multiple ETHGlobal hackathons, showcasing innovative blockchain solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Published author with expertise in WordPress multisite deployment on Nginx/Ubuntu</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Developer of multiple blockchain projects including stablecoins, NFTs, and DeFi platforms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Currently focused on Bitcoin, Lightning Network, Taproot Assets, and self-sovereignty solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 