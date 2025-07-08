import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiMail, FiShield, FiDatabase, FiBarChart2, FiLayers, FiClock, FiServer } from 'react-icons/fi';

const OTPServices = () => {
  const emailFeatures = [
    "Programmable email platform for business promotions",
    "30% higher lead conversion ratio",
    "Send larger text, images, and clips with ease",
    "Instant delivery with real-time analytics",
    "Track opens, clicks, and spam reports",
    "Send thousands of emails in few clicks"
  ];

  const otpFeatures = [
    "99.9% delivery rate",
    "Authentication within seconds",
    "Industry-agnostic solutions",
    "Secure and reliable delivery",
    "24/7 support",
    "Scalable infrastructure"
  ];

  const transactionalFeatures = [
    { icon: <FiServer className="text-xl" />, title: "Robust APIs", desc: "Seamless integration with your systems" },
    { icon: <FiLayers className="text-xl" />, title: "Bulk Processing", desc: "Handle high-volume communications" },
    { icon: <FiBarChart2 className="text-xl" />, title: "Detailed Analytics", desc: "Monitor campaign performance" },
    { icon: <FiClock className="text-xl" />, title: "Instant Delivery", desc: "Time-sensitive communications" }
  ];

  return (
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-green-900 to-indigo-400 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold drop-shadow-2xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Email & OTP Services
          </motion.h2>
          <motion.p 
            className="text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Complete communication solutions for your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Email & OTP Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email Services Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <FiMail className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Email Services</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Use our programmable email platform for business promotions, conversational messages, notifications, and OTP delivery. The lead conversion ratio is measured to be about 30% higher than normal.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {emailFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2 bg-green-50/50 p-3 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* OTP Services Card */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <FiShield className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">OTP Service Provider in India</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Our platform is trusted as the most enriched, authentic platform to deliver OTP SMS for any industry requirement, authenticating users within fractions of a second.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                    <div className="text-sm text-slate-600">Delivery Rate</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">&lt;2s</div>
                    <div className="text-sm text-slate-600">Delivery Time</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {otpFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <FiCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Transactional Services */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white/20 p-3 rounded-xl">
                  <FiDatabase className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">Transactional Email Services</h3>
              </div>
              
              <p className="text-green-100 mb-6">
                Bulk email solutions for internal communications between different departments or branches using our robust APIs. In adherence with Google standards for high-volume email delivery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {transactionalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{feature.title}</h4>
                        <p className="text-green-100 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="bg-white/20 p-4 rounded-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold mb-2">Key Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <FiCheck className="text-xs" />
                    </div>
                    <span>SPF/DKIM/DMARC authentication for deliverability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <FiCheck className="text-xs" />
                    </div>
                    <span>Customizable templates for consistent branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-white/20 p-1 rounded-full mt-1">
                      <FiCheck className="text-xs" />
                    </div>
                    <span>Detailed analytics for campaign optimization</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OTPServices;