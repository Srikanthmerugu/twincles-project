import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSend, FiMessageSquare, FiHeadphones, FiVideo, FiGlobe, FiUsers, FiBarChart2 } from 'react-icons/fi';

const HeroSection = () => {
  const services = [
    { icon: <FiSend size={24} />, name: "Bulk SMS", description: "Automate OTPs, campaigns, and reminders with our API" },
    { icon: <FiMessageSquare size={24} />, name: "WhatsApp API", description: "Business messaging with rich media capabilities" },
    { icon: <FiHeadphones size={24} />, name: "Voice Broadcast", description: "Authentic voice calls for promotions and alerts" },
    { icon: <FiVideo size={24} />, name: "MMS Messaging", description: "Engage customers with images, videos, and GIFs" },
    { icon: <FiGlobe size={24} />, name: "Verified Caller ID", description: "Build trust with Truecaller verified business ID" },
    { icon: <FiUsers size={24} />, name: "Contact Center", description: "Cloud-based contact center with IVR technology" },
  ];

  const stats = [
    { value: "500+", label: "Active Clients" },
    { value: "99.8%", label: "Delivery Rate" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-sky-900 via-indigo-900 to-purple-900 overflow-hidden min-h-screen flex items-center">
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: `${Math.random() * 30 + 5}px`,
              height: `${Math.random() * 30 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              x: [0, Math.random() * 30 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-sky-500/10 filter blur-[100px]"
        ></motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, -100, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Text content - Left Side */}
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-2 bg-sky-700/30 backdrop-blur rounded-full border border-sky-500/50"
            >
              <span className="text-sky-300 font-medium">Innovative Communication Solutions</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Tele Communication</span> Solutions in Hyderabad
              </h1>
              
              <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-orange-500 mb-4 sm:mb-6 rounded-full"></div>
              
              <p className="text-lg sm:text-xl text-sky-100 mb-6 sm:mb-8 max-w-2xl">
                Transform your business communication with cutting-edge messaging platforms and API solutions. Serving Hyderabad with enterprise-grade telecommunication services.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ y: -3, backgroundColor: "#f59e0b" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl shadow-amber-500/30"
              >
                Explore Services <FiArrowRight className="ml-1" />
              </motion.button>
              <motion.button
                whileHover={{ y: -3, borderColor: "#f59e0b" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-amber-400/50 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all"
              >
                Get API Demo
              </motion.button>
            </motion.div>
            
            {/* Stats */}
            {/* <motion.div
              className="grid grid-cols-3 gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-sm sm:text-base text-sky-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Services grid - Right Side */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
                  className={`bg-gradient-to-br rounded-xl p-5 backdrop-blur-md border border-white/10 overflow-hidden relative ${
                    index % 3 === 0 
                      ? "from-sky-600/20 to-indigo-600/20" 
                      : index % 3 === 1 
                      ? "from-amber-500/20 to-orange-500/20" 
                      : "from-purple-600/20 to-fuchsia-600/20"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${
                        index % 3 === 0 
                          ? "bg-sky-500/20 text-sky-300" 
                          : index % 3 === 1 
                          ? "bg-amber-500/20 text-amber-300" 
                          : "bg-purple-500/20 text-purple-300"
                      }`}>
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-white text-lg">{service.name}</h3>
                    </div>
                    <p className="text-sky-100 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;