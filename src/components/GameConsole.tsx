import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Group } from 'three';
import ConsoleButton from './ConsoleButton';
import { gsap } from 'gsap';

interface GameConsoleProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  setActiveSection: (section: string | null) => void;
}

const GameConsole: React.FC<GameConsoleProps> = ({ position, rotation, scale, setActiveSection }) => {
  const groupRef = useRef<Group>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const handleButtonHover = (buttonName: string, isHovering: boolean) => {
    setHoveredButton(isHovering ? buttonName : null);
    
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: buttonName === 'projects' ? 0 : 
           buttonName === 'about' ? Math.PI * 0.1 : 
           buttonName === 'contact' ? -Math.PI * 0.1 : 0,
        duration: 0.5
      });
    }
  };

  return (
    <group 
      ref={groupRef} 
      position={position} 
      rotation={rotation} 
      scale={scale}
    >
      {/* Main console body */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[3, 0.5, 2]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.4, 0]} receiveShadow castShadow>
        <boxGeometry args={[2.5, 0.3, 1.5]} />
        <meshStandardMaterial color="#0f0f1a" />
      </mesh>

      {/* Screen display */}
      <mesh position={[0, 0.56, 0]} receiveShadow>
        <planeGeometry args={[2.2, 1.2]} />
        <meshStandardMaterial 
          color="#000080" 
          emissive="#003366"
          emissiveIntensity={hoveredButton ? 2 : 0.5}
        />
      </mesh>

      {/* Display text */}
      <Text
        position={[0, 0.56, 0.05]}
        fontSize={0.15}
        color="#00e6cc"
        anchorX="center"
        anchorY="middle"
      >
        {hoveredButton ? hoveredButton.toUpperCase() : "SELECT OPTION"}
      </Text>

      {/* Buttons */}
      <ConsoleButton 
        position={[-1, 0.3, 0.8]} 
        color="#7928ca"
        hoverColor="#9d4edd"
        onClick={() => setActiveSection('projects')}
        onHover={(isHovering) => handleButtonHover('projects', isHovering)}
        label="Projects"
      />
      
      <ConsoleButton 
        position={[0, 0.3, 0.8]} 
        color="#ff0080"
        hoverColor="#ff4d9e"
        onClick={() => setActiveSection('about')}
        onHover={(isHovering) => handleButtonHover('about', isHovering)}
        label="About"
      />
      
      <ConsoleButton 
        position={[1, 0.3, 0.8]} 
        color="#00e6cc"
        hoverColor="#40f8e2"
        onClick={() => setActiveSection('contact')}
        onHover={(isHovering) => handleButtonHover('contact', isHovering)}
        label="Contact"
      />

      {/* D-pad */}
      <mesh position={[-1.2, 0.3, -0.5]} receiveShadow castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
        <meshStandardMaterial color="#2a2a3a" />
      </mesh>

      {/* Decorative buttons */}
      <mesh position={[1.2, 0.3, -0.5]} receiveShadow castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#ff0080" />
      </mesh>
      
      <mesh position={[1.5, 0.3, -0.5]} receiveShadow castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#7928ca" />
      </mesh>
    </group>
  );
};

export default GameConsole;