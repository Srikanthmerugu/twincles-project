import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiShield, FiTrendingUp, FiPhone, FiEyeOff, FiUsers } from 'react-icons/fi';

const TrueCallerBusiness = () => {
  const features = [
    {
      icon: <FiShield className="text-xl" />,
      title: "Verified Business Caller ID",
      description: "Establish trust with customers by displaying your verified business name"
    },
    {
      icon: <FiTrendingUp className="text-xl" />,
      title: "Increased Answer Rates",
      description: "Verified calls are 3x more likely to be answered"
    },
    {
      icon: <FiEyeOff className="text-xl" />,
      title: "Reduced Spam Labeling",
      description: "Prevent your legitimate calls from being marked as spam"
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Enhanced Engagement",
      description: "Improve customer communication and service outcomes"
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Brand Recognition",
      description: "Reinforce your brand identity with every call"
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "Fraud Prevention",
      description: "Protect against identity theft and scamming attempts"
    }
  ];

  const benefits = [
    {
      title: "Increased Trust",
      description: "Customers are more likely to answer when they see your verified business name",
      stat: "3x"
    },
    {
      title: "Reduced Spam Calls",
      description: "Distinguish your legitimate calls from potential spam",
      stat: "80%"
    },
    {
      title: "Better Engagement",
      description: "Verified calls lead to improved customer interactions",
      stat: "2.5x"
    },
    {
      title: "Brand Protection",
      description: "Maintain control over how your business appears on caller ID",
      stat: "100%"
    }
  ];

  return (
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold  text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Truecaller for Business
          </motion.h2>
          <motion.p 
            className="text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Verified Business Caller ID that builds trust and optimizes customer connections
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
              Manage Brand Reputation with Verified Caller ID
            </h3>
            <p className="text-white mb-6">
              Transform your business calling experience by ensuring customers see your verified identity. 
              Prevent fraud, build trust, and increase answer rates with Truecaller's business verification.
            </p>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h4 className="font-bold text-blue-700 mb-3">Key Advantages:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Eliminate "Unknown Caller" labels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Protect against spoofing and scams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Enhance professional appearance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">
                    <FiCheck className="text-sm" />
                  </div>
                  <span className="text-slate-700">Gain actionable call analytics</span>
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
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <FiPhone className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Verified Call Performance</h3>
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
                <h4 className="font-bold mb-2">How It Works</h4>
                <ol className="space-y-3 list-decimal list-inside text-blue-100">
                  <li>Register your business numbers</li>
                  <li>Complete verification process</li>
                  <li>Display your business name on outgoing calls</li>
                  <li>Monitor performance through analytics</li>
                </ol>
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
            Business Caller ID Features
          </motion.h3>
          <motion.p 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions to enhance your business calling experience
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
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Verify Your Business Calls?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses building trust through verified caller identification
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
          >
            Get Verified Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrueCallerBusiness;