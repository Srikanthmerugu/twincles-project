// src/components/CTA.jsx
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-black to-sky-950 text-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Communication?</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses in Hyderabad using Twincles for their telecommunication needs
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
                                        onClick={() => window.location.href = '/contact'}

              className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;