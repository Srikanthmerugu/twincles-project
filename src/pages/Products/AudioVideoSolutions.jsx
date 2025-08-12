import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiVideo, FiMic, FiShare2, FiUsers, FiLock, FiMonitor } from 'react-icons/fi';

const AudioVideoSolutions = () => {
  const features = [
    {
      icon: <FiVideo className="text-xl" />,
      title: "HD Video Quality",
      description: "Lifelike meeting experience with crystal clear video"
    },
    {
      icon: <FiMic className="text-xl" />,
      title: "Clear Audio",
      description: "High-definition audio with noise cancellation"
    },
    {
      icon: <FiShare2 className="text-xl" />,
      title: "Screen Sharing",
      description: "Real-time collaboration with screen and file sharing"
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Multi-Participant",
      description: "Host small meetings or large webinars"
    },
    {
      icon: <FiLock className="text-xl" />,
      title: "Secure & Encrypted",
      description: "Enterprise-grade security for privacy protection"
    },
    {
      icon: <FiMonitor className="text-xl" />,
      title: "Cross-Device",
      description: "Works on mobile, desktop and browser"
    }
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "Reduce travel expenses with virtual meetings",
      stat: "60%"
    },
    {
      title: "Productivity",
      description: "Faster decision-making with face-to-face discussions",
      stat: "3x"
    },
    {
      title: "Collaboration",
      description: "Real-time document and screen sharing",
      stat: "90%"
    },
    {
      title: "Flexibility",
      description: "Connect from anywhere on any device",
      stat: "24/7"
    }
  ];

  return (
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Audio & Video Conferencing Solutions
          </motion.h2>
          <motion.p 
            className="text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Connect, collaborate and communicate seamlessly with high-quality conferencing
          </motion.p>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              What is Audio & Video Conferencing?
            </h3>
            <p className="text-white mb-6">
              Audio and video conferencing enables real-time communication and collaboration between people in different locations using high-quality voice and video over the internet. It's ideal for virtual meetings, webinars, remote support, interviews, and team collaboration.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-blue-700 mb-3">Why Use Conferencing Solutions?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Connect teams and clients remotely without travel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Enhance productivity through seamless communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Reduce costs and save time with virtual collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Ensure business continuity in any situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Improve decision-making with face-to-face discussions</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <FiVideo className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Conference Performance</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold mb-1">{benefit.stat}</div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-blue-100 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Ideal For:</h4>
                <div className="grid grid-cols-2 gap-2 text-blue-100">
                  <div>• Corporates</div>
                  <div>• Education</div>
                  <div>• Healthcare</div>
                  <div>• Sales Teams</div>
                  <div>• Customer Support</div>
                  <div>• Government</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h3 
            className="text-2xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Key Benefits
          </motion.h3>
          <motion.p 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions for seamless virtual collaboration
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-200 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-blue-800 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Virtual Collaboration?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of organizations transforming their communication with our conferencing solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AudioVideoSolutions;