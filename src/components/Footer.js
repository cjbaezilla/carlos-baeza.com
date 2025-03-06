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
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              ),
              color: 'bg-gradient-to-br from-purple-700 to-purple-900',
              transform: 'rotate-2'
            },
            { 
              name: 'Twitter', 
              url: 'https://twitter.com/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              ),
              color: 'bg-gradient-to-br from-cyan-700 to-blue-900',
              transform: 'rotate(-3'
            },
            { 
              name: 'LinkedIn', 
              url: 'https://linkedin.com/in/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
              color: 'bg-gradient-to-br from-blue-700 to-blue-900',
              transform: 'rotate(1deg)'
            },
            { 
              name: 'Email', 
              url: 'mailto:cjbaezilla@example.com',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              color: 'bg-gradient-to-br from-pink-700 to-purple-900',
              transform: 'rotate(-2deg)'
            }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transform ${social.transform} hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-16 h-16 rounded-2xl ${social.color} text-white shadow-lg hover:shadow-xl`}
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
      `}</style>
    </footer>
  );
};

export default Footer; 