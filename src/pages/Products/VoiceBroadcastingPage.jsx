// src/components/VoiceBroadcastingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiUsers, FiBarChart2, FiGlobe, FiClock, FiMessageSquare, FiDollarSign, FiSliders, FiHeadphones, FiPhone, FiMic, FiDatabase, FiShield } from 'react-icons/fi';

const VoiceBroadcastingPage = () => {
  const features = [
    {
      icon: <FiGlobe className="text-xl" />,
      title: "Multiple Gateways",
      description: "Voice calls are directed through various gateways to ensure timely delivery."
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      title: "Real-time Reports",
      description: "Detailed campaign reports help in restructuring campaigns as required."
    },
    {
      icon: <FiClock className="text-xl" />,
      title: "Scheduling",
      description: "Plan tasks efficiently with DND filters to ensure no events are missed."
    },
    {
      icon: <FiMessageSquare className="text-xl" />,
      title: "One-Click OBD",
      description: "Upload data through Excel files and reach targeted users with just one click."
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Contact Management",
      description: "Create groups and save contacts to streamline your workflow."
    },
    {
      icon: <FiSliders className="text-xl" />,
      title: "User-Friendly Interface",
      description: "Accessible from anywhere at any time with an intuitive interface."
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "Quality & Accuracy",
      description: "Auto-dialed calls ensure quality service without manual intervention."
    },
    {
      icon: <FiMic className="text-xl" />,
      title: "IVR Integration",
      description: "Capture responses through Interactive Voice Response for better insights."
    }
  ];

  const clickToCallFeatures = [
    {
      icon: <FiHeadphones className="text-xl" />,
      title: "Call Recording",
      description: "Enhance agent skills and provide transparency for management strategies."
    },
    {
      icon: <FiDatabase className="text-xl" />,
      title: "Inbuilt HTML Code",
      description: "Easily integrate click-to-call on your web applications."
    },
    {
      icon: <FiClock className="text-xl" />,
      title: "24/7 Accessible",
      description: "Always available for your customers whenever they need support."
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Smart Agent",
      description: "Customers can only call the number provided in your application."
    },
    {
      icon: <FiSliders className="text-xl" />,
      title: "Easy Integration",
      description: "Seamlessly connect with CRM, LMS, or e-commerce applications."
    },
    {
      icon: <FiShield className="text-xl" />,
      title: "Privacy Protection",
      description: "Secure both customer and agent privacy during calls."
    }
  ];

  const tollFreeFeatures = [
    "Warm Welcome Message",
    "Multi-Level IVR",
    "Multi Agent Access",
    "Call Recording",
    "Brand Sender ID",
    "API Integration",
    "Advanced Call Routing",
    "Call Forwarding",
    "Multi-Extensions",
    "SMS Notifications",
    "Call Mapping",
    "Friendly Interface",
    "Contact Manager",
    "Cloud Infrastructure"
  ];

  const conferenceFeatures = [
    "High Quality Audio",
    "Unified Interface",
    "Easy Scheduling",
    "Call Recording",
    "Continuous Connectivity",
    "Great Network Coverage"
  ];

  const missedCallFeatures = [
    "Response Automation",
    "Push and Pull Mechanism",
    "Media Tracking",
    "API Integration",
    "Dynamic Reports",
    "Dashboard Access",
    "Stats/Analytics",
    "Email/SMS Alerts"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="inline-block bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Voice Communication Solutions
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Voice Broadcasting & OBD Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Promote your brand and communicate efficiently through authentic voice calls with our advanced outbound dialer solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                >
                  Request Demo
                </motion.button>
                <motion.a
                  href="tel:+919391911699"
                  className="bg-blue-800/50 hover:bg-blue-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhone className="h-5 w-5" />
                  +91 9391911699
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-500 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500 rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="text-5xl mb-4">📞</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Voice Broadcasting</h3>
                      <p className="text-gray-600">Reach thousands with personalized voice messages</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-blue-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">99%</div>
                      <div className="text-sm text-blue-200">Delivery Rate</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-indigo-200">Support</div>
                    </div>
                    <div className="bg-blue-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">Multi</div>
                      <div className="text-sm text-blue-200">Gateways</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">Real-time</div>
                      <div className="text-sm text-indigo-200">Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Voice Broadcasting Features
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Comprehensive solutions to make your voice communication effective and efficient
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Click to Call Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Click-to-Call Solutions
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Make yourself available for users visiting your website, solve their queries instantly, and generate more leads with our Click-to-Call feature.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {clickToCallFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                        <p className="text-slate-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <div className="text-center mb-8">
                  <FiPhone className="text-4xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Instant Connection</h3>
                  <p className="text-blue-100">Bridge the gap between your business and customers</p>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Reduce response time to seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Increase conversion rates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Improve customer satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Gain valuable customer insights</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Toll Free & Conference Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Toll Free Service</h3>
                <p className="text-blue-100">Grow your business faster with 11-digit fancy numbers</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tollFreeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                        <FiCheck className="text-sm" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-blue-700 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Conference Calling</h3>
                <p className="text-indigo-100">Host meetings with ease and increase productivity</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {conferenceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-indigo-100 text-indigo-600 p-1 rounded-full mt-1">
                        <FiCheck className="text-sm" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Missed Call Service */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Missed Call Service</h3>
                <p className="text-blue-100 mb-6">
                  Generate leads, collect feedback, and run polls with no cost to customers. A powerful marketing medium for your business.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-2 rounded-lg shadow transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
              
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {missedCallFeatures.map((feature, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded-lg">
                    <div className="text-sm text-blue-100">{feature}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transform Your Business Communication
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get started with our voice solutions today and experience the difference in customer engagement.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
                        onClick={() => window.location.href = '/contact'}

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Start Free Trial
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-blue-800/50 hover:bg-blue-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone className="h-5 w-5" />
              Contact Sales
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VoiceBroadcastingPage;