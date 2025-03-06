import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "Carlos is an exceptional blockchain developer. His work on our DeFi protocol was impeccable, implementing complex smart contracts with security as a top priority. He also took the time to explain technical concepts to non-technical team members.",
      author: "Sophia Chen",
      position: "CTO, DeFiPrime",
      image: "https://randomuser.me/api/portraits/women/34.jpg"
    },
    {
      id: 2,
      content: "Working with Carlos on our NFT marketplace was a game-changer. His expertise in smart contract development and blockchain infrastructure helped us launch on schedule and without security issues. Highly recommended!",
      author: "Mark Johnson",
      position: "Founder, NFT Collective",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 3,
      content: "We hired Carlos to audit our existing smart contracts and improve our tokenomics model. His detailed analysis uncovered several potential vulnerabilities and his suggestions significantly improved our protocol's efficiency.",
      author: "Alex Rivera",
      position: "Lead Developer, TokenWorks",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-dark-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Client Testimonials</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            What clients and collaborators say about working with me
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    x: `${(index - currentIndex) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {currentIndex === index && (
                    <div className="bg-dark-card rounded-xl p-8 shadow-xl border border-dark-border">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="relative w-20 h-20 md:w-24 md:h-24">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 animate-pulse"></div>
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.author}
                              className="relative z-10 rounded-full w-full h-full object-cover border-2 border-dark-accent p-1"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <div className="mb-4">
                            <svg className="w-8 h-8 text-blue-500 mb-2" fill="currentColor" viewBox="0 0 32 32">
                              <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-6.66A10.96 10.96 0 0014 0C8.47 0 4 4.47 4 10v1h2v-1c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8v2c5.52 0 10-4.48 10-10 0-2.76-1.12-5.26-2.93-7.07-.82-.82-1.82-1.54-2.97-2.07C16.8 .31 15.42 0 14 0 8.47 0 4 4.47 4 10v1h2v-1c0-4.41 3.59-8 8-8 1.2 0 2.34.27 3.36.74-2.06 1.34-3.36 3.61-3.36 6.26h2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .73-.27 1.4-.7 1.93-.87 1.07-1.44 2.07-1.37 2.07h1.94l.13 4H10V8z"/>
                            </svg>
                            <p className="text-gray-300 text-lg md:text-xl italic leading-relaxed">
                              {testimonial.content}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-bold text-gray-100">{testimonial.author}</h4>
                            <p className="text-blue-400 mt-1">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={goToPrev}
              className="p-2 rounded-full bg-dark-card border border-dark-border text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-dark-card border border-dark-border text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 