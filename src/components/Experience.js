import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "RealT LLC",
      logo: "🏢",
      location: "Remote / Panamá City, Panamá",
      period: "2023 - 2025",
      title: "Blockchain Engineer / Smart Contract Developer / Scrum",
      description: "Developed Ethereum Smart Contracts for company's NFT gamification initiatives. Created internal tooling for accounting, compliance and operations with a focus on automation. Led blockchain/crypto education for non-technical teams. Enhanced security for client data protection. Coordinated multinational teams across China, France, USA, Russia, and others.",
      responsibilities: [
        "Token engineering",
        "DAO architecture",
        "Cross-chain research",
        "AAVE protocol integration",
        "Blockchain/Crypto accounting",
        "Wallet tracking software",
        "Process documentation",
        "Software architecture",
        "Database modeling",
        "API integrations"
      ]
    },
    {
      company: "Altera S.A",
      logo: "💼",
      location: "Santiago, Chile",
      period: "2018 - 2020",
      title: "Senior Software Engineer / Scrum",
      description: "Developed internal and external financial and payment systems for company services. Coordinated with various departments and vendors to ensure product quality and timely delivery.",
      responsibilities: [
        "Software architecture",
        "Database modeling",
        "API integrations",
        "QA testing",
        "Project management",
        "Scrum facilitation"
      ]
    },
    {
      company: "PlanOK S.A",
      logo: "🖥️",
      location: "Santiago, Chile",
      period: "2017 - 2018",
      title: "Senior Software Engineer",
      description: "Improved and maintained the company's proprietary software platforms.",
      responsibilities: [
        "Code review",
        "Technical debt management",
        "Productivity enhancement",
        "Systems hardening",
        "API integrations",
        "Bug fixing"
      ]
    },
    {
      company: "Xintec LTDA",
      logo: "🌐",
      location: "Santiago, Chile",
      period: "2016 - 2017",
      title: "Junior Business Analyst / Scrum",
      description: "Supported the Business Owner and Scrum Master as part of an international cross-functional team.",
      responsibilities: [
        "Meeting coordination",
        "Work facilitation",
        "Process documentation",
        "Reinforcement learning",
        "Change management",
        "Technical debt tracking",
        "Stakeholder negotiation"
      ]
    },
    {
      company: "Duoc UC",
      logo: "🎓",
      location: "Santiago, Chile",
      period: "2016",
      title: "Engineering School Professor",
      description: "Taught first-year engineering students about Algorithms, Databases, and Project Management.",
      responsibilities: [
        "Class preparation",
        "Material development",
        "Vacation coordination",
        "Student mentoring",
        "Test preparation",
        "Activity planning"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Professional Experience</h2>
        
        <div className="mt-12 relative">
          {/* Timeline track */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-auto md:w-1/2' : 'md:pl-12 md:ml-auto md:mr-auto md:w-1/2'}`}>
              {/* Timeline dot */}
              <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 md:right-0 md:translate-x-6' : 'left-0 md:-translate-x-6'} w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl z-10`}>
                <span>{exp.logo}</span>
              </div>
              
              {/* Content box */}
              <div className={`relative ml-14 md:ml-0 p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition duration-300 ${index % 2 === 0 ? 'md:mr-14' : 'md:ml-14'}`}>
                <span className="text-sm text-gray-500">{exp.period}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{exp.company}</h3>
                <h4 className="text-lg font-semibold text-blue-600">{exp.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                
                <h5 className="font-medium text-gray-800 mb-2">Key Responsibilities:</h5>
                <div className="flex flex-wrap">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <span key={rIndex} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 mr-2 mb-2">
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 