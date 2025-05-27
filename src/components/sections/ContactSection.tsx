import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitSuccess(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">Get In Touch</h3>
          <p className="text-gray-300 mb-6">
            I'm always open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out through the form or any of the contact methods listed below.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center text-gray-300">
              <Mail className="mr-3 text-pink-500" size={20} />
              <a href="mailto:contact@example.com" className="hover:text-cyan-400 transition-colors">
                contact@example.com
              </a>
            </div>
            
            <div className="flex items-center text-gray-300">
              <Phone className="mr-3 text-pink-500" size={20} />
              <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="flex items-center text-gray-300">
              <MapPin className="mr-3 text-pink-500" size={20} />
              <span>San Francisco, CA, United States</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-300 hover:text-white" />
            </a>
            <a 
              href="#" 
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-300 hover:text-white" />
            </a>
            <a 
              href="#" 
              className="p-2 bg-gray-800 rounded-full hover:bg-purple-900 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} className="text-gray-300 hover:text-white" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">Send Me a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-gray-300 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg flex justify-center items-center transition-all ${
                isSubmitting 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600'
              }`}
            >
              {isSubmitting ? (
                <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <>
                  <Send className="mr-2" size={18} />
                  Send Message
                </>
              )}
            </button>
            
            {submitSuccess !== null && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-center ${
                  submitSuccess ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
                }`}
              >
                {submitSuccess 
                  ? 'Your message has been sent successfully!' 
                  : 'There was an error sending your message. Please try again.'}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;