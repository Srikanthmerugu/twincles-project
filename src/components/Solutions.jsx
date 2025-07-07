import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiBookOpen, FiFileText, FiUsers, FiShield, FiClock, FiDollarSign, FiArrowRight } from 'react-icons/fi';
import { TfiLightBulb } from 'react-icons/tfi';

const Solutions = () => {
  const solutions = [
    {
      title: "API Documentation",
      description: "Comprehensive guides to integrate our communication APIs seamlessly into your systems",
      icon: <FiBookOpen className="text-sky-600" size={24} />
    },
    {
      title: "DLT Registration",
      description: "End-to-end assistance with regulatory compliance for messaging services in India",
      icon: <FiFileText className="text-indigo-600" size={24} />
    },
    {
      title: "Use Cases",
      description: "Industry-specific solutions for SMS & WhatsApp tailored to your business needs",
      icon: <TfiLightBulb  className="text-amber-500" size={24} />
    },
    {
      title: "Our Customers",
      description: "Success stories from 500+ businesses we've helped transform their communications",
      icon: <FiUsers className="text-emerald-500" size={24} />
    }
  ];

  const features = [
    { icon: <FiCheck size={18} />, text: "99.9% Uptime Guarantee" },
    { icon: <FiShield size={18} />, text: "Enterprise-grade Security" },
    { icon: <FiClock size={18} />, text: "24/7 Technical Support" },
    { icon: <FiDollarSign size={18} />, text: "Competitive Pricing" }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-sky-50/80 to-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-50/80 to-white"></div>
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-200 rounded-full opacity-10 blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-200 rounded-full opacity-10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-1/2"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
                Solutions
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Tailored <span className="text-sky-600">Communication</span> Solutions
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-slate-600 mb-8"
            >
              We provide more than just services - we deliver comprehensive solutions designed to address your specific communication challenges.
            </motion.p>
            
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                  <p className="text-slate-600">{solution.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden"
              >
                {/* Floating elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Why Choose Twincles?</h3>
                
                <ul className="space-y-4 mb-8 relative z-10">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-white/20 p-1.5 rounded-full mt-1 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-white/90">{feature.text}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 relative z-10"
                >
                  <p className="text-sm text-white/80 mb-3">Ready to get started?</p>
                  <motion.button
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    Contact Sales <FiArrowRight />
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 w-16 h-16 bg-amber-400/20 rounded-xl z-0"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-sky-400/20 rounded-xl z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;