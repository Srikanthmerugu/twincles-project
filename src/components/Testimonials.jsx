// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Retail Solutions Inc.",
      text: "Twincles transformed our customer communication. Response rates increased by 40% after implementing their WhatsApp API.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "HealthFirst Clinics",
      text: "The automated appointment reminders have significantly reduced our no-show rates. Highly recommend Twincles!",
      rating: 5
    },
    {
      id: 3,
      name: "Vikram Patel",
      company: "E-Commerce Hub",
      text: "Their bulk SMS service is incredibly reliable and cost-effective. Customer support is always responsive.",
      rating: 4
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-800 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trusted by Enterprises Across Hyderabad</h2>
          <div className="h-1 w-16 bg-amber-400 mx-auto my-6"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Join 500+ businesses that rely on Twincles for mission-critical communication
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-amber-400/30 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="bg-amber-400/20 w-12 h-12 rounded-full flex items-center justify-center text-amber-400 font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-200 text-sm">{testimonial.company}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 italic">"{testimonial.text}"</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators at bottom */}
        <motion.div
          className="flex flex-col items-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {["Fortune 500", "Enterprise Clients", "99.9% Uptime", "24/7 Support"].map((item, i) => (
              <div key={i} className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-blue-100 text-sm">
                {item}
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-sm">Trusted by leading brands across industries</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;