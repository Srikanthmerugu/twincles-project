// src/components/BulkSMSPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BulkSMSPage = () => {
  const services = [
    {
      title: "Bulk SMS Service Provider",
      description: "Mark a difference to your Business through our Normal and Customized SMS messaging platforms and two-way communication services. Send Instant OTPs, Bulk SMS campaigns, Automated SMS, Reminder SMS with Integrated APIs and web interface.",
      icon: "📱",
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "Custom Sender ID/Header",
      description: "Custom Sender ID/Header ID is the Brand name that is reflected on recipient mobile once they receive a Text Message. Header ID can be a 6 character Brand/Firm name or a 6 digit number. Approved by operators as per TRAI guidelines.",
      icon: "🏷️",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Dynamic APIs",
      description: "Our flexible and powerful API works with almost any software application and major ERP solutions like SAP and Oracle APPS. Provides an easy way to integrate with web applications and promote auto-generation of text SMS.",
      icon: "🔌",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Dynamic Delivery Reports",
      description: "Instant dynamic delivery reports accessible for each SMS campaign. Reports can be downloaded into Excel for analysis. Available to all users irrespective of the tool used in delivering the SMS.",
      icon: "📊",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "OTP SMS",
      description: "Send one-time passwords in less than 10 seconds for verification, security checks, and account registration. Supports generating 100K OTP SMSs with 100% authenticity, speed and accuracy.",
      icon: "🔑",
      color: "from-red-500 to-rose-600"
    },
    {
      title: "Premium SMS Gateway",
      description: "Our Premium SMS Gateway helps in sending SMSs instantly across the globe through multiple networks without any hassle.",
      icon: "🌐",
      color: "from-violet-500 to-fuchsia-600"
    },
    {
      title: "Group Messaging",
      description: "Create unlimited groups and deliver appropriate SMS without confusion. Import and export contacts as required for efficient communication.",
      icon: "👥",
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Unicode SMS",
      description: "Send SMSs in your regional languages for better communication with diverse audiences.",
      icon: "🈯",
      color: "from-cyan-500 to-teal-600"
    },
    {
      title: "Flash SMS",
      description: "Send text SMS as FLASH messages that appear as notifications and disappear without saving to the inbox.",
      icon: "⚡",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Customized/Personalized SMS",
      description: "Send SMS with personalized names and relevant information to engage customers better and keep them connected.",
      icon: "🎯",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Scheduling",
      description: "Schedule your SMS upfront with ease and securely so no events are missed.",
      icon: "⏰",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Bulk SMS Service",
      description: "Automate sending and receiving SMS from any website, CRM, or application through application programming interface.",
      icon: "🤖",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const industrySolutions = [
    {
      title: "Bulk SMS for Healthcare",
      description: "Send appointment updates, medical reports, and treatment information to patients. Build patient confidence through timely communication.",
      icon: "🏥",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Bulk SMS for Logistics",
      description: "Manage consignment tracking, invoices, and delivery schedules efficiently. Send maps to aid drivers with SMS attachments and short links.",
      icon: "🚚",
      color: "bg-amber-100 text-amber-600"
    },
    {
      title: "Service SMS",
      description: "Keep clients engaged with auto-generated responses for registrations, credentials, and updates. Used by schools for holiday lists, meetings, and reports.",
      icon: "💼",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Your Business Communication with Our Bulk SMS Solutions
              </h1>
              <p className="text-xl text-sky-100 mb-8 max-w-xl">
                Reach customers instantly with our powerful SMS platform. Send OTPs, campaigns, reminders, and more with 99.9% delivery rate.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => window.location.href = '/contact'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-sky-700 hover:bg-sky-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                >
                  Start Free Trial
                </motion.button>
                <motion.a
                  href="tel:+919391911699"
                  className="bg-sky-800/50 hover:bg-sky-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
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
                  <div className="mb-6 text-6xl">📲</div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Instant Delivery</h3>
                    <p className="text-sky-100">Messages delivered in seconds across 190+ countries</p>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {["99.9%", "10s", "100K+"].map((stat, index) => (
                      <div key={index} className="bg-sky-800/50 p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold">{stat}</div>
                        <div className="text-sm mt-1 text-sky-200">
                          {index === 0 ? "Delivery Rate" : index === 1 ? "Delivery Time" : "Messages/Day"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-400 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Comprehensive SMS Solutions
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need to power your business communication
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Solutions */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industry-Specific Solutions
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Tailored SMS solutions for your business sector
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className={`${solution.color} w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600">{solution.description}</p>
                </div>
                <div className="px-6 py-4 bg-slate-50">
                  <button className="text-sky-600 font-medium flex items-center gap-2 group">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
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
            className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses that trust our SMS solutions for their communication needs.
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
              className="bg-white text-sky-700 hover:bg-sky-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started Now
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-sky-800/50 hover:bg-sky-800 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
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

export default BulkSMSPage;