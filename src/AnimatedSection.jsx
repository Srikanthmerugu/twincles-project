// src/components/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = "", delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;