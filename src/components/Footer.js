import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const canvasRef = useRef(null);
  
  // Creative canvas animation for footer background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1
      });
    }
    
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
    }
    
    animate();
    
    return () => {
      // Cleanup animation on unmount
      cancelAnimationFrame(animate);
    };
  }, []);
  
  return (
    <footer className="relative pt-20 pb-16 overflow-hidden">
      {/* Canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Transition connector from Hackathons section */}
      <div className="footer-transition-connector relative w-full overflow-hidden">
        {/* Digital circuit pattern */}
        <div className="circuit-pattern absolute w-full h-16 overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent w-3/4 mx-auto mb-6"></div>
          
          <div className="flex justify-center space-x-8 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative">
                <div 
                  className="w-3 h-3 rounded-full bg-indigo-500 opacity-80"
                  style={{
                    boxShadow: '0 0 12px rgba(99, 102, 241, 0.7)',
                    animation: `pulse-bright 3s infinite ${i * 0.3}s`
                  }}
                ></div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-10 bg-gradient-to-b from-indigo-400 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Connecting hexagon pattern */}
        <div className="hexagon-pattern relative h-20 mt-10">
          <div className="flex justify-center space-x-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i} 
                className="hexagon relative"
                style={{
                  transform: `translateY(${(i % 2) * 10}px)`
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border border-indigo-400 opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rotate-45 border border-indigo-300 opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rotate-45 bg-indigo-500 opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Asymmetric content container */}
      <div className="container relative z-10 mx-auto px-4">
        
        {/* Unconventional layout with asymmetric elements */}
        <div className="flex flex-col items-center mb-16">
          <div className="transform -rotate-3 mb-8">
            <h2 className="text-5xl font-black italic tracking-tighter">
              <span className="text-yellow-400">CREATE</span>
              <span className="text-cyan-500">.</span>
              <span className="text-purple-500">DISRUPT</span>
              <span className="text-pink-500">.</span>
              <span className="text-blue-400">EVOLVE</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl font-light italic text-purple-200 mb-6">
              "The blockchain isn't just a technology, it's a canvas for reimagining the future."
            </p>
          </div>
        </div>
        
        {/* Scattered social links */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {[
            { 
              name: 'GitHub', 
              url: 'https://github.com/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-purple-700 border-2 border-purple-500',
              transform: 'rotate(1deg)'
            },
            { 
              name: 'Twitter', 
              url: 'https://twitter.com/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-cyan-700 border-2 border-cyan-500',
              transform: 'rotate(-3deg)'
            },
            { 
              name: 'LinkedIn', 
              url: 'https://linkedin.com/in/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-blue-700 border-2 border-blue-500',
              transform: 'rotate(1deg)'
            },
            { 
              name: 'Email', 
              url: 'mailto:cjbaezilla@example.com',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-pink-700 border-2 border-pink-500',
              transform: 'rotate(-2deg)'
            }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform ${social.transform} hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-16 h-16 rounded-2xl ${social.color} text-white shadow-lg hover:shadow-xl backdrop-blur-sm`}
              style={{ 
                clipPath: index % 2 === 0 
                  ? 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)' 
                  : 'polygon(0% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 75%)'
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        {/* Creative name display */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70"></div>
            <div className="relative px-6 py-3 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm border-2 border-cyan-400 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-white">
                  <span className="inline-block animate-bounce text-yellow-300 mr-1">⚡</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400">
                    lightning@carlos-baeza.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blockchain-inspired elements */}
        <div className="flex justify-center mb-8 overflow-hidden">
          <div className="flex space-x-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <div 
                key={i}
                className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 opacity-70 transform hover:scale-110 transition-all duration-300"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animation: 'pulse 2s infinite',
                  transform: `translateY(${i % 2 === 0 ? '-4px' : '4px'}) rotate(${Math.random() * 10 - 5}deg)`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Stylized copyright */}
        <div className="text-center">
          <p className="text-sm text-cyan-300 font-light tracking-widest">
            <span className="inline-block">{currentYear}</span>
            <span className="inline-block mx-2">◈</span>
            <span className="inline-block">DESIGNED & CODED WITH PASSION</span>
            <span className="inline-block mx-2">◈</span>
            <span className="inline-block">CARLOS BAEZA</span>
          </p>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes pulse-bright {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        
        .circuit-pattern {
          z-index: 5;
        }
        
        .hexagon-pattern {
          z-index: 5;
        }
      `}</style>
    </footer>
  );
};

export default Footer; 