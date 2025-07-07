// src/components/Testimonials.jsx
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Retail Solutions Inc.",
      text: "Twincles transformed our customer communication. Response rates increased by 40% after implementing their WhatsApp API.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "HealthFirst Clinics",
      text: "The automated appointment reminders have significantly reduced our no-show rates. Highly recommend Twincles!",
    },
    {
      id: 3,
      name: "Vikram Patel",
      company: "E-Commerce Hub",
      text: "Their bulk SMS service is incredibly reliable and cost-effective. Customer support is always responsive.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-sky-700 max-w-2xl mx-auto">
            Businesses across Hyderabad trust Twincles for their communication needs
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={0.2 + index * 0.1}>
              <motion.div 
                className="bg-sky-50 rounded-xl p-8 border border-sky-100"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-sky-200 w-12 h-12 rounded-full flex items-center justify-center text-sky-800 font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sky-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-sky-700 italic">"{testimonial.text}"</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;