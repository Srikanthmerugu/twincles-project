import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight, FiEyeOff, FiEye } from 'react-icons/fi';
import loginImage from '../assets/companies/login.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

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
      const response = await axios.post('https://twincles.mavenerp.in/api/public/api/login', formData);
      
      if (response.data) {
        // Store user data and token in localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        
        // Redirect to dashboard or home page
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gradient-to-r from-blue-600 to-indigo-100 items-center justify-center w-full min-h-screen p-4 sm:p-6">
      <div className="w-full mt-5 md:mt-15 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-4xl h-auto sm:h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/ p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">Welcome Back</h1>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-sm sm:text-base">Sign in to your Twincles account</p>

            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                {error}
              </div>
            )}

            <form className="space-y-2 sm:space-y-4 px-2 sm:px-4" onSubmit={handleSubmit}>
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
  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Password</label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FiLock className="text-gray-400" />
    </div>
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      value={formData.password}
      onChange={handleChange}
      className="pl-10 pr-10 w-full p-2 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
      placeholder="••••••••"
      required
    />
    <div
      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
      onClick={() => setShowPassword(prev => !prev)}
    >
      {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
    </div>
  </div>
</div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-gray-700">
                    Remember me
                  </label>
                </div>
                {/* <a href="/forgot-password" className="text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a> */}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full mt-4 sm:mt-6 py-2 sm:py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-1 sm:gap-2 shadow-md text-sm sm:text-base"
              >
                {loading ? 'Signing In...' : 'Sign In'} <FiArrowRight size={16} />
              </motion.button>
            </form>

            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                Create account
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Gradient Background with Image */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-xl w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
              <img 
                src={loginImage} 
                alt="Twincles Login" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Twincles Tele Communication</h2>
            <p className="text-blue-100 text-sm sm:text-base">Enterprise messaging solutions</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;