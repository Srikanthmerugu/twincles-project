// src/components/Solutions.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      title: "API Documentation",
      description: "Comprehensive guides to integrate our communication APIs",
      icon: "📚"
    },
    {
      title: "DLT Registration",
      description: "Assistance with regulatory compliance for messaging services",
      icon: "📝"
    },
    {
      title: "Use Cases",
      description: "Industry-specific solutions for SMS & WhatsApp",
      icon: "💡"
    },
    {
      title: "Our Customers",
      description: "Success stories from businesses we've helped",
      icon: "👥"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-sky-50 to-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-50 to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Tailored Solutions for Your Business Needs
            </motion.h2>
            <motion.p 
              className="text-lg text-slate-600 mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              We provide more than just services - we deliver comprehensive solutions designed to address your specific communication challenges.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-slate-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h3>
                  <p className="text-slate-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Twincles?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>99.9% Uptime Guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Enterprise-grade Security</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 p-1.5 rounded-full mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Competitive Pricing</span>
                </li>
              </ul>
              
              <div className="bg-white/10 p-4 rounded-xl">
                <p className="text-sm mb-2">Ready to get started?</p>
                <a 
                  href="#contact" 
                  className="bg-white text-sky-600 font-semibold py-2.5 px-6 rounded-lg inline-flex items-center gap-2 hover:bg-sky-50 transition-colors"
                >
                  Contact Sales
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-400 rounded-full opacity-20 z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-sky-400 rounded-full opacity-20 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;