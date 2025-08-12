import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiSmartphone, FiUsers, FiCheckCircle, FiTrendingUp, FiBook, FiShield, FiHeart, FiPhoneCall } from 'react-icons/fi';

const UseCasesPage = () => {
  const smsUsers = [
    {
      icon: <FiBook className="text-3xl text-blue-600" />,
      title: "ICFAI University",
      description: "Engages with staff, students, and parents using bulk SMS services. Sends promotional SMS during admissions, exam timetables, attendance details, and holiday lists.",
      results: "Filled all seats for courses through targeted campaigns"
    },
    {
      icon: <FiTrendingUp className="text-3xl text-green-600" />,
      title: "Godrej",
      description: "Uses bulk SMS for promotions, product offers, and service notifications. Automates invoice details, payment confirmations, and delivery updates.",
      results: "Increased profits with automated service SMS allowing focus on growth"
    },
    {
      icon: <FiShield className="text-3xl text-purple-600" />,
      title: "DCCB Bank Ltd",
      description: "Sends auto-generated notifications for transactions, credit card approvals, loan status, and debit card deliveries via API.",
      results: "Loyal user for years with improved customer communication"
    },
    {
      icon: <FiHeart className="text-3xl text-orange-500" />,
      title: "PRK Hospitals",
      description: "Uses SMS for appointment bookings, prescriptions, billing details, and staff communication. Reduces waiting time and hospital crowds.",
      results: "Efficient communication platform saving time for doctors and patients"
    },
    {
      icon: <FiUsers className="text-3xl text-teal-500" />,
      title: "BASF",
      description: "Sends service SMS to farmers in local languages with chemical usage guidance and farming advice.",
      results: "Economically affordable solution benefiting farmers and the public"
    }
  ];

  const whatsappUsers = [
    {
      icon: <FiHeart className="text-3xl text-red-500" />,
      title: "Ramesh Hospitals",
      description: "Uses WhatsApp API to communicate with patients, staff, and departments. Sends appointment details, medical reports, and prescriptions.",
      results: "Incredible output with user-friendly interface and unsubscribe option"
    },
    {
      icon: <FiCheckCircle className="text-3xl text-green-500" />,
      title: "Lucid Diagnostics",
      description: "Sends test reports and appointment confirmations via WhatsApp Business. Patients download reports from home without visiting the center.",
      results: "Made diagnostics easier and more authentic for regular patients"
    },
    {
      icon: <FiUsers className="text-3xl text-blue-500" />,
      title: "GYD Diagnostics",
      description: "Uses WhatsApp for test reports, appointment confirmations, and bulk campaigns to targeted audiences.",
      results: "Great communication source serving more users effectively"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24 px-4">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-indigo-700/30"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Real-World Success Stories
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how leading organizations leverage SMS and WhatsApp to transform communication
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={() => window.location.href = '/contact'}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
        
        {/* 3D Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">95%</div>
              <div className="text-sm text-gray-600">Open Rate</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">10x</div>
              <div className="text-sm text-gray-600">Higher Engagement</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">98%</div>
              <div className="text-sm text-gray-600">Delivery Success</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">5m</div>
              <div className="text-sm text-gray-600">Setup Time</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* SMS Users Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              SMS Communication Success Stories
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Leading organizations using SMS for engagement, promotions, and services
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smsUsers.map((user, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all transform perspective-1000 hover:rotateY-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {user.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{user.title}</h3>
                  <p className="text-gray-600 mb-4">{user.description}</p>
                  <div className="bg-sky-200 border-b-2 border-b-sky-900 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-1">Results:</h4>
                    <p className="text-gray-950">{user.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* WhatsApp Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              WhatsApp API Success Stories
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Healthcare organizations transforming patient communication
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatsappUsers.map((user, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all transform perspective-1000 hover:rotateY-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {user.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{user.title}</h3>
                  <p className="text-gray-600 mb-4">{user.description}</p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-1">Results:</h4>
                    <p className="text-green-600">{user.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Benefits of Messaging Solutions
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FiMessageSquare className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Delivery</h3>
              <p className="text-gray-600">Reach your audience instantly with 95% open rates within 3 minutes</p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <FiSmartphone className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High Engagement</h3>
              <p className="text-gray-600">10x higher engagement compared to email with rich media support</p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Reach</h3>
              <p className="text-gray-600">Access 5B+ mobile users globally with SMS and WhatsApp</p>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <FiCheckCircle className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Identity</h3>
              <p className="text-gray-600">Official business verification builds trust with your audience</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transform Your Communication Today
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of successful organizations using our messaging solutions
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

              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            >
              Get Started Now
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-blue-800 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhoneCall /> +91 9391911699
            </motion.a>
          </motion.div>
        </div>
        
        {/* 3D Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-20 w-32 h-32 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default UseCasesPage;