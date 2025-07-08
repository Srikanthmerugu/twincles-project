import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiFileText, FiPhoneCall, FiLock, FiCheckCircle, FiGlobe, FiUser, FiMessageSquare, FiMail } from 'react-icons/fi';

const DLTRegistrationPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will contact you shortly.');
    setIsFormVisible(false);
    setFormData({ name: '', email: '', phone: '', business: '', message: '' });
  };

  const features = [
    {
      icon: <FiShield className="text-xl" />,
      title: "Spam Prevention",
      description: "Protect customers from unsolicited messages with TRAI-compliant registration."
    },
    {
      icon: <FiFileText className="text-xl" />,
      title: "Template Registration",
      description: "Register message templates to ensure transparency and compliance."
    },
    {
      icon: <FiPhoneCall className="text-xl" />,
      title: "Voice & SMS Support",
      description: "Manage both bulk SMS and voice calls through a single DLT platform."
    },
    {
      icon: <FiLock className="text-xl" />,
      title: "Secure Communication",
      description: "Track message origins to prevent phishing and unauthorized communications."
    }
  ];

  const useCases = [
    {
      icon: '🛒',
      title: "E-Commerce",
      description: "Send compliant transactional SMS like OTPs and order updates."
    },
    {
      icon: '🏦',
      title: "Banking & Finance",
      description: "Ensure secure, TRAI-compliant alerts for transactions and promotions."
    },
    {
      icon: '🏥',
      title: "Healthcare",
      description: "Deliver appointment reminders and health updates with registered templates."
    },
    {
      icon: '📢',
      title: "Marketing Agencies",
      description: "Run promotional SMS campaigns while adhering to DLT regulations."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Choose Operator",
      description: "Select a telecom operator's DLT platform (e.g., Airtel, Jio)."
    },
    {
      number: 2,
      title: "Submit Details",
      description: "Provide business details and consent templates."
    },
    {
      number: 3,
      title: "Register Templates",
      description: "Submit message templates and sender IDs for approval."
    },
    {
      number: 4,
      title: "Launch Campaigns",
      description: "Start sending compliant bulk SMS and voice calls."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Floating Action Button */}
      {/* {!isFormVisible && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormVisible(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl flex items-center gap-2"
        >
          <FiMail className="text-xl" />
          <span className="hidden sm:inline">Get Help</span>
        </motion.button>
      )} */}

      {/* Contact Form Modal */}
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Request Assistance</h3>
                <button 
                  onClick={() => setIsFormVisible(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <FiPhoneCall className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E-commerce, Banking, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your DLT needs..."
                    ></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* Hero Section with Image */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-r from-blue-900 to-indigo-800 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                TRAI-Compliant DLT Solutions
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Secure Your Communications with DLT Registration
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                Ensure compliance with TRAI regulations by registering on the DLT platform for secure, transparent bulk SMS and voice campaigns.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
                //   onClick={() => setIsFormVisible(true)}
                    onClick={() => window.location.href = '/contact'}
                >
                  Start Registration
                </motion.button>
                <motion.a
                  href="tel:+919391911699"
                  className="bg-blue-800 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhoneCall className="text-xl" />
                  +91 9391911699
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative mt-15 w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-full h-full bg-blue-600 rounded-2xl z-0"></div>
                <div className="relative z-10 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="text-sm font-medium">DLT Registration Portal</div>
                      <div className="w-6"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-center mb-6">
                      <div className="bg-blue-100 p-4 rounded-full">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-full">
                          <FiShield className="text-4xl text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-500 text-white p-2 rounded-lg">
                            <FiUser className="text-xl" />
                          </div>
                          <div>
                            <div className="text-xs text-blue-500">Business Registration</div>
                            <div className="font-medium text-gray-400">Complete in minutes</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-500 text-white p-2 rounded-lg">
                            <FiCheckCircle className="text-xl" />
                          </div>
                          <div>
                            <div className="text-xs text-green-500">Template Approval</div>
                            <div className="font-medium text-gray-400">24-48 hour turnaround</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-4 text-center font-medium">
                      Get Started Today
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
              <div className="text-3xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-sm text-gray-600">TRAI Compliance</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">99%</div>
              <div className="text-sm text-gray-600">Spam Reduction</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
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
      
      {/* Overview Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Streamline Compliance with DLT Registration
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              DLT (Distributed Ledger Technology) registration ensures secure and transparent bulk communications
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why DLT Registration is Essential</h3>
                  <p className="text-gray-600 mb-6">
                    TRAI mandates DLT registration to combat spam and phishing by verifying sender identities and message content. This technology creates a transparent ledger of all communications.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white p-2 rounded-full">
                        <FiCheckCircle className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Regulatory Compliance</h4>
                        <p className="text-gray-600">Adhere to TRAI guidelines to avoid penalties</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white p-2 rounded-full">
                        <FiShield className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Enhanced Security</h4>
                        <p className="text-gray-600">Prevent unauthorized communications and phishing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white p-2 rounded-full">
                        <FiGlobe className="text-xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Customer Trust</h4>
                        <p className="text-gray-600">Build confidence with verified sender IDs</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg transform perspective-1000 hover:rotateY-5">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">Compliance</h3>
                <p>Meet TRAI regulations with ease.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg transform perspective-1000 hover:rotateY-5">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold mb-3">Security</h3>
                <p>Prevent spam and phishing attacks.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-6 text-white shadow-lg transform perspective-1000 hover:rotateY-5">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p>Track message origins for accountability.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-400 to-blue-500 rounded-2xl p-6 text-white shadow-lg transform perspective-1000 hover:rotateY-5">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p>Fast setup for bulk messaging.</p>
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
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Features of DLT Registration
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Ensure compliance and security for your bulk messaging campaigns
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
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
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Timeline */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Simple 4-Step Registration Process
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Get your business compliant with TRAI regulations quickly
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-20' : 'lg:pl-20 lg:mt-20'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg relative z-10">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 w-1 h-12 bg-blue-200 transform -translate-x-1/2 lg:hidden"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Industry-Specific Applications
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              How businesses use DLT registration for compliant communications
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform perspective-1000 hover:rotateY-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
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
            Ensure Compliance with DLT Today
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join businesses delivering secure, TRAI-compliant communications with DLT registration.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
            //   onClick={() => setIsFormVisible(true)}
                                        onClick={() => window.location.href = '/contact'}

            >
              Get Started Now
            </motion.button>
            <motion.a
              href="tel:+919391911699"
              className="bg-blue-800 hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhoneCall className="text-xl" />
              +91 9391911699
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

export default DLTRegistrationPage;