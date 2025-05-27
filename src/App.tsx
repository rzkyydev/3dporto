import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from './components/Loading';
import GameConsole from './components/GameConsole';
import Content from './components/Content';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <div className="canvas-container">
        <Canvas 
          camera={{ position: [0, 2, 5], fov: 75 }}
          style={{ touchAction: 'none' }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#0f0f1a']} />
          <fog attach="fog" args={['#0f0f1a', 5, 15]} />
          
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight 
              position={[10, 10, 10]} 
              angle={0.15} 
              penumbra={1} 
              intensity={1} 
              castShadow 
              shadow-mapSize={[2048, 2048]}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <GameConsole 
              position={[0, -1, 0]} 
              scale={[1, 1, 1]} 
              rotation={[0, Math.PI / 6, 0]} 
              setActiveSection={setActiveSection}
            />
            
            <ContactShadows 
              position={[0, -1.5, 0]} 
              opacity={0.4} 
              scale={10} 
              blur={2.5} 
              far={4} 
            />
            <Environment preset="city" />
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              minDistance={3}
              maxDistance={8}
              target={[0, -0.5, 0]}
            />
          </Suspense>
        </Canvas>
      </div>

      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div 
            className="content-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Content 
              section={activeSection} 
              onClose={() => setActiveSection(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
  );
}

export default App;
