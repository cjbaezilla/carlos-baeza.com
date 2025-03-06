import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the data to a server here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after "submission"
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-16 bg-dark-primary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-dark-card p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-gray-200">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200">Email</h4>
                      <a href="mailto:carlos.baeza@gmail.com" className="text-blue-400 hover:text-blue-300">carlos.baeza@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200">Phone</h4>
                      <a href="tel:+123456789" className="text-gray-300 hover:text-blue-400">+1 (234) 567-890</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-600/20 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200">Location</h4>
                      <p className="text-gray-400">Santiago, Chile</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-gray-200">Connect on Social</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/cjbaezilla" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-gray-200 p-3 rounded-full hover:bg-gray-700 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://app.poap.xyz/scan/baeza.eth" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-dark-card p-6 rounded-lg shadow-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-gray-200">Send Message</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-600/20 text-green-400 p-4 rounded-lg mb-6">
                    <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex justify-center items-center"
                    >
                      {isSubmitted ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 