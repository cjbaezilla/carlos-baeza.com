import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  // Create individual refs for each experience item
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const experiences = [
    {
      company: "RealT LLC",
      role: "Blockchain Engineer / Smart Contract Developer / Scrum",
      period: "2023 - 2025",
      location: "Remote / Panamá City, Panamá",
      description: "Developed Ethereum Smart Contracts for company's NFT gamification initiatives. Developed internal tooling for accounting, compliance and operations areas with special focus on automation. Performed internal Blockchain/Crypto classes for non-technical areas. Helped hardening client private information at database level. Coordinated work among several different foreign team members from China, France, EEUU, Russia, and others, interacting directly with high profile executives, partners, shareholders, and owners.",
      techStack: ["Token Engineering", "Smart Contracts", "DAO Architecture", "Cross-chain", "AAVE Protocol", "Blockchain Accounting", "API Integrations", "Project Management", "Security", "Scrum"]
    },
    {
      company: "La Cuarta",
      role: "Chief of Development / Project Manager / ITIL",
      period: "2015 - 2016",
      location: "Santiago, Chile",
      description: "Managed daily operational work of the main medium website ensuring its uptime. Worked closely with different areas like marketing to integrate requests without outages to the platform. Supervised hotfixes and production processes. Implemented technical documentation and process improvements across the organization.",
      techStack: ["Server Management", "Database Management", "Technical Documentation", "Process Optimization", "ITIL", "System Hardening", "Technical Debt Management", "Capacity Planning"]
    },
    {
      company: "Radio Bio-Bio",
      role: "Development Manager",
      period: "2014 - 2015",
      location: "Concepción, Chile",
      description: "Worked closely with the company owner, with 5 engineers at my charge, ensuring the operative continuity of the medium website. Coordinated work among different areas to be integrated without outages into the main site on time. Implemented agile methodologies to improve team productivity and project delivery.",
      techStack: ["Team Leadership", "Server Management", "Database Management", "Process Documentation", "Technical Debt", "System Hardening", "Scrum", "Capacity Building"]
    },
    {
      company: "Grupo Copesa",
      role: "Project Manager / Developer / ITIL",
      period: "2013 - 2014",
      location: "Santiago, Chile",
      description: "Coordinated projects among the different mediums of communications of the group. Visited and negotiated with different internal and external parties to achieve the correct project lifecycle on time and expectations, from proposal to production, using ITIL and PMI standards. Facilitated cross-departmental collaboration to ensure project success.",
      techStack: ["Project Management", "ITIL", "PMI Standards", "Server Management", "Database Management", "Technical Documentation", "Negotiation", "Process Improvement"]
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // eslint-disable-next-line no-unused-vars
  const getRefAndInView = (index) => {
    switch(index) {
      case 0: return { ref: ref1, inView: inView1 };
      case 1: return { ref: ref2, inView: inView2 };
      case 2: return { ref: ref3, inView: inView3 };
      case 3: return { ref: ref4, inView: inView4 };
      default: return { ref: ref1, inView: inView1 };
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Enhanced background with gradients and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-dark-secondary to-blue-900/20 z-0"></div>
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-700/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated particles/circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            My journey through technology leadership and blockchain innovation
          </p>
        </motion.div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line with animated gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 z-0 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 animate-pulse opacity-70 rounded-full"></div>
          </div>
          
          {/* Timeline Items */}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row ${
                index % 2 === 0 
                  ? "md:ml-auto md:flex-row md:pr-0 text-left md:items-start items-start" 
                  : "md:mr-auto md:flex-row-reverse md:pl-0 text-left md:text-right md:items-start items-start"
              } z-10`}
            >
              {/* Timeline dot with pulsing animation */}
              <div className="hidden md:flex absolute items-center justify-center left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12">
                <div className="relative w-5 h-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-ping opacity-75"></div>
                </div>
              </div>
              
              {/* Date indicator */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} pb-4 md:pb-0`}>
                <div className="md:hidden relative h-full w-px bg-gradient-to-b from-blue-500 to-indigo-600 absolute left-6 top-8 bottom-0"></div>
                <div className="md:hidden absolute left-4 top-7 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-ping opacity-75"></div>
                </div>
                <div className="pl-12 md:pl-0">
                  <span className="inline-block text-sm md:text-base font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-1.5 rounded-full text-white shadow-md transform hover:scale-105 transition-transform duration-300">
                    {experience.period}
                  </span>
                  <p className="text-blue-300 mt-2 text-sm">{experience.location}</p>
                </div>
              </div>
              
              {/* Experience Card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"} pl-12 md:pl-auto`}>
                <div className="bg-dark-card rounded-xl p-6 md:p-8 shadow-xl border border-dark-border hover:shadow-2xl transition-all duration-300 hover:border-blue-500/30 group backdrop-blur-sm relative overflow-hidden">
                  {/* Subtle card highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-gradient transition-colors duration-300">{experience.role}</h3>
                  <p className="text-blue-400 font-medium text-lg mb-4">{experience.company}</p>
                  
                  <div className="space-y-3">
                    {experience.description.split('.').filter(resp => resp.trim()).map((responsibility, rIndex) => (
                      <div key={rIndex} className="flex items-start group/item">
                        <span className="w-6 text-blue-500 h-5 flex-shrink-0 mr-2 group-hover/item:text-indigo-400 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                          {responsibility.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {experience.techStack.map((skill, sIndex) => (
                      <span 
                        key={sIndex} 
                        className="px-3 py-1.5 bg-dark-primary rounded-full text-xs font-medium text-gray-300 border border-dark-border hover:bg-blue-900/20 hover:text-blue-300 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 