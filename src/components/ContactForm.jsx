import { useState, useEffect } from 'react';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(1, 'Message is required')
});

const services = [
  "Digital Marketing",
  "Social Media Marketing",
  "Branding Offline/Online",
  "Web Development"
];

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Prevent body scrolling when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ 
        name: '', 
        email: '', 
        service: '', 
        message: '' 
      });
      setTimeout(() => {
        setSubmitMessage('');
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999999,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div 
          className="absolute inset-0 cursor-target"
          onClick={onClose}
        />
        
        <motion.div 
          className="relative w-full max-w-md bg-white/5 backdrop-blur-lg shadow-2xl border border-white/10 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] p-6 mx-auto rounded-xl"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          style={{
            zIndex: 1000000
          }}
        >
          <motion.button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors cursor-target text-white"
            aria-label="Close"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
          
          <h2 className="text-2xl font-bold mb-6 text-white">
            Contact Us
          </h2>
          
          <AnimatePresence>
            {submitMessage && (
              <motion.p 
                className={`mb-4 p-2 rounded ${submitMessage.includes('Thank you') ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </AnimatePresence>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-white/10 backdrop-blur-sm placeholder-white/50 cursor-target`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-white/10 backdrop-blur-sm placeholder-white/50 cursor-target`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-white">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.service ? 'border-red-500' : 'border-white/20'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-white/10 backdrop-blur-sm cursor-target`}
              >
                <option value="" className="text-gray-800">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-gray-800">{service}</option>
                ))}
              </select>
              {errors.service && <p className="mt-1 text-sm text-red-400">{errors.service}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-white/20'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-white/10 backdrop-blur-sm placeholder-white/50 cursor-target`}
                placeholder="Enter your message"
              />
              {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
            </div>

            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-target"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
