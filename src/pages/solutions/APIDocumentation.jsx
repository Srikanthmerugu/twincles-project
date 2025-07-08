import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiKey, FiAlertTriangle, FiCheckCircle, FiServer, FiPhoneCall, FiUser, FiMessageSquare, FiMail, FiShield, FiLock } from 'react-icons/fi';

const APIDocumentationPage = () => {
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
      icon: <FiCode className="text-xl" />,
      title: "RESTful API",
      description: "Built with REST standards for easy integration and message delivery."
    },
    {
      icon: <FiKey className="text-xl" />,
      title: "Secure Authentication",
      description: "Use access tokens in headers or GET parameters for secure requests."
    },
    {
      icon: <FiServer className="text-xl" />,
      title: "IP Whitelisting",
      description: "Whitelist IP addresses for enhanced security and control."
    },
    {
      icon: <FiAlertTriangle className="text-xl" />,
      title: "Rate Limiting",
      description: "Limited to 1000 requests per minute to ensure compliance."
    }
  ];

  const statusCodes = [
    { code: "200", description: "OK – Everything went as planned." },
    { code: "202", description: "Accepted – Request accepted." },
    { code: "400", description: "Bad Request – Something in your header or request body was malformed." },
    { code: "401", description: "Unauthorized – Necessary credentials were missing or invalid." },
    { code: "403", description: "Forbidden – Valid credentials but no access to the requested resource." },
    { code: "404", description: "Not Found – The resource cannot be found." },
    { code: "429", description: "Too Many Requests – Exceeded API rate limits." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Floating Action Button */}
      {!isFormVisible && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormVisible(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl flex items-center gap-2"
        >
          <FiMail className="text-xl" />
          <span className="hidden sm:inline">Get Help</span>
        </motion.button>
      )}

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
                <h3 className="text-xl font-bold text-gray-800">API Support Request</h3>
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
                      placeholder="Tell us about your API needs..."
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
            Powerful SMS API for Developers
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Integrate our RESTful API to send alerts, OTPs, and notifications with enterprise-grade security
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg shadow-lg transition-all"
              onClick={() => setIsFormVisible(true)}
            >
              Get API Key
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
              <div className="text-3xl font-bold text-blue-700 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">100ms</div>
              <div className="text-sm text-gray-600">Avg. Response</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">256-bit</div>
              <div className="text-sm text-gray-600">Encryption</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
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
              API Documentation Overview
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our RESTful SMS API allows you to send alerts, reminders, notifications, and OTPs with ease
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h3>
                <p className="text-gray-600 mb-6">
                  Use the API endpoint <code className="bg-gray-200 px-2 py-1 rounded font-mono">http://alerts.twinclescpaas.co.in/api/v2/</code> to start sending messages.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-2 rounded-full">
                      <FiKey className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Authentication</h4>
                      <p className="text-gray-600">Include your access token in the Authorization header</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-2 rounded-full">
                      <FiServer className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Endpoints</h4>
                      <p className="text-gray-600">Send SMS, check balance, view history, and more</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white p-2 rounded-full">
                      <FiShield className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Security</h4>
                      <p className="text-gray-600">Enterprise-grade encryption and IP whitelisting</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 p-4 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-300 ml-4">api-demo.js</div>
              </div>
              <div className="p-6 font-mono text-sm">
                {/* <div className="text-blue-400 mb-4">// Send SMS example</div> */}
                <div className="text-purple-400">const</div> <div className="text-gray-300">response =</div> <div className="text-yellow-300">await</div> <div className="text-gray-300">fetch(</div>
                <div className="text-green-400 ml-4">'http://alerts.twinclescpaas.co.in/api/v2/sms'</div><div className="text-gray-300">, </div><div className="text-yellow-300">{`{`}</div>
                {/* <div className="ml-8 text-purple-400">method</div><div className="text-gray-300">: </div><div className="text-green-400">'POST'</div><div className="text-gray-300">,</div> */}
                <div className="ml-8 text-purple-400">headers</div><div className="text-gray-300">: </div><div className="text-yellow-300">{`{`}</div>
                <div className="ml-12 text-green-400">'Authorization'</div><div className="text-gray-300">: </div><div className="text-green-400">'Bearer YOUR_API_KEY'</div><div className="text-gray-300">,</div>
                {/* <div className="ml-12 text-green-400">'Content-Type'</div><div className="text-gray-300">: </div><div className="text-green-400">'application/json'</div> */}
                {/* <div className="ml-8 text-yellow-300">{`}`}</div><div className="text-gray-300">,</div> */}
                {/* <div className="ml-8 text-purple-400">body</div><div className="text-gray-300">: </div><div className="text-blue-400">JSON</div><div className="text-gray-300">.</div><div className="text-yellow-300">stringify</div><div className="text-gray-300">(</div><div className="text-yellow-300">{`{`}</div>
                <div className="ml-12 text-green-400">sender</div><div className="text-gray-300">: </div><div className="text-green-400">'TWNCLS'</div><div className="text-gray-300">,</div>
                <div className="ml-12 text-green-400">route</div><div className="text-gray-300">: </div><div className="text-green-400">'4'</div><div className="text-gray-300">,</div>
                <div className="ml-12 text-green-400">country</div><div className="text-gray-300">: </div><div className="text-green-400">'91'</div><div className="text-gray-300">,</div>
                <div className="ml-12 text-green-400">sms</div><div className="text-gray-300">: [</div><div className="text-yellow-300">{`{`}</div>
                <div className="ml-16 text-green-400">message</div><div className="text-gray-300">: </div><div className="text-green-400">'Your OTP is 1234'</div><div className="text-gray-300">,</div>
                <div className="ml-16 text-green-400">to</div><div className="text-gray-300">: [</div><div className="text-green-400">'919999999999'</div><div className="text-gray-300">]</div>
                <div className="ml-12 text-yellow-300">{`}`}</div><div className="text-gray-300">]</div>
                <div className="ml-8 text-yellow-300">{`}`}</div><div className="text-gray-300">)</div> */}
                <div className="ml-4 text-yellow-300">{`}`}</div><div className="text-gray-300">);</div>
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
              Key Features
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need to integrate SMS capabilities into your application
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
      
      {/* Authentication Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Authentication & Security
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Secure your API requests with industry-standard authentication
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure API Access</h3>
              <p className="text-gray-600 mb-6">
                All API requests must be authenticated using your API key. Include it in the Authorization header or as a query parameter.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <FiLock className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Authorization Header</h4>
                    <p className="text-gray-600">Recommended method for maximum security</p>
                    <pre className="bg-gray-900 text-blue-300 p-3 rounded mt-2 text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </pre>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    <FiKey className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Query Parameter</h4>
                    <p className="text-gray-600">Alternative method for simple integrations</p>
                    <pre className="bg-gray-900 text-blue-300 p-3 rounded mt-2 text-sm">
                      https://api.example.com/sms?api_key=YOUR_API_KEY
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Security Best Practices</h3>
              <p className="text-blue-100 mb-6">
                Follow these guidelines to ensure your API integration remains secure:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Protect Your API Key</h4>
                    <p className="text-blue-200">Never expose your API key in client-side code</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Use IP Whitelisting</h4>
                    <p className="text-blue-200">Restrict API access to your server IPs only</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Rotate Keys Regularly</h4>
                    <p className="text-blue-200">Change your API keys every 90 days</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white p-2 rounded-full">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Enable HTTPS</h4>
                    <p className="text-blue-200">Always use encrypted connections</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Status Codes Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Response Codes & Rate Limits
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Understand API responses and usage limits
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">HTTP Status Codes</h3>
              <div className="space-y-3">
                {statusCodes.map((code, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-mono text-sm font-bold">{code.code}</span>
                    <span className="text-gray-600 flex-1">{code.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Rate Limits</h3>
              <p className="text-blue-100 mb-6">
                To ensure fair usage and system stability, we enforce the following rate limits:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-800/50 rounded-lg">
                  <div>
                    <h4 className="font-bold">Standard Plan</h4>
                    <p className="text-blue-200 text-sm">Default for all accounts</p>
                  </div>
                  <div className="text-xl font-bold">1,000 req/min</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-800/50 rounded-lg">
                  <div>
                    <h4 className="font-bold">Business Plan</h4>
                    <p className="text-blue-200 text-sm">Available on request</p>
                  </div>
                  <div className="text-xl font-bold">5,000 req/min</div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-800/50 rounded-lg">
                  <div>
                    <h4 className="font-bold">Enterprise Plan</h4>
                    <p className="text-blue-200 text-sm">Custom solutions</p>
                  </div>
                  <div className="text-xl font-bold">10,000+ req/min</div>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-800/50 p-4 rounded-lg">
                <p className="text-blue-200">
                  Exceeding these limits will result in a <span className="font-bold">429 Too Many Requests</span> response. 
                  Contact us to discuss higher limits.
                </p>
              </div>
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
            Start Integrating Today
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of developers using our API to power their communication workflows
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
              onClick={() => setIsFormVisible(true)}
            >
              Get API Key Now
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

export default APIDocumentationPage;