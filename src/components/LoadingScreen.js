import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [particlesGenerated, setParticlesGenerated] = useState(false);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const [text, setText] = useState('');
  const phrases = [
    'Initializing neural interface...',
    'Calculating quantum algorithms...',
    'Synthesizing holographic projections...',
    'Calibrating interstellar coordinates...'
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingPaused, setTypingPaused] = useState(false);

  // Animación de escritura avanzada
  useEffect(() => {
    if (!isLoading) return;
    
    const typingSpeed = isDeleting ? 30 : 60;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (typingPaused) {
        setTypingPaused(false);
        return;
      }
      
      if (!isDeleting && letterIndex === currentPhrase.length) {
        // Pausa al finalizar la frase
        setTypingPaused(true);
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      
      if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        return;
      }
      
      const nextIndex = isDeleting ? letterIndex - 1 : letterIndex + 1;
      setLetterIndex(nextIndex);
      setText(currentPhrase.substring(0, nextIndex));
      
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [isLoading, letterIndex, currentPhraseIndex, isDeleting, typingPaused, phrases]);
  
  // Efecto de progreso
  useEffect(() => {
    if (!isLoading) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + (1 - prev) * 0.025;
        return Math.min(next, 0.99);
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [isLoading]);
  
  // Efecto final al completar carga
  useEffect(() => {
    if (!isLoading && progress < 1) {
      setProgress(1);
    }
  }, [isLoading, progress]);
  
  // Sistema de partículas 3D
  useEffect(() => {
    if (!isLoading || !containerRef.current || particlesGenerated) return;
    
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    // Generar partículas
    const particleCount = 80;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 8 + 2;
      const distance = Math.random() * 150 + 50;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.8 + 0.2;
      const depth = Math.random() * 100 - 50;
      const hue = Math.floor(Math.random() * 60) + 210; // Tonos azul a púrpura
      
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
      particle.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 80%, 60%), 0 0 ${size}px #fff`;
      particle.style.opacity = '0';
      
      const motionData = {
        angle,
        distance,
        speed,
        depth,
        x: 0,
        y: 0,
        z: depth,
        baseSize: size,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      };
      
      particles.push({ element: particle, motion: motionData });
      container.appendChild(particle);
    }
    
    particlesRef.current = particles;
    setParticlesGenerated(true);
    
    // Animación de partículas
    let animationFrame;
    const animate = () => {
      particles.forEach(particle => {
        const { element, motion } = particle;
        
        motion.angle += motion.speed * 0.01;
        const distanceScale = (1 + Math.sin(Date.now() * 0.001) * 0.2);
        
        // Posición 3D
        motion.x = Math.cos(motion.angle) * motion.distance * distanceScale;
        motion.y = Math.sin(motion.angle) * motion.distance * distanceScale;
        
        // Aplicar perspectiva
        const perspective = 500;
        const scale = perspective / (perspective + motion.z);
        
        const screenX = centerX + motion.x * scale;
        const screenY = centerY + motion.y * scale;
        
        // Rotar
        motion.rotation += motion.rotationSpeed;
        
        // Aplicar transformaciones
        element.style.transform = `translate(${screenX}px, ${screenY}px) scale(${scale}) rotate(${motion.rotation}deg)`;
        element.style.opacity = scale * 0.8;
        element.style.zIndex = Math.floor((1 + scale) * 100);
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrame);
      particles.forEach(p => p.element.remove());
    };
  }, [isLoading, particlesGenerated]);

  return (
    <motion.div
      className="loading-screen fixed inset-0 z-50 overflow-hidden"
      ref={containerRef}
      initial={{ opacity: 1, visibility: 'visible' }}
      animate={{
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Fondo futurista */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0" style={{ 
          background: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
          ` 
        }}></div>
        
        {/* Grid de fondo */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2.5)',
          transformOrigin: 'center center',
          opacity: 0.3
        }}></div>
      </div>
      
      {/* Círculo central con rayo de luz */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Rayo de luz central */}
        <div className="absolute top-1/2 left-1/2 w-1 h-[100vh] bg-blue-500/50 -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
        
        {/* Círculo principal con anillos */}
        <div className="relative w-64 h-64">
          {/* Círculo exterior pulsante */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)',
              boxShadow: '0 0 60px rgba(59,130,246,0.4), inset 0 0 30px rgba(59,130,246,0.4)' 
            }}
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.6, 0.9, 0.6] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Anillos orbitantes */}
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute top-1/2 left-1/2 border-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                width: `${140 + i * 40}px`, 
                height: `${140 + i * 40}px`,
                borderColor: 'rgba(59,130,246,0.3)',
                borderTopColor: i % 2 === 0 ? 'rgba(139,92,246,0.8)' : 'rgba(59,130,246,0.8)',
                borderRightColor: i % 2 === 0 ? 'rgba(59,130,246,0.2)' : 'rgba(139,92,246,0.2)'
              }}
              animate={{ 
                rotate: i % 2 === 0 ? 360 : -360
              }}
              transition={{ 
                duration: 8 + i * 4, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
          ))}
          
          {/* Círculo central */}
          <motion.div 
            className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2 overflow-visible"
            style={{ 
              boxShadow: '0 0 30px rgba(59,130,246,0.7)' 
            }}
            animate={{ 
              boxShadow: [
                '0 0 30px rgba(59,130,246,0.7)',
                '0 0 50px rgba(139,92,246,0.7)',
                '0 0 30px rgba(59,130,246,0.7)'
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            {/* Partículas orbitando */}
            <div className="absolute -inset-10 z-0">
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const delay = i * 0.15;
                const size = Math.random() * 3 + 2;
                const distance = Math.random() * 10 + 30;
                const duration = Math.random() * 3 + 5;
                const hue = Math.floor(Math.random() * 60) + 210; // Tonos azul a púrpura
                
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full w-1 h-1 top-1/2 left-1/2"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: `hsl(${hue}, 90%, 70%)`,
                      boxShadow: `0 0 ${size * 1.5}px hsl(${hue}, 90%, 60%), 0 0 ${size * 0.5}px #fff`,
                      marginTop: `-${size / 2}px`,
                      marginLeft: `-${size / 2}px`,
                    }}
                    animate={{
                      x: [
                        Math.cos(angle) * distance,
                        Math.cos(angle + Math.PI) * distance,
                        Math.cos(angle + Math.PI * 2) * distance,
                      ],
                      y: [
                        Math.sin(angle) * distance,
                        Math.sin(angle + Math.PI) * distance, 
                        Math.sin(angle + Math.PI * 2) * distance,
                      ],
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      x: { duration: duration, delay: delay, repeat: Infinity },
                      y: { duration: duration, delay: delay, repeat: Infinity },
                      scale: { duration: duration / 2, repeat: Infinity, yoyo: true },
                      opacity: { duration: duration / 3, repeat: Infinity, yoyo: true }
                    }}
                  />
                );
              })}
            </div>
            
            {/* Borde brillante animado */}
            <motion.div 
              className="absolute -inset-1 rounded-full z-0"
              style={{
                background: 'linear-gradient(90deg, rgba(96,165,250,1) 0%, rgba(167,139,250,1) 50%, rgba(96,165,250,1) 100%)',
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Contenedor del avatar */}
            <div className="absolute inset-0.5 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 z-10">
              {/* Imagen del avatar con animación */}
              <motion.div
                className="w-full h-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <img 
                  src="https://carlos-baeza.com/avatar.jpg" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Efectos superpuestos */}
              <div className="absolute inset-0">
                {/* Brillo superior */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent"
                  animate={{
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Resplandor central */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-transparent"
                  animate={{
                    opacity: [0.4, 0.1, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Barra de progreso */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-64">
        <div className="relative h-1 w-full bg-blue-900/30 overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ width: `${progress * 100}%` }}
            animate={{ 
              boxShadow: ['0 0 5px rgba(59,130,246,0.7)', '0 0 15px rgba(59,130,246,0.7)', '0 0 5px rgba(59,130,246,0.7)']
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
        
        {/* Porcentaje */}
        <div className="mt-2 text-center text-xs text-blue-500 font-mono">
          {Math.floor(progress * 100)}%
        </div>
      </div>
      
      {/* Texto animado */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-80 text-center">
        <div className="font-mono text-lg text-blue-400 min-h-[2rem] flex justify-center items-center">
          <span>{text}</span>
          <motion.span 
            className="inline-block ml-1 w-2 h-5 bg-blue-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </div>
      
      {/* Partículas en primer plano */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 