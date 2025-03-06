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
              url: 'mailto:carlos.baeza@gmail.com',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-pink-700 border-2 border-pink-500',
              transform: 'rotate(-2deg)'
            },
            { 
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
              url: 'https://x.com/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm1.44 17.5h1.86L9.54 3.75h-1.99z" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-cyan-700 border-2 border-cyan-500',
              transform: 'rotate(-3deg)'
            },
            { 
              url: 'https://youtube.com/@cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-red-700 border-2 border-red-500',
              transform: 'rotate(2deg)'
            },
            { 
              url: 'https://primal.net/baeza',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.972 0-9 4.028-9 9s4.028 9 9 9 9-4.028 9-9-4.028-9-9-9zm0 16c-3.868 0-7-3.132-7-7s3.132-7 7-7 7 3.132 7 7-3.132 7-7 7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v8m-4-4h8" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-orange-700 border-2 border-orange-500',
              transform: 'rotate(-1deg)'
            },
            { 
              url: 'https://t.me/cjbaezilla',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0h0l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228c0.309-1.239-0.473-1.8-1.282-1.434z" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-blue-700 border-2 border-blue-500',
              transform: 'rotate(3deg)'
            },
            { 
              url: 'https://wa.me/+56985644026',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.358,3.643C18.143,1.429,15.11,0.214,11.857,0.214c-6.657,0-12.071,5.414-12.071,12.071c0,2.125,0.557,4.205,1.619,6.033l-1.719,6.276l6.433-1.686c1.762,0.96,3.75,1.466,5.738,1.466c6.657,0,12.071-5.414,12.071-12.071C23.929,8.891,22.714,5.857,20.358,3.643z M11.857,20.786c-1.8,0-3.566-0.483-5.116-1.395l-0.367-0.218l-3.802,0.997l1.019-3.711l-0.239-0.38c-1.01-1.605-1.541-3.457-1.541-5.355c0-5.538,4.505-10.043,10.043-10.043c2.681,0,5.203,1.044,7.098,2.938c1.895,1.895,2.938,4.416,2.938,7.098C21.9,16.281,17.395,20.786,11.857,20.786z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.032,14.617c-0.196-0.097-1.161-0.573-1.34-0.638c-0.179-0.065-0.309-0.097-0.44,0.097c-0.131,0.195-0.505,0.638-0.619,0.769c-0.114,0.131-0.228,0.147-0.424,0.049c-0.196-0.097-0.828-0.305-1.576-0.973c-0.582-0.519-0.975-1.161-1.089-1.356c-0.114-0.196-0.012-0.301,0.086-0.398c0.089-0.088,0.196-0.228,0.294-0.343c0.098-0.114,0.131-0.196,0.196-0.327c0.065-0.131,0.033-0.245-0.016-0.343c-0.049-0.098-0.44-1.057-0.602-1.448c-0.159-0.382-0.323-0.328-0.44-0.335c-0.114-0.006-0.244-0.007-0.374-0.007c-0.131,0-0.343,0.049-0.523,0.245c-0.179,0.196-0.684,0.67-0.684,1.635s0.7,1.896,0.798,2.026c0.098,0.13,1.375,2.098,3.335,2.942c0.465,0.201,0.829,0.321,1.112,0.411c0.467,0.148,0.891,0.128,1.227,0.078c0.374-0.056,1.151-0.471,1.312-0.927C16.08,15.081,16.08,14.812,16.032,14.617z" />
                </svg>
              ),
              color: 'bg-opacity-20 bg-green-700 border-2 border-green-500',
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
              aria-label={social.url.split('/').pop().split('.').shift()}
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
          <p className="text-xs sm:text-sm text-cyan-300 font-light tracking-wider sm:tracking-widest">
            <span className="inline-block">{currentYear}</span>
            <span className="inline-block mx-1 sm:mx-2">◈</span>
            <span className="inline-block">DESIGNED & CODED WITH PASSION</span>
            <span className="inline-block mx-1 sm:mx-2">◈</span>
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