// src/components/Features.jsx
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { FiCheckCircle, FiSmartphone, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Reliable Delivery",
      icon: <FiCheckCircle size={32} className="text-sky-400" />,
      description: "99.9% message delivery rate with real-time tracking and reporting",
    },
    {
      id: 2,
      title: "Easy Integration",
      icon: <FiSmartphone size={32} className="text-sky-400" />,
      description: "Seamless API integration with your existing CRM and business systems",
    },
    {
      id: 3,
      title: "Dedicated Support",
      icon: <FiUsers size={32} className="text-sky-400" />,
      description: "24/7 customer support to ensure your communication never stops",
    },
  ];

  return (
    <section className="py-16 bg-sky-950 text-white" id="solutions">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Twincles?</h2>
          <p className="text-sky-200 max-w-2xl mx-auto">
            We provide more than just communication tools - we deliver results
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.id} delay={0.2 + index * 0.1}>
              <motion.div 
                className="bg-sky-900 rounded-xl p-8 text-center"
                whileHover={{ y: -10, backgroundColor: "rgb(7 89 133)" }}
              >
                <div className="bg-sky-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sky-200">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;