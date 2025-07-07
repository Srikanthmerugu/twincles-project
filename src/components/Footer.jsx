// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Blog", href: "#blog" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "AI & ML",
    "Digital Marketing"
  ];

  return (
    <>
      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-sky-600 to-indigo-700 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-sky-100 text-lg max-w-xl">
                Let's build something amazing together. Our team of experts is ready to help you achieve your digital goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-end"
            >
              <a 
                href="tel:+919391911699"
                className="bg-white text-sky-700 hover:bg-sky-50 font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <FiPhone className="text-sky-600" />
                <span>Call Us Now</span>
              </a>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl">
                Request a Quote
              </button>
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-40 mb-6">
                <img 
                  src="https://twincles.com/wp-content/uploads/2025/01/cropped-cropped-Untitled-design-33-300x100.png" 
                  alt="Twincles Logo"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-slate-300 mb-6">
                Transforming ideas into digital reality. We create innovative solutions that drive growth and exceed expectations.
              </p>
              <div className="flex gap-4">
                {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="bg-slate-700 hover:bg-sky-600 p-3 rounded-full transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-white" size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-700">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={item.href} 
                      className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-2"
                    >
                      <span className="bg-sky-900 w-1.5 h-1.5 rounded-full"></span>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-700">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-2"
                    >
                      <span className="bg-sky-900 w-1.5 h-1.5 rounded-full"></span>
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-slate-700">Contact Us</h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-sky-900 p-2 rounded-lg mt-1">
                    <FiPhone className="text-sky-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919391911699" className="text-slate-300 hover:text-sky-400 transition-colors">
                      +91 9391911699
                    </a>
                  </div>
                </motion.li>
                
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-sky-900 p-2 rounded-lg mt-1">
                    <FiMail className="text-sky-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@twincles.com" className="text-slate-300 hover:text-sky-400 transition-colors">
                      info@twincles.com
                    </a>
                  </div>
                </motion.li>
                
                
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-sky-900 p-2 rounded-lg mt-1">
                    <FiMapPin className="text-sky-400" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-slate-300">
                      Tech Park, Sector 62, Noida, <br /> Uttar Pradesh, India
                    </p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} Twincles Technologies. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Sitemap</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;