// src/components/TwoWaySMSPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiMail, FiBarChart2, FiLink, FiClock, FiSmartphone } from 'react-icons/fi';

const TwoWaySMSPage = () => {
  const [activeTab, setActiveTab] = useState('features');
  
  const features = [
    {
      icon: <FiLink className="text-xl" />,
      title: "URL Forwarding",
      description: "Responses received can be forwarded to designated URLs regardless of response type (Dynamic/Static)."
    },
    {
      icon: <FiClock className="text-xl" />,
      title: "Track of Response",
      description: "Capture time, date, and location along with the desired response for complete tracking."
    },
    {
      icon: <FiSmartphone className="text-xl" />,
      title: "Auto Response",
      description: "Enable auto-Dynamic/Static responses for each incoming SMS based on your requirements."
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "Unlimited Keywords",
      description: "Capture responses for different scenarios using unlimited keywords with a single number (Long/short code)."
    },
    {
      icon: <FiLink className="text-xl" />,
      title: "API Integration",
      description: "Integrate Long/Short code with your CRM System for seamless support activities."
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      title: "Analytics",
      description: "Complete reports to analyze success ratios for all campaigns with unique keywords and gateway numbers."
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email Alerts",
      description: "Receive email alerts for every response without needing to access the dashboard."
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      title: "Reports Access",
      description: "Access detailed reports anytime with comprehensive insights into your messaging campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="inline-block bg-indigo-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Interactive Communication
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionize Engagement with 2-Way SMS Messaging
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-xl">
                Enable real-time conversations with customers through our powerful push and pull SMS platform designed for lead generation, feedback collection, and research.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                            onClick={() => window.location.href = '/contact'}

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                >
                  Start Free Trial
                </motion.button>
                <motion.a
                  href="tel:+919391911699"
                  className="bg-indigo-800/50 hover:bg-indigo-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
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
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-indigo-500 rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="text-5xl mb-4">📲</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Two-Way SMS</h3>
                      <p className="text-gray-600">Engage in conversations with your customers</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">10M+</div>
                      <div className="text-sm text-indigo-200">Messages Monthly</div>
                    </div>
                    <div className="bg-purple-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">99.9%</div>
                      <div className="text-sm text-purple-200">Delivery Rate</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-indigo-200">Support</div>
                    </div>
                    <div className="bg-purple-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">10s</div>
                      <div className="text-sm text-purple-200">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How 2-Way SMS Works
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              The push and pull mechanism enables real-time interaction with your audience
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Initiate Conversation</h3>
              <p className="text-slate-600">
                Send an SMS to your customer with a question, survey, or call-to-action.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Response</h3>
              <p className="text-slate-600">
                Customer replies directly to your message using their mobile device.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Capture & Process</h3>
              <p className="text-slate-600">
                Our system captures the response, processes it, and triggers appropriate actions.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automate & Analyze</h3>
              <p className="text-slate-600">
                Automate responses and analyze data to improve engagement strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Powerful Features for Engagement
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need to create meaningful conversations with your customers
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
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
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
      
      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Transformative Use Cases
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              How businesses leverage 2-Way SMS for growth and engagement
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Lead Generation & Confirmation</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <FiCheck />
                  </div>
                  <span>Capture leads through SMS responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <FiCheck />
                  </div>
                  <span>Send appointment and booking confirmations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <FiCheck />
                  </div>
                  <span>Confirm orders and reservations in real-time</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Feedback & Research</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <FiCheck />
                  </div>
                  <span>Collect customer feedback after interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <FiCheck />
                  </div>
                  <span>Conduct market research through SMS surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <FiCheck />
                  </div>
                  <span>Gather event feedback and satisfaction metrics</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Seamless CRM Integration
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Connect our 2-Way SMS platform with your existing CRM systems to streamline customer interactions and centralize communication.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <FiLink className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">API Integration</h4>
                    <p className="text-slate-500 text-sm">Easy integration with any CRM</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
                    <FiBarChart2 className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold">CentralHub CRM</h4>
                    <p className="text-slate-500 text-sm">Pre-built integration available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://www.centrahubcrm.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold flex items-center gap-2 group"
                >
                  Learn more about CentralHub CRM integration
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <FiSmartphone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Dedicated vs Shared Codes</h3>
                    <p className="text-slate-600">
                      Choose between dedicated long/short codes or shared options based on your business needs.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
                    <h4 className="font-bold text-indigo-700 mb-3">Dedicated Codes</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <FiCheck className="text-indigo-600 mt-1" />
                        <span>Exclusive to your business</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="text-indigo-600 mt-1" />
                        <span>10-digit virtual mobile numbers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="text-indigo-600 mt-1" />
                        <span>Ideal for high-volume messaging</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                    <h4 className="font-bold text-purple-700 mb-3">Shared Codes</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <FiCheck className="text-purple-600 mt-1" />
                        <span>Cost-effective solution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="text-purple-600 mt-1" />
                        <span>5-8 digit short codes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FiCheck className="text-purple-600 mt-1" />
                        <span>Perfect for campaigns and promotions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Engaging with 2-Way SMS Today
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses transforming customer communication with our platform.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Request Demo
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-indigo-800/50 hover:bg-indigo-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Sales
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TwoWaySMSPage;