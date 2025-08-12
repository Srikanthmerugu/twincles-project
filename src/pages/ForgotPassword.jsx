import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight } from 'react-icons/fi';
import passwordResetImage from '../assets/companies/login.jpg'; // Replace with your image

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-blue-600 to-indigo-100 p-4 sm:p-6">
      <div className="w-full md:mt-15 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-4xl h-auto sm:h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2   p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 text-center">Reset Password</h1>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center text-sm sm:text-base">
              Enter your email to receive a password reset link
            </p>

            <form className="space-y-4 sm:space-y-6 px-2 sm:px-4">
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    className="pl-10 w-full outline-none p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 sm:mt-6 py-2 sm:py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg flex items-center justify-center gap-1 sm:gap-2 shadow-md text-sm sm:text-base"
              >
                Send Reset Link <FiArrowRight size={16} />
              </motion.button>
            </form>

            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-600">
              Remember your password?{' '}
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign In
              </a>
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
                src={passwordResetImage} 
                alt="Password Reset" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Twincles Security</h2>
            <p className="text-blue-100 text-sm sm:text-base">Secure account recovery</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;