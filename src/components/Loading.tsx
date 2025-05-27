import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 - prev) * 0.05;
        return Math.min(next, 100);
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-['Press_Start_2P'] text-cyan-400 mb-2">
          LOADING
        </h1>
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-4 h-4 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="w-64 h-6 bg-gray-800 rounded-full overflow-hidden border border-cyan-500">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      
      <p className="mt-4 text-cyan-400 font-['Press_Start_2P'] text-sm">
        {Math.round(progress)}%
      </p>
      
      <motion.div
        className="mt-12 text-white opacity-70 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="mb-2">Preparing 3D portfolio experience</p>
        <p>Please wait while we load assets...</p>
      </motion.div>
    </div>
  );
};

export default Loading;