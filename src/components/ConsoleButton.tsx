import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';
import { gsap } from 'gsap';

interface ConsoleButtonProps {
  position: [number, number, number];
  color: string;
  hoverColor: string;
  onClick: () => void;
  onHover: (isHovering: boolean) => void;
  label: string;
}

const ConsoleButton: React.FC<ConsoleButtonProps> = ({ 
  position, 
  color, 
  hoverColor, 
  onClick, 
  onHover,
  label
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<MeshStandardMaterial>(null);

  const handlePointerOver = () => {
    setIsHovered(true);
    onHover(true);
    
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        y: position[1] + 0.05,
        duration: 0.2
      });
    }
    
    if (materialRef.current) {
      gsap.to(materialRef.current, {
        emissiveIntensity: 1,
        duration: 0.2
      });
    }
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    onHover(false);
    
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        y: position[1],
        duration: 0.2
      });
    }
    
    if (materialRef.current) {
      gsap.to(materialRef.current, {
        emissiveIntensity: 0.2,
        duration: 0.2
      });
    }
  };

  const handleClick = () => {
    if (meshRef.current) {
      // Quick down-up animation
      gsap.timeline()
        .to(meshRef.current.position, {
          y: position[1] - 0.05,
          duration: 0.1
        })
        .to(meshRef.current.position, {
          y: position[1] + 0.05,
          duration: 0.1
        });
    }
    
    onClick();
  };

  return (
    <>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
        receiveShadow
        castShadow
      >
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          color={isHovered ? hoverColor : color}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      <Text
        position={[position[0], position[1] - 0.2, position[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.08}
        color="#e0e0e0"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Poppins-Regular.ttf"
      >
        {label}
      </Text>
    </>
  );
};

export default ConsoleButton;