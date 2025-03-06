import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  // Sample education data
  const education = [
    {
      period: '2010 - 2013',
      degree: 'IT Technical Degree',
      institution: 'IACC University, Santiago, Chile',
      description: 'Specialized in information technology and systems administration.'
    },
    {
      period: '2014 - 2015',
      degree: 'Blockchain Fundamentals',
      institution: 'Online Education Platform',
      description: 'Comprehensive study of blockchain architecture, cryptography, and distributed systems.'
    }
  ];

  // Sample certification data
  const certifications = [
    {
      name: 'Certified Smart Contract Developer',
      issuer: 'Blockchain Council',
      date: 'May 2022',
      description: 'Advanced certification in smart contract development, security, and auditing techniques.',
      link: 'https://example.com/cert/1'
    },
    {
      name: 'Professional Scrum Master (PSM-1)',
      issuer: 'Scrum.org',
      date: 'January 2021',
      description: 'Official certification in Scrum methodologies and agile project management.',
      link: 'https://example.com/cert/2'
    },
    {
      name: 'Bitcoin & Cryptocurrency Technologies',
      issuer: 'Princeton University (Coursera)',
      date: 'March 2020',
      description: 'In-depth study of cryptocurrency mechanics, Bitcoin protocol, and blockchain technology.',
      link: 'https://example.com/cert/3'
    }
  ];

  // Sample courses data
  const courses = [
    {
      name: 'Ethereum and Solidity: The Complete Developer\'s Guide',
      provider: 'Udemy',
      date: 'April 2021',
      link: 'https://example.com/course/1'
    },
    {
      name: 'NFT Fundamentals',
      provider: 'Buildspace',
      date: 'June 2021',
      link: 'https://example.com/course/2'
    },
    {
      name: 'DeFi Infrastructure and Protocols',
      provider: 'Consensys Academy',
      date: 'September 2021',
      link: 'https://example.com/course/3'
    },
    {
      name: 'Advanced JavaScript Concepts',
      provider: 'Frontend Masters',
      date: 'February 2020',
      link: 'https://example.com/course/4'
    },
    {
      name: 'Rust Programming Language',
      provider: 'Rust Foundation',
      date: 'November 2021',
      link: 'https://example.com/course/5'
    },
    {
      name: 'Zero Knowledge Proofs',
      provider: 'zk-Learning',
      date: 'March 2022',
      link: 'https://example.com/course/6'
    }
  ];

  return (
    <section id="education" className="py-16 bg-dark-primary relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development in blockchain technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-dark-border h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5m-9 5v9m-9-9h18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-200">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-blue-600 pb-1"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <span className="inline-block mb-1 text-sm text-blue-500 font-medium">
                      {edu.period}
                    </span>
                    <h4 className="text-lg font-bold text-gray-200 mb-1">{edu.degree}</h4>
                    <p className="text-blue-400">{edu.institution}</p>
                    <p className="text-gray-400 mt-2">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-dark-card rounded-xl p-6 shadow-lg border border-dark-border h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-200">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-dark-secondary rounded-lg p-4 border border-dark-border"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-gray-200 mb-1">{cert.name}</h4>
                        <p className="text-blue-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                        <p className="text-gray-400 text-sm">{cert.description}</p>
                        {cert.link && (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            View Certificate
                            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-dark-card rounded-xl p-6 shadow-lg border border-dark-border mt-8"
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-200">Additional Courses</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-dark-secondary rounded-lg p-4 border border-dark-border"
              >
                <h4 className="font-bold text-gray-200 mb-1">{course.name}</h4>
                <p className="text-blue-400 text-sm mb-2">{course.provider}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">{course.date}</span>
                  {course.link && (
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 