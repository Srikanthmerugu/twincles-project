// src/components/SmartLinksPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiBarChart2, FiDollarSign, FiCalendar, FiBell, FiTag, FiAward } from 'react-icons/fi';

const SmartLinksPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const features = [
    {
      icon: <FiAward className="text-xl" />,
      title: "Brand Establishment",
      description: "Build and reinforce your brand identity with every message sent through our platform."
    },
    {
      icon: <FiTag className="text-xl" />,
      title: "Special Offers",
      description: "Share exclusive discounts and promotions directly with your customers' mobile devices."
    },
    {
      icon: <FiCalendar className="text-xl" />,
      title: "Appointment Reminders",
      description: "Reduce no-shows with automated reminders for scheduled appointments and bookings."
    },
    {
      icon: <FiDollarSign className="text-xl" />,
      title: "Payment Reminders",
      description: "Gently remind customers about upcoming or overdue payments to improve cash flow."
    },
    {
      icon: <FiBell className="text-xl" />,
      title: "Important Updates",
      description: "Instantly communicate critical information to your customers and team members."
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      title: "Performance Tracking",
      description: "Monitor campaign effectiveness with detailed analytics on open and response rates."
    }
  ];

  const useCases = [
    {
      title: "Retail Businesses",
      description: "Send flash sale alerts, new arrival notifications, and loyalty program updates."
    },
    {
      title: "Healthcare Providers",
      description: "Remind patients about appointments, prescription refills, and health check-ups."
    },
    {
      title: "Service Industries",
      description: "Notify customers about service appointments, technician arrivals, and completion updates."
    },
    {
      title: "Educational Institutions",
      description: "Communicate with parents about events, holidays, and student progress updates."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="inline-block bg-teal-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Intelligent Messaging Solutions
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Business Communication with Smart Links
              </h1>
              <p className="text-xl text-cyan-100 mb-8 max-w-xl">
                Elevate your SMS campaigns with trackable links that drive engagement and deliver measurable results for small and medium businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                            onClick={() => window.location.href = '/contact'}

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                >
                  Start Free Trial
                </motion.button>
                <motion.a
                  href="tel:+919391911699"
                  className="bg-teal-800/50 hover:bg-teal-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
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
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-500 rounded-full opacity-50"></div>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-teal-500 rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="text-5xl mb-4">🔗</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Link Analytics</h3>
                      <p className="text-gray-600">Track engagement in real-time</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-teal-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">98%</div>
                      <div className="text-sm text-teal-200">Open Rate</div>
                    </div>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">45%</div>
                      <div className="text-sm text-cyan-200">Click-Through</div>
                    </div>
                    <div className="bg-teal-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-teal-200">Support</div>
                    </div>
                    <div className="bg-cyan-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">10s</div>
                      <div className="text-sm text-cyan-200">Delivery Time</div>
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
                Smart Links for Smarter Business Communication
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Bulk SMS services are largely used by Small and Medium scale industries for Promotions, Sharing important information seamlessly through integrated APIs so that users along with the Business team are on the same structured page.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Bulk SMS is used for various purposes which includes Establishing brand name, sharing special offers or discounts to regular users for long run business connections, sending reminder messages about payments or appointments.
              </p>
              
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                <p className="text-teal-700 font-medium">
                  "Smart Links transform standard SMS into powerful engagement tools with trackable results."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Lead Generation</h3>
                <p>Convert SMS recipients into valuable leads with targeted campaigns.</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Customer Retention</h3>
                <p>Build lasting relationships through consistent, valuable communication.</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">Process Automation</h3>
                <p>Automate reminders, notifications, and follow-ups to save time.</p>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🔁</div>
                <h3 className="text-xl font-bold mb-3">Two-Way Communication</h3>
                <p>Enable customers to respond directly to your messages for instant engagement.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Powerful Features for Business Growth
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need to maximize the impact of your SMS campaigns
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
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
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
      
      {/* Promotional SMS Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Power Your Promotions with Smart Links</h2>
                <p className="text-teal-100 mb-8">
                  Companies use promotional SMS for Branding, promoting any special offers or discounts, to create awareness of business existence in particular localities. These messages are used for generating more leads and increasing revenues.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-teal-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Brand Visibility</h3>
                    <p className="text-sm text-teal-200">Increase recognition in target markets</p>
                  </div>
                  <div className="bg-cyan-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Sales Boost</h3>
                    <p className="text-sm text-cyan-200">Drive conversions with special offers</p>
                  </div>
                  <div className="bg-teal-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Local Targeting</h3>
                    <p className="text-sm text-teal-200">Relevant campaigns for specific areas</p>
                  </div>
                  <div className="bg-cyan-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Engagement Tracking</h3>
                    <p className="text-sm text-cyan-200">Measure campaign effectiveness</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-full opacity-10 blur-xl"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Promotional SMS Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mt-1">
                    <FiTag className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Special Offers & Discounts</h4>
                    <p className="text-slate-600">
                      Drive sales with time-sensitive promotions delivered directly to customers' phones.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mt-1">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Brand Awareness</h4>
                    <p className="text-slate-600">
                      Keep your business top-of-mind with regular, valuable communication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-lg mt-1">
                    <FiBarChart2 className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Lead Generation</h4>
                    <p className="text-slate-600">
                      Convert recipients into customers with compelling calls-to-action.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mt-1">
                    <FiDollarSign className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Revenue Growth</h4>
                    <p className="text-slate-600">
                      Increase sales and customer lifetime value through targeted campaigns.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-50 to-cyan-50">
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
              How different industries leverage Smart Links for business growth
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
                  <div className="text-4xl mb-4">📱</div>
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
              How Smart Links Work
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Simple steps to transform your business communication
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
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Create Campaign</h3>
              <p className="text-slate-600">
                Design your SMS message with our intuitive platform or API.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Add Smart Links</h3>
              <p className="text-slate-600">
                Insert trackable links to monitor engagement and click-through rates.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Send to Audience</h3>
              <p className="text-slate-600">
                Deliver your message to targeted segments or your entire contact list.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analyze Results</h3>
              <p className="text-slate-600">
                Measure campaign effectiveness with real-time analytics and reports.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transform Your Business Communication Today
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of SMBs using Smart Links to drive engagement and growth.
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
              className="bg-white text-teal-700 hover:bg-teal-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started Now
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-teal-800/50 hover:bg-teal-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9391911699
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SmartLinksPage;