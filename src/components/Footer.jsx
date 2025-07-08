import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Products", 
      items: [
        { name: "SMS Solutions", path: "/sms" },
        { name: "Voice API", path: "/voice" },
        { name: "WhatsApp Business", path: "/whatsapp" },
        { name: "Email Services", path: "/email" }
      ]
    },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Bulk SMS", path: "/bulk-sms" },
    { name: "Transactional SMS", path: "/transactional-sms" },
    { name: "OTP Services", path: "/otp" },
    { name: "Voice Broadcast", path: "/voice-broadcast" },
    { name: "WhatsApp API", path: "/whatsapp-api" },
    { name: "Email Marketing", path: "/email-marketing" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-800 to-indigo-900 overflow-hidden">
      {/* Background animation similar to hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-white/10 filter blur-[80px]"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-amber-400/10 filter blur-[60px]"
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24 lg:pb-5 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-40">
              <img 
                src="https://twincles.com/wp-content/uploads/2025/01/cropped-cropped-Untitled-design-33-300x100.png" 
                alt="Twincles Logo"
                className="w-full h-auto"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Enterprise-grade telecommunication solutions with 99.9% delivery rates and unmatched reliability for businesses in Hyderabad and beyond.
            </p>
            <div className="flex items-center gap-4">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-white/10 hover:bg-amber-500 p-2 rounded-full transition-all"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-white" size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-white/20">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={item.path}
                    className="text-blue-200 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <FiArrowRight className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" size={14} />
                    <span>{item.name}</span>
                  </Link>
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
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-white/20">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={service.path}
                    className="text-blue-200 hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-white/20">Contact Us</h3>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-amber-500/20 p-2 rounded-lg mt-1">
                <FiPhone className="text-amber-400" size={16} />
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <a href="tel:+919391911699" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">
                  +91 9391911699
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-amber-500/20 p-2 rounded-lg mt-1">
                <FiMail className="text-amber-400" size={16} />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <a href="mailto:info@twincles.com" className="text-blue-200 hover:text-amber-400 transition-colors text-sm">
                  info@twincles.com
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="bg-amber-500/20 p-2 rounded-lg mt-1">
                <FiMapPin className="text-amber-400" size={16} />
              </div>
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-blue-200 text-sm">
                  221, 2nd floor, Manjeera Majestic Commercial,<br />
                  JNTU Rd, Kukatpally,<br />
                  Hyderabad, Telangana 500072
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8 border border-white/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="lg:w-1/2">
              <h3 className="text-white text-xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-blue-200 text-sm">Get updates on new products and industry insights</p>
            </div>
            <div className="lg:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 bg-white/20 border border-white/30 text-white placeholder-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div> */}

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-2 pt-3 border-t border-white/10 text-center"
        >
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Twincles Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-blue-200 hover:text-amber-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;