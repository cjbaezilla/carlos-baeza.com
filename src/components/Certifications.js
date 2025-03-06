import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Ethereum Básico",
      organization: "Blockchain Academy Chile",
      icon: "🔹",
      url: "https://registrado.org/r/1ead5c69b0015f8ed7ff730ff0c9163e8852ffc6.jpg"
    },
    {
      title: "Blockchain: Foundations and Use Cases",
      organization: "Coursera/Consensys",
      icon: "🔷",
      url: "https://coursera.org/share/26189cd0c0f12adb616cc0ec6fd81b62"
    },
    {
      title: "Certified Smart Contract Developer",
      organization: "Blockchain Council",
      icon: "📜",
      url: "https://certificates.blockchain-council.org/0e592af0-a148-48e6-92f3-872378740fd7"
    },
    {
      title: "Professional Scrum Master PSM-1",
      organization: "Scrum.org",
      icon: "🔄",
      url: "https://www.scrum.org/user/228026"
    }
  ];

  const publications = [
    {
      title: "Up And Running WordPress Multisite using Nginx on Ubuntu 14.04",
      type: "Book",
      url: "https://a.co/d/15mfHRP"
    }
  ];

  const interviews = [
    {
      title: "Ingeniero Carlos Baeza Negroni: 'Copihue es una stablecoin, anclada al valor del peso chileno'",
      publication: "Cointelegraph",
      url: "https://es.cointelegraph.com/news/engineer-carlos-baeza-negroni-copihue-is-a-stablecoin-anchored-to-the-value-of-the-chilean-peso"
    },
    {
      title: "Inspirada en DAI, la stablecoin Copihue podría tener paridad con el peso de Chile",
      publication: "Criptonoticias",
      url: "https://www.criptonoticias.com/entrevistas/inspirada-dai-stablecoin-copihue-tener-paridad-peso-chile"
    },
    {
      title: "Interview With A Crypto Developer: Carlos Baeza Negroni",
      publication: "Metacoin",
      url: "https://metacoin.co/interview-with-a-crypto-developer-carlos-baeza-negroni"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Certifications & Publications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition duration-300"
                >
                  <div className="flex items-start">
                    <div className="text-2xl mr-3">{cert.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{cert.title}</h4>
                      <p className="text-sm text-gray-600">{cert.organization}</p>
                      <div className="mt-2 text-blue-600 text-xs flex items-center">
                        <span>View Certificate</span>
                        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Publications
            </h3>
            
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <a
                  key={index}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition duration-300"
                >
                  <div>
                    <h4 className="font-medium text-gray-900">{pub.title}</h4>
                    <p className="text-sm text-gray-600">{pub.type}</p>
                    <div className="mt-2 text-blue-600 text-xs flex items-center">
                      <span>View Publication</span>
                      <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Interviews
            </h3>
            
            <div className="space-y-4">
              {interviews.map((interview, index) => (
                <a
                  key={index}
                  href={interview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition duration-300"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 line-clamp-2">{interview.title}</h4>
                    <p className="text-sm text-gray-600">Published by {interview.publication}</p>
                    <div className="mt-2 text-blue-600 text-xs flex items-center">
                      <span>Read Interview</span>
                      <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-blue-600 rounded-lg shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Educational Background</h3>
          <div className="inline-block bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-5xl mb-4">🎓</div>
            <h4 className="text-xl font-bold">IT Technician</h4>
            <p className="opacity-90">IACC University, Santiago, Chile</p>
            <p className="text-sm opacity-80 mt-1">Graduated in 2013</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 