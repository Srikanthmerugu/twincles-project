import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiLock, FiArrowRight, FiMapPin } from 'react-icons/fi';
import registerImage from '../assets/companies/login.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    location: '',
    services: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const services = [
    "Bulk SMS",
    "2 Way Messaging",
    "Smart Links",
    "WhatsApp Business API",
    "Voice Broadcast",
    "Email/OTP Services",
    "RCS Messaging",
    "Audio and Video Conferencing"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://twincles.mavenerp.in/api/public/api/register', formData);
      
      if (response.data) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        
        // Redirect to dashboard or home page
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center bg-gradient-to-r from-purple-600 to-purple-100 justify-center w-full min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full mt-15 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-4xl h-auto sm:h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full max-h-full overflow-scroll md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-cener">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-2 text-center">Create Account</h1>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-sm sm:text-base">Join Twincles platform</p>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                {error}
              </div>
            )}

            <form className="space-y-3 sm:space-y-2 px-2" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMapPin className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="pl-10 w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="Your City or Region"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Services Interested In</label>
                <div className="relative">
                  <select
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full mt-4 sm:mt-6 py-2 sm:py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg flex items-center justify-center gap-1 sm:gap-2 shadow-md text-sm sm:text-base"
              >
                {loading ? 'Creating...' : 'Create Account'} <FiArrowRight size={16} />
              </motion.button>
            </form>

            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Gradient Background with Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-xl w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
              <img 
                src={registerImage} 
                alt="Twincles Register" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Get Started</h2>
            <p className="text-indigo-100 text-sm sm:text-base">Enterprise communication solutions</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;