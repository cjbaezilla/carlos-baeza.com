import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BackgroundCubes = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const cubesRef = useRef([]);
  const dataLinesRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create falling cubes
    const createCube = () => {
      // Random size between 0.05 and 0.2
      const size = Math.random() * 0.15 + 0.05;
      
      // Create geometry and material
      const geometry = new THREE.BoxGeometry(size, size, size);
      
      // Choose a cyberpunk color
      const colors = [
        0x00f3ff, // cyan
        0xff00ff, // magenta
        0xffff00, // yellow
        0x00ff00, // green
        0xff3300  // orange-red
      ];
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      // Create a glowing material
      const material = new THREE.MeshBasicMaterial({
        color: colors[colorIndex],
        transparent: true,
        opacity: 0.7,
        wireframe: Math.random() > 0.7 // Some cubes are wireframe
      });
      
      const cube = new THREE.Mesh(geometry, material);
      
      // Random position
      cube.position.x = Math.random() * 10 - 5;
      cube.position.y = 10; // Start above the viewport
      cube.position.z = Math.random() * 5 - 10;
      
      // Random rotation
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      
      // Store falling speed and rotation speed
      cube.userData = {
        speedY: Math.random() * 0.03 + 0.01,
        rotationX: Math.random() * 0.02 - 0.01,
        rotationY: Math.random() * 0.02 - 0.01,
        rotationZ: Math.random() * 0.02 - 0.01,
        color: colors[colorIndex],
        dataPackets: [],
        connected: false
      };
      
      scene.add(cube);
      return cube;
    };

    // Create data packet that travels along line
    const createDataPacket = (startCube, endCube, color) => {
      const packetGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const packetMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.8
      });
      
      const packet = new THREE.Mesh(packetGeometry, packetMaterial);
      
      // Start at the source cube
      packet.position.copy(startCube.position);
      
      // Data for animation
      packet.userData = {
        startCube: startCube,
        endCube: endCube,
        progress: 0,
        speed: Math.random() * 0.01 + 0.01
      };
      
      scene.add(packet);
      return packet;
    };

    // Create a data line connecting two cubes
    const createDataLine = (startCube, endCube) => {
      const material = new THREE.LineBasicMaterial({
        color: startCube.userData.color,
        transparent: true,
        opacity: 0.3
      });
      
      const points = [];
      points.push(new THREE.Vector3().copy(startCube.position));
      points.push(new THREE.Vector3().copy(endCube.position));
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      
      line.userData = {
        startCube: startCube,
        endCube: endCube,
        updatePositions: () => {
          // Update the line's vertices to match the cubes' positions
          const positions = line.geometry.attributes.position.array;
          positions[0] = startCube.position.x;
          positions[1] = startCube.position.y;
          positions[2] = startCube.position.z;
          positions[3] = endCube.position.x;
          positions[4] = endCube.position.y;
          positions[5] = endCube.position.z;
          line.geometry.attributes.position.needsUpdate = true;
        }
      };
      
      scene.add(line);
      return line;
    };

    // Create connections between cubes
    const createConnections = () => {
      // Remove old lines
      dataLinesRef.current.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
        line.material.dispose();
      });
      dataLinesRef.current = [];
      
      // Reset connections
      cubesRef.current.forEach(cube => {
        cube.userData.connected = false;
      });
      
      // Create new connections
      for (let i = 0; i < cubesRef.current.length; i++) {
        const cube = cubesRef.current[i];
        if (cube.userData.connected) continue;
        
        // Find nearest cube that isn't connected
        let nearestCube = null;
        let nearestDistance = 5; // Max connection distance
        
        for (let j = 0; j < cubesRef.current.length; j++) {
          if (i === j) continue;
          
          const otherCube = cubesRef.current[j];
          if (otherCube.userData.connected) continue;
          
          const distance = cube.position.distanceTo(otherCube.position);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestCube = otherCube;
          }
        }
        
        if (nearestCube) {
          // Create a connection
          const line = createDataLine(cube, nearestCube);
          dataLinesRef.current.push(line);
          
          // Mark cubes as connected
          cube.userData.connected = true;
          nearestCube.userData.connected = true;
          
          // Create a data packet
          const packet = createDataPacket(cube, nearestCube, cube.userData.color);
          cube.userData.dataPackets.push(packet);
        }
      }
    };

    // Create initial cubes
    for (let i = 0; i < 40; i++) {
      const cube = createCube();
      // Distribute cubes across the initial viewport
      cube.position.y = Math.random() * 20 - 10;
      cubesRef.current.push(cube);
    }
    
    // Create initial connections
    createConnections();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Move data packets along their paths
      cubesRef.current.forEach(cube => {
        cube.userData.dataPackets.forEach((packet, packetIndex) => {
          packet.userData.progress += packet.userData.speed;
          
          if (packet.userData.progress >= 1) {
            // Packet has reached destination
            scene.remove(packet);
            cube.userData.dataPackets.splice(packetIndex, 1);
            
            // Sometimes send a return packet
            if (Math.random() > 0.5) {
              const returnPacket = createDataPacket(
                packet.userData.endCube,
                packet.userData.startCube,
                packet.userData.endCube.userData.color
              );
              packet.userData.endCube.userData.dataPackets.push(returnPacket);
            }
          } else {
            // Update packet position along the path
            packet.position.lerpVectors(
              packet.userData.startCube.position,
              packet.userData.endCube.position,
              packet.userData.progress
            );
          }
        });
      });
      
      // Update cube positions and rotations
      cubesRef.current.forEach((cube, index) => {
        // Move the cube down
        cube.position.y -= cube.userData.speedY;
        
        // If the cube is below the viewport, reset it
        if (cube.position.y < -10) {
          // Remove this cube from the scene
          scene.remove(cube);
          
          // Create a new cube
          cubesRef.current[index] = createCube();
          
          // Recreate connections periodically
          if (Math.random() < 0.2) {
            createConnections();
          }
        }
        
        // Rotate the cube
        cube.rotation.x += cube.userData.rotationX;
        cube.rotation.y += cube.userData.rotationY;
        cube.rotation.z += cube.userData.rotationZ;
      });
      
      // Update data line positions
      dataLinesRef.current.forEach(line => {
        line.userData.updatePositions();
      });
      
      // Recreate connections periodically to handle cube movement
      if (Math.random() < 0.01) {
        createConnections();
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Cleanup
    return () => {
      // Cancel animation frame
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      // Remove event listener
      window.removeEventListener('resize', handleResize);
      
      // Save refs to local variables to avoid the ESLint warning
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const cubes = cubesRef.current || [];
      const dataLines = dataLinesRef.current || [];
      const renderer = rendererRef.current;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const container = containerRef.current;
      
      // Dispose of Three.js objects
      cubes.forEach(cube => {
        cube.userData.dataPackets.forEach(packet => {
          scene.remove(packet);
          packet.geometry.dispose();
          packet.material.dispose();
        });
        
        scene.remove(cube);
        cube.geometry.dispose();
        cube.material.dispose();
      });
      
      dataLines.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
        line.material.dispose();
      });
      
      // Remove renderer DOM element
      if (renderer && container) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose of renderer
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ 
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    />
  );
};

export default BackgroundCubes; 