import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  // Create individual refs for each experience item
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  // Ref for the canvas background
  const canvasRef = useRef(null);
  
  // Canvas animation for floating cubes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const cubes = [];
    const cubeCount = 35;
    
    // Color palettes for a more cohesive look
    const colorPalettes = [
      ['rgba(30, 64, 175, 0.15)', 'rgba(79, 70, 229, 0.15)', 'rgba(91, 33, 182, 0.15)'], // Blue-purple
      ['rgba(6, 95, 70, 0.15)', 'rgba(16, 185, 129, 0.15)', 'rgba(5, 150, 105, 0.15)'], // Green
      ['rgba(124, 58, 237, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(91, 33, 182, 0.15)'] // Purple
    ];
    
    // Create cubes with different properties
    for (let i = 0; i < cubeCount; i++) {
      const paletteIndex = Math.floor(Math.random() * colorPalettes.length);
      const colorIndex = Math.floor(Math.random() * colorPalettes[paletteIndex].length);
      
      // Determine cube type with probabilities
      let type;
      const typeRandom = Math.random();
      if (typeRandom < 0.4) {
        type = 'cube';
      } else if (typeRandom < 0.7) {
        type = 'block';
      } else if (typeRandom < 0.85) {
        type = 'pyramid';
      } else {
        type = 'prism';
      }
      
      cubes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 35 + 8,
        speedX: Math.random() * 0.3 - 0.15,
        speedY: Math.random() * 0.3 - 0.15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeedX: (Math.random() * 0.01 - 0.005) * (Math.random() > 0.5 ? 1 : -1),
        rotationSpeedY: (Math.random() * 0.01 - 0.005) * (Math.random() > 0.5 ? 1 : -1),
        rotationSpeedZ: (Math.random() * 0.005 - 0.0025) * (Math.random() > 0.5 ? 1 : -1),
        color: colorPalettes[paletteIndex][colorIndex],
        glowIntensity: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2, // For animation variation
        type: type,
        depth: Math.random() * 0.5 + 0.2 // 3D depth factor
      });
    }
    
    // Draw a cube with enhanced 3D perspective
    function drawCube(x, y, size, rotation, rotX, rotY, color, glowIntensity, highlightEffect) {
      const depth = size * 0.5; // Depth of the cube
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Glow effect based on intensity
      if (glowIntensity > 0) {
        ctx.shadowColor = color.replace('rgba', 'rgb').replace(/[^,]+(?=\))/, '1');
        ctx.shadowBlur = 10 * glowIntensity;
      }
      
      // Interactive highlight for cubes near mouse
      const opacity = highlightEffect ? 0.8 + (highlightEffect * 0.2) : 0.8;
      
      // Front face with more depth perception based on rotations
      ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgba', 'rgba');
      ctx.strokeStyle = 'rgba(160, 190, 255, 0.4)';
      ctx.lineWidth = 1;
      
      // Calculate corners based on rotation for better 3D effect
      const frontZ = Math.sin(rotX) * size/2;
      const depthFactor = Math.cos(rotY) * 0.5 + 0.5;
      
      // Draw front face
      ctx.beginPath();
      ctx.rect(-size/2, -size/2, size, size);
      ctx.fill();
      ctx.stroke();
      
      // Top face with rotation effect
      ctx.fillStyle = color.replace(')', `, ${opacity * 0.85})`).replace('rgba', 'rgba');
      ctx.beginPath();
      ctx.moveTo(-size/2, -size/2);
      ctx.lineTo(-size/2 + size/4 * depthFactor, -size/2 - size/4 * depthFactor);
      ctx.lineTo(size/2 + size/4 * depthFactor, -size/2 - size/4 * depthFactor);
      ctx.lineTo(size/2, -size/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Right face with dynamic shading
      ctx.fillStyle = color.replace(')', `, ${opacity * 0.7})`).replace('rgba', 'rgba');
      ctx.beginPath();
      ctx.moveTo(size/2, -size/2);
      ctx.lineTo(size/2 + size/4 * depthFactor, -size/2 - size/4 * depthFactor);
      ctx.lineTo(size/2 + size/4 * depthFactor, size/2 - size/4 * depthFactor);
      ctx.lineTo(size/2, size/2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Add wireframe detail for highlight effect
      if (highlightEffect > 0.3) {
        ctx.strokeStyle = 'rgba(200, 230, 255, 0.6)';
        ctx.beginPath();
        ctx.moveTo(-size/2, 0);
        ctx.lineTo(size/2, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -size/2);
        ctx.lineTo(0, size/2);
        ctx.stroke();
      }
      
      ctx.restore();
    }
    
    // Draw a block with inner detail
    function drawBlock(x, y, size, rotation, color, glowIntensity, highlightEffect) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Glow effect
      if (glowIntensity > 0.2) {
        ctx.shadowColor = color.replace('rgba', 'rgb').replace(/[^,]+(?=\))/, '1');
        ctx.shadowBlur = 8 * glowIntensity;
      }
      
      // Interactive highlight
      const opacity = highlightEffect ? 0.9 + (highlightEffect * 0.1) : 0.9;
      
      // Draw base rectangle
      ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgba', 'rgba');
      ctx.strokeStyle = 'rgba(120, 170, 255, 0.5)';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.rect(-size/2, -size/2, size, size);
      ctx.fill();
      ctx.stroke();
      
      // Enhanced inner details
      if (highlightEffect > 0) {
        // Circuit-like patterns for tech feel when highlighted
        ctx.strokeStyle = 'rgba(180, 210, 255, 0.4)';
        ctx.lineWidth = 0.5;
        
        // Horizontal lines
        ctx.beginPath();
        ctx.moveTo(-size/2, -size/4);
        ctx.lineTo(size/2, -size/4);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-size/2, 0);
        ctx.lineTo(size/2, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-size/2, size/4);
        ctx.lineTo(size/2, size/4);
        ctx.stroke();
        
        // Vertical lines
        ctx.beginPath();
        ctx.moveTo(-size/4, -size/2);
        ctx.lineTo(-size/4, size/2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -size/2);
        ctx.lineTo(0, size/2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(size/4, -size/2);
        ctx.lineTo(size/4, size/2);
        ctx.stroke();
        
        // Add corner dots for circuit-board effect
        ctx.fillStyle = 'rgba(200, 230, 255, 0.6)';
        
        ctx.beginPath();
        ctx.arc(-size/4, -size/4, 1, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(size/4, -size/4, 1, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(-size/4, size/4, 1, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(size/4, size/4, 1, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Standard detail lines when not highlighted
        ctx.strokeStyle = 'rgba(180, 210, 255, 0.15)';
        ctx.lineWidth = 0.5;
        
        // Horizontal line
        ctx.beginPath();
        ctx.moveTo(-size/2, 0);
        ctx.lineTo(size/2, 0);
        ctx.stroke();
        
        // Vertical line
        ctx.beginPath();
        ctx.moveTo(0, -size/2);
        ctx.lineTo(0, size/2);
        ctx.stroke();
      }
      
      ctx.restore();
    }
    
    // Draw a pyramid
    function drawPyramid(x, y, size, rotation, color, glowIntensity, highlightEffect) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Glow effect
      if (glowIntensity > 0) {
        ctx.shadowColor = color.replace('rgba', 'rgb').replace(/[^,]+(?=\))/, '1');
        ctx.shadowBlur = 10 * glowIntensity;
      }
      
      // Interactive highlight
      const opacity = highlightEffect ? 0.9 + (highlightEffect * 0.1) : 0.9;
      
      // Calculate the height of the pyramid
      const height = size * 0.866; // height of equilateral triangle
      
      // Base (triangle)
      ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgba', 'rgba');
      ctx.strokeStyle = 'rgba(160, 190, 255, 0.4)';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.moveTo(0, -height/2);  // top
      ctx.lineTo(-size/2, height/2);  // bottom left
      ctx.lineTo(size/2, height/2);  // bottom right
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // If highlighted, add more detail
      if (highlightEffect > 0.3) {
        ctx.strokeStyle = 'rgba(200, 230, 255, 0.6)';
        ctx.beginPath();
        ctx.moveTo(0, -height/2);
        ctx.lineTo(0, height/2);
        ctx.stroke();
      }
      
      ctx.restore();
    }
    
    // Draw a prism
    function drawPrism(x, y, size, rotation, color, glowIntensity, highlightEffect) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Glow effect
      if (glowIntensity > 0) {
        ctx.shadowColor = color.replace('rgba', 'rgb').replace(/[^,]+(?=\))/, '1');
        ctx.shadowBlur = 10 * glowIntensity;
      }
      
      // Interactive highlight
      const opacity = highlightEffect ? 0.9 + (highlightEffect * 0.1) : 0.9;
      
      // Draw octagon
      ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgba', 'rgba');
      ctx.strokeStyle = 'rgba(160, 190, 255, 0.4)';
      ctx.lineWidth = 1;
      
      const sides = 6;
      const a = (Math.PI * 2) / sides;
      
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const x = size/2 * Math.cos(a * i);
        const y = size/2 * Math.sin(a * i);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // If highlighted, add more detail
      if (highlightEffect > 0.3) {
        ctx.strokeStyle = 'rgba(200, 230, 255, 0.6)';
        ctx.beginPath();
        ctx.moveTo(-size/2, 0);
        ctx.lineTo(size/2, 0);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, -size/2);
        ctx.lineTo(0, size/2);
        ctx.stroke();
      }
      
      ctx.restore();
    }
    
    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate pulse effect based on time
      const time = Date.now() / 1000;
      const pulse = (Math.sin(time) + 1) / 2; // 0 to 1 pulse
      
      cubes.forEach(cube => {
        // Update rotation
        cube.rotation += cube.rotationSpeedZ;
        
        // Individual time-based pulse effect
        const individualPulse = (Math.sin(time + cube.phase) + 1) / 2;
        
        // Update 3D rotation values for more depth
        const rotX = time * cube.rotationSpeedX;
        const rotY = time * cube.rotationSpeedY;
        
        // Draw different types of geometric elements with highlight effect based on time only
        const highlightEffect = individualPulse * 0.2;
        const glowStrength = cube.glowIntensity * (0.8 + pulse * 0.5);
        
        if (cube.type === 'cube') {
          drawCube(cube.x, cube.y, cube.size, cube.rotation, rotX, rotY, cube.color, glowStrength, highlightEffect);
        } else if (cube.type === 'block') {
          drawBlock(cube.x, cube.y, cube.size, cube.rotation, cube.color, glowStrength, highlightEffect);
        } else if (cube.type === 'pyramid') {
          drawPyramid(cube.x, cube.y, cube.size, cube.rotation, cube.color, glowStrength, highlightEffect);
        } else if (cube.type === 'prism') {
          drawPrism(cube.x, cube.y, cube.size, cube.rotation, cube.color, glowStrength, highlightEffect);
        }
        
        // Update position
        cube.x += cube.speedX;
        cube.y += cube.speedY;
        
        // Boundary check with bounce effect
        if (cube.x < cube.size/2 || cube.x > canvas.width - cube.size/2) {
          cube.speedX *= -1;
          // Add a slight random variation on bounce
          cube.speedX += (Math.random() * 0.1 - 0.05);
        }
        
        if (cube.y < cube.size/2 || cube.y > canvas.height - cube.size/2) {
          cube.speedY *= -1;
          // Add a slight random variation on bounce
          cube.speedY += (Math.random() * 0.1 - 0.05);
        }
        
        // Keep speed within bounds
        cube.speedX = Math.max(Math.min(cube.speedX, 0.5), -0.5);
        cube.speedY = Math.max(Math.min(cube.speedY, 0.5), -0.5);
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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
    <section 
      id="experience" 
      className="py-20 relative overflow-hidden"
    >
      {/* Canvas for cube animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      ></canvas>
      
      {/* Enhanced background with geometric patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-dark-secondary to-blue-900/20 z-0"></div>
      
      {/* Animated geometric blocks */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="geometric-blocks">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="geo-block"
              style={{
                '--delay': `${i * 5}s`,
                '--duration': `${20 + i * 5}s`,
                '--size': `${60 + i * 15}px`,
                '--x': `${i * 20}%`,
                '--rotate': `${i * 45}deg`,
                '--opacity': `${0.03 + i * 0.01}`
              }}
            >
              {/* Inner grid lines for blocks */}
              <div className="geo-block-grid"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Floating cube decorations with enhanced 3D effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-15 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-16 h-16 cube-3d" style={{ '--cube-color': 'rgba(37, 99, 235, 0.2)', '--cube-duration': '15s' }}></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 cube-3d" style={{ '--cube-color': 'rgba(139, 92, 246, 0.2)', '--cube-duration': '20s', '--cube-delay': '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 cube-3d" style={{ '--cube-color': 'rgba(79, 70, 229, 0.2)', '--cube-duration': '18s', '--cube-delay': '5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 cube-3d" style={{ '--cube-color': 'rgba(6, 182, 212, 0.2)', '--cube-duration': '12s', '--cube-delay': '3s' }}></div>
      </div>
      
      {/* 3D Cubic grid structures */}
      <div className="absolute bottom-0 right-0 w-full h-40 overflow-hidden opacity-10 z-0">
        <div className="cube-grid"></div>
      </div>
      
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
          {/* Timeline Line with cubic segments */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 z-0 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 animate-pulse opacity-70 rounded-full"></div>
            
            {/* Enhanced cubic segments along timeline */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-3 h-3 border border-blue-400/50 left-1/2 transform -translate-x-1/2 bg-dark-background opacity-80"
                style={{ 
                  top: `${i * 12.5}%`, 
                  transform: 'translateX(-50%) rotate(45deg)',
                  animation: `float-mini ${3 + i % 2}s infinite ease-in-out alternate`,
                  animationDelay: `${i * 0.5}s`,
                  boxShadow: 'inset 0 0 5px rgba(59, 130, 246, 0.3), 0 0 5px rgba(59, 130, 246, 0.3)'
                }}
              ></div>
            ))}
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