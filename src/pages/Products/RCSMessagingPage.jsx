// src/components/RCSMessagingPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import rcsLogo from '../../assets/RCS.png';
import { FiMessageSquare, FiImage, FiVideo, FiCheckCircle, FiUsers, FiGlobe, FiArrowRight } from 'react-icons/fi';

const RCSMessagingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <FiMessageSquare className="text-xl" />,
      title: "Rich Media Support",
      description: "Send images, videos, carousels, and GIFs with no compression or size limitations."
    },
    {
      icon: <FiCheckCircle className="text-xl" />,
      title: "Branded Sender ID",
      description: "Enhance trust with verified business identity and logo"
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Interactive Buttons",
      description: "Drive engagement with suggested replies and call-to-actions"
    },
    {
      icon: <FiImage className="text-xl" />,
      title: "Real-Time Analytics",
      description: "Track reads, clicks, and delivery status for every message"
    },
    {
      icon: <FiGlobe className="text-xl" />,
      title: "Two-Way Messaging",
      description: "Engage customers with conversational experiences"
    },
    {
      icon: <FiVideo className="text-xl" />,
      title: "Chatbot Integration",
      description: "Automate responses for better support and engagement"
    }
  ];

  const useCases = [
    {
      title: "Retail",
      description: "Send rich product catalogs, promotions, and personalized recommendations"
    },
    {
      title: "Banking",
      description: "Deliver secure OTPs, transaction alerts, and financial documents"
    },
    {
      title: "Healthcare",
      description: "Share appointment reminders, test results, and health tips"
    },
    {
      title: "Travel",
      description: "Send itineraries, boarding passes, and destination guides"
    },
    {
      title: "Education",
      description: "Deliver course updates, event invitations, and learning materials"
    },
    {
      title: "Customer Support",
      description: "Provide visual guides, video tutorials, and interactive help"
    }
  ];

  const benefits = [
    {
      title: "Higher Engagement",
      description: "Better open and response rates than SMS or email"
    },
    {
      title: "Improved CX",
      description: "Dynamic, personalized content in native messaging apps"
    },
    {
      title: "Increased Conversions",
      description: "Interactive CTAs drive more actions from customers"
    },
    {
      title: "Brand Trust",
      description: "Verified and secure messaging builds credibility"
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
                Next-Generation Business Messaging
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                RCS Messaging Services
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-xl">
                Revolutionize your customer communication with Rich Communication Services (RCS)—the next generation of business messaging that goes beyond traditional SMS.
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
                      <div className="text-5xl ">
                        <img src={rcsLogo} alt="RCS Business Messaging" className="w-30  rounded-2xl mx-auto" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">RCS Business Messaging</h3>
                      <p className="text-gray-600">Interactive, app-free customer communication</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-blue-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">10x</div>
                      <div className="text-sm text-blue-200">Higher Engagement</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">98%</div>
                      <div className="text-sm text-indigo-200">Open Rate</div>
                    </div>
                    <div className="bg-blue-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-200">Support</div>
                    </div>
                    <div className="bg-indigo-700 p-4 rounded-lg">
                      <div className="text-2xl font-bold mb-1">2s</div>
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
                What is RCS?
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                RCS (Rich Communication Services) is a modern messaging protocol that allows businesses to send interactive, branded, and media-rich messages directly to customers via their native messaging apps—no downloads required.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Combining the universal reach of SMS with rich, interactive features similar to modern chat apps, RCS transforms basic texting into engaging conversations that drive results.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-700 font-medium">
                  "RCS bridges the gap between traditional SMS and modern messaging apps with global carrier support."
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
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">SMS Upgrade</h3>
                <p>The natural evolution of text messaging with rich features.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🌎</div>
                <h3 className="text-xl font-bold mb-3">Global Standard</h3>
                <p>Supported by carriers worldwide as the future of messaging.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Premium Experience</h3>
                <p>Chat-like interface with rich media and interactivity.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl p-6 text-white">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3">Verified Identity</h3>
                <p>Business verification builds trust with customers.</p>
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
              viewport={{ duration: 0.5 }}
            >
              Key RCS Messaging Features
            </motion.h2>
            <motion.p 
              className="text-lg opacity text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need for modern, interactive business messaging
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Benefits for Your Business
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Why leading brands are adopting RCS messaging
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
              Industry Applications
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              How different industries use RCS to transform customer communication
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <FiMessageSquare className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-slate-600 text-sm">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Reasons Section */}
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
                <h2 className="text-3xl font-bold mb-6">Top Reasons to Choose RCS</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Richer Conversations</h4>
                      <p className="text-blue-100 text-sm">
                        Share images, videos, carousels, and interactive buttons.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Higher Engagement</h4>
                      <p className="text-blue-100 text-sm">
                        Achieve better open and response rates than SMS or email.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Brand Visibility</h4>
                      <p className="text-blue-100 text-sm">
                        Use your verified business name, logo, and colors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Real-Time Interaction</h4>
                      <p className="text-blue-100 text-sm">
                        Enable quick replies and two-way communication.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Better Tracking</h4>
                      <p className="text-blue-100 text-sm">
                        Know when messages are delivered, read, and clicked.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                      <FiCheckCircle className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">App-Free Experience</h4>
                      <p className="text-blue-100 text-sm">
                        Customers receive messages directly in their native SMS app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How It Works</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Register Your Business</h4>
                    <p className="text-slate-600">
                      Verify your business profile with logo and branding for customer trust.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Design Messages</h4>
                    <p className="text-slate-600">
                      Create interactive messages with rich media, buttons, and carousels.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Send to Customers</h4>
                    <p className="text-slate-600">
                      Deliver rich messages through global carrier networks with SMS fallback.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Engage & Convert</h4>
                    <p className="text-slate-600">
                      Track interactions and drive conversions with rich two-way conversations.
                    </p>
                  </div>
                </div>
              </div>
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
            Upgrade to RCS Messaging Today
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join the messaging revolution with RCS - the future of business communication.
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
              Get Started Now
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RCSMessagingPage;