// src/components/WhatsAppBusinessPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import whatsapAPI from '../../assets/companies/whatsapAPI.jpg';
import { FiArrowRight, FiCheck, FiMessageSquare, FiLock, FiGlobe, FiHeadphones, FiCreditCard, FiUser, FiSettings, FiDatabase, FiBarChart2 } from 'react-icons/fi';

const WhatsAppBusinessPage = () => {
  const benefits = [
    {
      icon: <FiLock className="text-xl" />,
      title: "End-to-End Encryption",
      description: "Reach billions securely through WhatsApp's encrypted platform"
    },
    {
      icon: <FiMessageSquare className="text-xl" />,
      title: "Customer Engagement",
      description: "Drive interactive and conversational customer experiences"
    },
    {
      icon: <FiGlobe className="text-xl" />,
      title: "Global Support",
      description: "Supported worldwide with high deliverability rates"
    },
    {
      icon: <FiHeadphones className="text-xl" />,
      title: "Customer Support",
      description: "Transform WhatsApp into your primary support channel"
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "Verifications",
      description: "Secure account verifications through API integration"
    },
    {
      icon: <FiSettings className="text-xl" />,
      title: "Easy Integration",
      description: "Seamlessly connect with your existing business systems"
    }
  ];

  const chatbotUses = [
    "Login/Signup Authentication",
    "Lead Generation & Qualification",
    "Payment Transactions",
    "24/7 Customer Support",
    "Digital Transformation",
    "Field Officer Support",
    "Employee Training & FAQs"
  ];

  const notificationTypes = [
    "Order Confirmations",
    "Delivery Status Updates",
    "Appointment Reminders",
    "Payment Receipts",
    "Support Ticket Updates",
    "Promotional Offers",
    "Account Alerts"
  ];

  const apiEndpoints = [
    { node: "Account", desc: "Register your WhatsApp account" },
    { node: "Certificates", desc: "Manage SSL certificates" },
    { node: "Contacts", desc: "Verify customer phone numbers" },
    { node: "Health", desc: "Check application status" },
    { node: "Media", desc: "Manage media files" },
    { node: "Messages", desc: "Send all message types" },
    { node: "Metrics", desc: "Collect Web App metrics" },
    { node: "Services", desc: "Database management" },
    { node: "Settings", desc: "Configure application settings" },
    { node: "Stats", desc: "Collect system statistics" },
    { node: "Stickerpacks", desc: "Manage stickers" },
    { node: "Support", desc: "Get API help" },
    { node: "Users", desc: "Manage authentication" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Business Messaging Platform
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Customer Engagement with WhatsApp Business API
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-xl">
                Give your business a modern look by reaching customers through the world's most popular messaging platform with secure, interactive communication.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                                            onClick={() => window.location.href = '/contact'}

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                >
                  Get Started 
                </motion.button>
                <motion.a
                onClick={() => window.location.href = '/contact'}

                  href="#demo"
                  className="bg-green-800/50 hover:bg-green-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMessageSquare className="h-5 w-5" />
                  Request Demo
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
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-500 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-green-500 rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-3  rounded-xl shadow-lg text-center">
                      <div className="text-5xl ">
                        <img src={whatsapAPI} alt="WhatsApp Business API" className="w-full h-36 rounded-2xl mx-auto" />
                      </div>
                      {/* <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp Business API</h3> */}
                      <p className="font-bold text-gray-800 mt-2">WhatsApp Business API</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-green-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">2B+</div>
                      <div className="text-sm text-green-200">Users Worldwide</div>
                    </div>
                    <div className="bg-emerald-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">99%</div>
                      <div className="text-sm text-emerald-200">Open Rate</div>
                    </div>
                    <div className="bg-green-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-green-200">Support</div>
                    </div>
                    <div className="bg-emerald-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">10s</div>
                      <div className="text-sm text-emerald-200">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              WhatsApp Business API Benefits
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Enterprise-grade messaging with the reach of WhatsApp
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
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
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Chatbot Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                AI-Powered Chatbot Integration
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Build natural customer experiences through our intelligent chatbot with multi-level IVR systems. Our AI-driven solution provides instant responses with 90% accuracy, saving time for both businesses and customers.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {chatbotUses.map((use, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-3 rounded-lg shadow border border-slate-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-2">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full mt-1">
                        <FiCheck className="text-sm" />
                      </div>
                      <span className="text-slate-700">{use}</span>
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
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FiMessageSquare className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold">Chatbot Features</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Natural Language Processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Multi-level IVR Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>90% Accuracy Rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Minimal Coding Required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>24/7 Automated Responses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full mt-1">
                      <FiCheck />
                    </div>
                    <span>Seamless Handoff to Human Agents</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Notifications Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Notification Services
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Initiate conversations with pre-approved templates for various use cases
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {notificationTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FiMessageSquare className="text-xl" />
                </div>
                <h3 className="font-semibold text-slate-800">{type}</h3>
              </motion.div>
            ))}
          </div>
          
          {/* API Documentation */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">WhatsApp Business API Documentation</h3>
              <p className="text-green-100">REST API Architecture with JSON data formats</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apiEndpoints.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                        {endpoint.node === "Account" && <FiUser className="text-lg" />}
                        {endpoint.node === "Messages" && <FiMessageSquare className="text-lg" />}
                        {endpoint.node === "Settings" && <FiSettings className="text-lg" />}
                        {endpoint.node === "Media" && <FiDatabase className="text-lg" />}
                        {endpoint.node === "Stats" && <FiBarChart2 className="text-lg" />}
                        {!["Account","Messages","Settings","Media","Stats"].includes(endpoint.node) && <FiSettings className="text-lg" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{endpoint.node}</h4>
                        <p className="text-slate-600 text-sm">{endpoint.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business Communication?
          </motion.h2>
          <motion.p 
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses using WhatsApp Business API for superior customer engagement.
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
              className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started
            </motion.button>
            <motion.a
              href="#demo"
              className="bg-green-800/50 hover:bg-green-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMessageSquare className="h-5 w-5" />
              Request Demo
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppBusinessPage;