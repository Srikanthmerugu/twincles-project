// src/components/ContactCenterSolutionsPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiCloud, FiSettings, FiBarChart2, FiUsers, FiMic, FiMonitor, FiGlobe } from 'react-icons/fi';

const ContactCenterSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <FiPhone className="text-xl" />,
      title: "Interactive IVR",
      description: "Direct calls to specific departments or agents with customizable call flows in minutes."
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Intelligent Call Routing",
      description: "Distribute calls based on priority or random assignment to optimize agent availability."
    },
    {
      icon: <FiMic className="text-xl" />,
      title: "Live Call Transfer",
      description: "Seamlessly transfer calls between agents for quick query resolution."
    },
    {
      icon: <FiMonitor className="text-xl" />,
      title: "Call Recording",
      description: "Record calls for performance reviews and market insights."
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      title: "Detailed Analytics",
      description: "Access real-time reports on calls, talk time, and performance metrics."
    },
    {
      icon: <FiGlobe className="text-xl" />,
      title: "Work from Anywhere",
      description: "Manage remote agents and customers on a cloud-based platform."
    }
  ];

  const useCases = [
    {
      title: "Customer Support Centers",
      description: "Handle high call volumes with intelligent routing and live monitoring."
    },
    {
      title: "Sales Teams",
      description: "Integrate with CRM to nurture leads and close deals faster."
    },
    {
      title: "Healthcare Services",
      description: "Streamline patient inquiries with IVR and call transfers."
    },
    {
      title: "E-Commerce",
      description: "Provide seamless support across channels from any location."
    }
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
                Cloud-Based Contact Center Solutions
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Build Smarter Contact Centers with Ease
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-xl">
                Manage your contact center from anywhere using a single cloud platform with intelligent IVR, call routing, and real-time analytics.
              </p>
              <div className="flex flex-wrap gap-4">
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
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-500 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-500 rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="text-5xl mb-4">☎️</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Center Efficiency</h3>
                      <p className="text-gray-600">Streamlined operations in real-time</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-blue-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">99%</div>
                      <div className="text-sm text-blue-200">Agent Availability</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">80%</div>
                      <div className="text-sm text-indigo-200">Resolution Rate</div>
                    </div>
                    <div className="bg-blue-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-200">Support</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">5s</div>
                      <div className="text-sm text-indigo-200">Call Connect Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Intelligent Contact Centers on the Cloud
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Build and manage your contact center effortlessly from any location using a single cloud platform. Leverage robust IVR, intelligent routing, and CRM integration for superior customer experiences.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                With minimal setup, customizable call flows, and real-time analytics, our solutions empower businesses to connect with customers efficiently and authentically.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-700 font-medium">
                  "Cloud contact centers transform customer support into seamless, scalable solutions."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-3">Seamless Communication</h3>
                <p>Unify multiple channels on one platform for better agent efficiency.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-3">Remote Operations</h3>
                <p>Connect agents and customers from anywhere with cloud technology.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3">Smart Automation</h3>
                <p>Reduce call times with IVR and intelligent routing.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Actionable Insights</h3>
                <p>Monitor performance with detailed analytics and call recordings.</p>
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
              Powerful Features for Contact Centers
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need to deliver exceptional customer support
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Transform Your Contact Center Operations</h2>
                <p className="text-indigo-100 mb-8">
                  Our cloud-based contact center solutions empower businesses to deliver personalized, efficient, and scalable customer support with minimal effort.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Multi-Channel Support</h3>
                    <p className="text-sm text-blue-200">Unify all channels on one platform</p>
                  </div>
                  <div className="bg-indigo-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Remote Connectivity</h3>
                    <p className="text-sm text-indigo-200">Manage from any location</p>
                  </div>
                  <div className="bg-blue-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Faster Resolutions</h3>
                    <p className="text-sm text-blue-200">Reduce call times with smart routing</p>
                  </div>
                  <div className="bg-indigo-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Real-Time Insights</h3>
                    <p className="text-sm text-indigo-200">Track performance with analytics</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Center Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mt-1">
                    <FiSettings className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">CRM Integration</h4>
                    <p className="text-slate-600">
                      Connect with CRM for personalized interactions and lead management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mt-1">
                    <FiMonitor className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Live Monitoring</h4>
                    <p className="text-slate-600">
                      Listen to calls in real-time to improve training and customer satisfaction.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mt-1">
                    <FiUsers className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Agent Analysis</h4>
                    <p className="text-slate-600">
                      Evaluate agent performance to enhance productivity and training.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mt-1">
                    <FiGlobe className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Work from Anywhere</h4>
                    <p className="text-slate-600">
                      Enable remote agents to deliver support from any location.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industry-Specific Applications
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              How businesses leverage contact center solutions for growth
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
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
              How Contact Center Solutions Work
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Simple steps to build an efficient contact center
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Set Up IVR</h3>
              <p className="text-slate-600">
                Customize call flows with welcome messages and routing options.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Configure Routing</h3>
              <p className="text-slate-600">
                Set up priority or random call distribution to agents.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrate CRM</h3>
              <p className="text-slate-600">
                Connect with CRM for personalized customer interactions.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Monitor & Analyze</h3>
              <p className="text-slate-600">
                Track performance with analytics and live monitoring.
              </p>
            </motion.div>
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
            Transform Your Contact Center Today
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join businesses delivering exceptional customer experiences with our cloud solutions.
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
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all">
              Get Started Now
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-blue-800/50 hover:bg-blue-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 1.059-.059l4.435.74a1 0 0 1.836.986V17a1 0 0 0-1-1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9391911699
            </motion.a>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default ContactCenterSolutionsPage;