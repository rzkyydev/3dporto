import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Three.js', level: 75 },
    { name: 'TypeScript', level: 70 },
    { name: 'UI/UX Design', level: 65 },
  ];

  return (
    <div className="about-section">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="w-full h-auto rounded-lg border-2 border-cyan-500/50 shadow-lg shadow-purple-500/20"
          />
        </motion.div>
        
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Hello, I'm John Doe</h3>
          <p className="text-gray-300 mb-4">
            I'm a passionate full-stack developer with a focus on creating immersive web experiences.
            With over 5 years of experience in web development, I specialize in building 
            interactive 3D websites, modern web applications, and engaging user interfaces.
          </p>
          <p className="text-gray-300 mb-4">
            My journey in technology began when I was just 12 years old, tinkering with HTML and CSS.
            Since then, I've expanded my skills to include modern frameworks and 3D technologies,
            always staying at the cutting edge of web development.
          </p>
          <p className="text-gray-300">
            When I'm not coding, you can find me hiking in the mountains, playing video games,
            or experimenting with new technologies.
          </p>
        </motion.div>
      </div>
      
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
          <Code className="mr-2" size={20} />
          Skills & Expertise
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
          <Briefcase className="mr-2" size={20} />
          Work Experience
        </h3>
        
        <div className="border-l-2 border-purple-500 pl-4 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-200">Senior Frontend Developer</h4>
            <p className="text-pink-500">Tech Innovations Inc. (2021 - Present)</p>
            <p className="text-gray-300 mt-2">
              Leading the frontend development team, implementing 3D visualizations and 
              creating responsive web applications with modern JavaScript frameworks.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200">Web Developer</h4>
            <p className="text-pink-500">Digital Solutions LLC (2018 - 2021)</p>
            <p className="text-gray-300 mt-2">
              Developed and maintained client websites, created interactive user interfaces,
              and implemented responsive designs across multiple platforms.
            </p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center">
          <GraduationCap className="mr-2" size={20} />
          Education
        </h3>
        
        <div className="border-l-2 border-purple-500 pl-4 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-200">Master's in Computer Science</h4>
            <p className="text-pink-500">Tech University (2016 - 2018)</p>
            <p className="text-gray-300 mt-2">
              Specialized in Human-Computer Interaction and Interactive Media.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-200">Bachelor's in Web Development</h4>
            <p className="text-pink-500">State University (2012 - 2016)</p>
            <p className="text-gray-300 mt-2">
              Graduated with honors. Focus on frontend technologies and design principles.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;