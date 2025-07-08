// src/components/MMSMessagingPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiImage, FiMic, FiVideo, FiBarChart2, FiArrowRight, FiCheck } from 'react-icons/fi';
import { TfiText } from "react-icons/tfi";

const MMSMessagingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <FiImage className="text-xl" />,
      title: "Image Support",
      description: "Enhance messages with high-quality images to capture customer attention."
    },
    {
      icon: <FiMic className="text-xl" />,
      title: "Voice Clips",
      description: "Include short audio messages for a personal touch in campaigns."
    },
    {
      icon: <FiVideo className="text-xl" />,
      title: "Video Content",
      description: "Share engaging videos or GIFs to boost customer interaction."
    },
    {
      icon: <TfiText className="text-xl" />,
      title: "Long Text Messages",
      description: "Send up to 1600 characters with subject lines for detailed communication."
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      title: "Real-Time Analytics",
      description: "Track delivery and engagement with detailed performance reports."
    }
  ];

  const useCases = [
    {
      title: "Retail & E-Commerce",
      description: "Send product images, promotional videos, or GIFs to drive sales."
    },
    {
      title: "Hospitality",
      description: "Share virtual tours or welcome videos to enhance guest experiences."
    },
    {
      title: "Real Estate",
      description: "Send property photos or video walkthroughs to attract potential buyers."
    },
    {
      title: "Event Management",
      description: "Promote events with multimedia invites or live updates via MMS."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="inline-block bg-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Multimedia Messaging Solutions
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Engage Customers with MMS Messaging
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-xl">
                Deliver rich, engaging experiences with multimedia messages that include images, videos, voice clips, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                            onClick={() => window.location.href = '/contact'}

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                >
                  Start Free Trial
                </motion.button>
                <motion.a
                  href="tel:+919391911699"
                  className="bg-purple-800/50 hover:bg-purple-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
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
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-500 rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg text-center">
                      <div className="text-5xl mb-4">📸</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">MMS Engagement</h3>
                      <p className="text-gray-600">Rich media for better conversions</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-purple-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">95%</div>
                      <div className="text-sm text-purple-200">Open Rate</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">50%</div>
                      <div className="text-sm text-indigo-200">Engagement Rate</div>
                    </div>
                    <div className="bg-purple-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-purple-200">Support</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">8s</div>
                      <div className="text-sm text-indigo-200">Delivery Time</div>
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
                Multimedia Messaging for Enhanced Engagement
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                MMS (Multimedia Messaging Service) takes your campaigns beyond text, allowing you to deliver rich media like images, videos, voice clips, and GIFs for a more engaging customer experience.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                With support for up to 1600 characters and subject lines, MMS ensures your message stands out, driving better lead conversions and customer interactions.
              </p>
              
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-purple-700 font-medium">
                  "MMS transforms standard messaging into immersive customer experiences."
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">📷</div>
                <h3 className="text-xl font-bold mb-3">Rich Media</h3>
                <p>Deliver images, videos, and audio for impactful campaigns.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Higher Engagement</h3>
                <p>Multimedia messages boost customer interaction rates.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3">Trackable Results</h3>
                <p>Monitor delivery and engagement with real-time analytics.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3">Detailed Messaging</h3>
                <p>Send long texts with subject lines for clear communication.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ duration: 0.5 }}
            >
              Powerful MMS Features for Customer Engagement
            </motion.h2>
            <motion.p 
              className="text-lg opacity text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need to create captivating MMS campaigns
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
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
      
      {/* Promotional MMS Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Amplify Promotions with MMS</h2>
                <p className="text-indigo-100 mb-8">
                  MMS enables businesses to create immersive promotional campaigns with rich media, driving higher engagement and conversions compared to traditional SMS.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Visual Impact</h3>
                    <p className="text-sm text-purple-200">Captivate with images and videos</p>
                  </div>
                  <div className="bg-indigo-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Higher Conversions</h3>
                    <p className="text-sm text-indigo-200">Drive sales with engaging content</p>
                  </div>
                  <div className="bg-purple-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Personalized Messaging</h3>
                    <p className="text-sm text-purple-200">Tailor campaigns with multimedia</p>
                  </div>
                  <div className="bg-indigo-700/50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Real-Time Insights</h3>
                    <p className="text-sm text-indigo-200">Track performance instantly</p>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6">MMS Benefits</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mt-1">
                    <FiImage className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Rich Media Content</h4>
                    <p className="text-slate-600">
                      Engage customers with images, videos, and GIFs for memorable campaigns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mt-1">
                    <TfiText className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Extended Messaging</h4>
                    <p className="text-slate-600">
                      Deliver detailed messages with up to 1600 characters and subject lines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mt-1">
                    <FiBarChart2 className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Enhanced Analytics</h4>
                    <p className="text-slate-600">
                      Gain insights with real-time delivery and engagement reports.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mt-1">
                    <FiCheck className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Reliable Delivery</h4>
                    <p className="text-slate-600">
                      Ensure multimedia messages reach customers quickly and reliably.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industry-Specific MMS Applications
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              How businesses use MMS to connect with customers
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
              How MMS Messaging Works
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Simple steps to create engaging multimedia campaigns
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
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Design Campaign</h3>
              <p className="text-slate-600">
                Create your MMS with images, videos, or audio using our platform.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Add Multimedia</h3>
              <p className="text-slate-600">
                Upload rich media and include up to 1600 characters with a subject line.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Send to Audience</h3>
              <p className="text-slate-600">
                Deliver your MMS to targeted segments or your entire contact list.
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
              <h3 className="text-xl font-bold text-slate-900 mb-3">Analyze Performance</h3>
              <p className="text-slate-600">
                Track engagement with real-time delivery and interaction reports.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Start Engaging with MMS Today
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join businesses leveraging MMS for richer customer connections and growth.
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
              className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started Now
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-purple-800/50 hover:bg-purple-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
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

export default MMSMessagingPage;