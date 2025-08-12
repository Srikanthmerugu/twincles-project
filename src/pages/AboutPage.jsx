import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiGlobe, FiShield, FiClock, FiTrendingUp, FiAward, FiLayers, FiUsers, FiMail, FiMessageSquare, FiSend, FiPhone, FiImage, FiTarget, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import AboutImg from '../assets/about.svg'
// import VisionImg from '../../assets/vision.svg';
// import MissionImg from '../../assets/mission.svg';

const AboutPage = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/contact');
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
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

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const services = [
    { icon: <FiSend size={24} />, name: "Bulk SMS", desc: "Send instant OTPs, bulk campaigns, and automated reminders with our integrated APIs and web interface" },
    { icon: <FiPhone size={24} />, name: "WhatsApp Business API", desc: "Give your business a modern look with our WhatsApp Business API solutions." },
    { icon: <FiMessageSquare size={24} />, name: "RCS Messaging", desc: "Engage customers with rich media messages including images, videos, and interactive buttons." },
    { icon: <FiMail size={24} />, name: "Voice Broadcast", desc: "Promote your brand efficiently through authentic voice calls and outbound dialers." },
    { icon: <FiImage size={24} />, name: "Two-Way Messaging Platform", desc: "Generate leads and collect feedback using dedicated long/short code messaging solutions. "},
    { icon: <FiUsers size={24} />, name: "Smart Links", desc: "Share important information seamlessly through integrated APIs for structured communication." },
    { icon: <FiUsers size={24} />, name: "Contact Center", desc: "Cloud-based contact center with IVR technology for personalized customer experiences" },
    { icon: <FiUsers size={24} />, name: "Audio and Video Conferencing", desc: "High-quality audio and video conferencing solutions for seamless business communication" }

  ];

  const whyChooseUs = [
    { icon: <FiClock size={24} />, title: "24/7 Support", description: "Round-the-clock assistance for all clients" },
    { icon: <FiTrendingUp size={24} />, title: "Flexible Pricing", description: "Affordable plans for every business size" },
    { icon: <FiShield size={24} />, title: "Data Security", description: "Enterprise-grade protection protocols" },
    { icon: <FiCheck size={24} />, title: "Quality Assurance", description: "Rigorous testing for reliable service" },
    { icon: <FiGlobe size={24} />, title: "Transparency", description: "Clear reporting and honest practices" },
    { icon: <FiAward size={24} />, title: "On-time Delivery", description: "Services delivered as promised" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 120, 240, 360]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-400/10 filter blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-400/10 filter blur-[90px]"
        />
      </motion.div>

      {/* Main content */}
      <div className="container md:mt-15 mt-5 mx-auto px-4 py-20 relative z-10">
        {/* Hero section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-24"
        >
          {/* <motion.div variants={fadeIn} className="inline-block mb-4">
            <div className="px-4 py-1 bg-amber-500/20 rounded-full text-amber-400 text-sm font-medium">
              Since 2020
            </div>
          </motion.div> */}
          
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Top Most <span className="text-amber-400">Tele Communication</span> Solutions
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Twincles CPaaS delivers cutting-edge cloud-based communication solutions for businesses globally
          </motion.p>
          
          {/* <motion.div variants={fadeIn}>
            <motion.button
              whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto"
            >
              Explore Our Platform <FiArrowRight />
            </motion.button>
          </motion.div> */}
        </motion.div>

        {/* About Twincles with Image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-12 items-center mb-24"
        >
          <motion.div 
            variants={fadeInLeft}
            className="lg:w-1/2"
          >
            <div className=" p-8 md:p-10">
              <motion.h2 
                variants={fadeIn}
                className="text-2xl md:text-3xl font-bold text-white mb-6"
              >
                About Twincles CPaaS
              </motion.h2>
              <div className="space-y-4">
                <motion.p variants={fadeIn} className="text-blue-200">
                  Established in 2020, Twincles CPaaS is the premier provider of cloud-based communication solutions globally. We offer a comprehensive range of services including Bulk SMS, Voice Broadcasting, Video Conferencing, and Customer Contact Centers to businesses across all industries.
                </motion.p>
                <motion.p variants={fadeIn} className="text-blue-200">
                  Our platform enables secure, authentic communication with 100% efficiency, helping businesses of all sizes deploy critical information quickly and reliably.
                </motion.p>
                <motion.p variants={fadeIn} className="text-blue-200">
                  With user-friendly interfaces, targeted promotions, and smart APIs, we help clients achieve higher conversation rates and wider audience reach while maintaining complete transparency and security.
                </motion.p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInRight}
            className="lg:w-1/2"
          >
            <motion.div
              variants={floatingAnimation}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
            >
              <img 
                src={AboutImg} 
                alt="About Twincles CPaaS" 
                className="w-full max-w-lg mx-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Our Communication Solutions
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -8, 
                  backgroundColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4">
                  <motion.div whileHover={{ rotate: 15, scale: 1.1 }}>
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-blue-200">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="bg-amber-500/10 border border-amber-400/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-400/10 rounded-full filter blur-[60px]"></div>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <motion.div 
                variants={floatingAnimation}
                className="flex-shrink-0"
              >
                {/* <img src={VisionImg} alt="Our Vision" className="w-40" /> */}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-blue-200">
                  To make communication solutions universally accessible, useful, and affordable while growing alongside our customers.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="bg-blue-600/10 border border-blue-400/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/10 rounded-full filter blur-[60px]"></div>
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <motion.div 
                variants={floatingAnimation}
                className="flex-shrink-0"
              >
                {/* <img src={MissionImg} alt="Our Mission" className="w-40" /> */}
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-blue-200">
                  To be the preferred provider enabling differentiated customer engagement through secure, transparent, and satisfying solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Why Choose Twincles
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(245, 158, 11, 0.1)"
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 rounded-full text-amber-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-blue-200">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-white/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Ready to Transform Your Communications?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            Join hundreds of businesses trusting Twincles for their critical communication needs.
          </motion.p>
          <motion.button
            onClick={handleNavigate}
            whileHover={{ 
              y: -3, 
              boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)",
              backgroundColor: "rgba(245, 158, 11, 0.9)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-amber-500 text-white rounded-lg font-semibold transition-all flex items-center gap-2 mx-auto"
          >
            Get Started Today <FiArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;