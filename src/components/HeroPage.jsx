import React from 'react';
import { motion } from 'framer-motion';
import heroimage from '../assets/hero.png'
import { FiArrowRight, FiSend, FiPhone, FiMessageSquare, FiMail, FiImage, FiShield } from 'react-icons/fi';

const HeroPage = () => {
  const services = [
    { icon: <FiSend size={24} />, name: "SMS", desc: "Bulk & transactional messaging" },
    { icon: <FiPhone size={24} />, name: "Voice", desc: "Voice broadcast solutions" },
    { icon: <FiMessageSquare size={24} />, name: "WhatsApp Business", desc: "Official API integration" },
    { icon: <FiMail size={24} />, name: "Email Service", desc: "Mass email delivery" },
    { icon: <FiImage size={24} />, name: "MMS Messaging", desc: "Rich media campaigns" },
    { icon: <FiShield size={24} />, name: "True Caller API", desc: "Verified business identity" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-700 to-indigo-900 overflow-hidden">
      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 100, 0],
            rotate: [0, 120, 240, 360]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-white/10 filter blur-[100px]"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, -100, 0],
            rotate: [360, 240, 120, 0]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-amber-400/10 filter blur-[80px]"
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text content - left side */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl text-center md:text-start mt-8 md:mt-1 sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[2.5rem] font-bold text-white leading-tight">
                The Best  <span className="text-amber-300">Tele Communication</span> solutions in Hyderabad

              </h1>
              
<div className="h-1 w-16 mx-auto md:mx-0 bg-amber-400 my-6"></div>              
              <p className="text-lg text-center md:text-start sm:text-xl text-blue-100 mb-6 md:mb-8">
                Enterprise-grade messaging solutions with 99.9% delivery rates and unmatched reliability
              </p>
            </motion.div>

            <motion.div
              className="flex flex-row xs:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Get Started <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-amber-400/50 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold transition-all text-sm sm:text-base"
              >
                Contact Sales
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8 md:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-blue-600"></div>
                ))}
              </div>
              <div className="text-white">
                <p className="text-sm sm:text-base">Trusted by 500+ enterprises</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="ml-1 text-xs sm:text-sm">4.9/5 (200+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services grid - right side */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            //   className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"
            >
              {/* <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
                Our Communication Solutions
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -5, 
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(251, 191, 36, 0.5)"
                    }}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-4 flex flex-col items-center text-center transition-all cursor-pointer h-full"
                  >
                    <div className="bg-amber-400/20 p-2 rounded-full mb-2 text-amber-400">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base mb-1">{service.name}</h3>
                    <p className="text-blue-200 text-xs sm:text-sm">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-xs sm:text-sm text-center text-white">
                  "Achieved 98% delivery rates with Twincles' enterprise SMS platform"
                </p>
                <p className="text-xs text-center mt-1 text-blue-200">- Fortune 500 Client</p>
              </div> */}
              <img src={heroimage} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;