import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import ProjectsSection from './sections/ProjectsSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

interface ContentProps {
  section: string;
  onClose: () => void;
}

const Content: React.FC<ContentProps> = ({ section, onClose }) => {
  const renderSection = () => {
    switch (section) {
      case 'projects':
        return <ProjectsSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <div>Section not found</div>;
    }
  };

  const getTitle = () => {
    switch (section) {
      case 'projects':
        return 'MY PROJECTS';
      case 'about':
        return 'ABOUT ME';
      case 'contact':
        return 'CONTACT ME';
      default:
        return 'UNKNOWN';
    }
  };

  return (
    <motion.div 
      className="content-container"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', damping: 20 }}
    >
      <div className="content-header">
        <h2>{getTitle()}</h2>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {renderSection()}
      </motion.div>
    </motion.div>
  );
};

export default Content;