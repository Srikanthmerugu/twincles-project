// src/components/Footer.jsx
import React from 'react';
import { FiMail, FiPhone, FiFacebook, FiLinkedin, FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FiFacebook size={20} /> },
    { name: "LinkedIn", icon: <FiLinkedin size={20} /> },
    { name: "Twitter", icon: <FiTwitter size={20} /> },
    { name: "YouTube", icon: <FiYoutube size={20} /> },
    { name: "Instagram", icon: <FiInstagram size={20} /> },
  ];

  return (
    <footer className="bg-sky-950 text-sky-200 pt-16 pb-8">
      <div className="container mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div><img src='https://twincles.com/wp-content/uploads/2025/01/cropped-cropped-Untitled-design-33-300x100.png' className='rounded-xl' width="250px" alt="Twincles Logo" /></div>
            </div>
            <p className="mb-6">
              The best telecommunication solutions provider in Hyderabad, offering cutting-edge messaging and API solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="text-sky-400 hover:text-white transition"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <div className="bg-sky-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-sky-700 transition">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {["Bulk SMS", "2 Way Messaging", "Smart Links", "Voice Broadcast", "WhatsApp Business API", "MMS Messaging"].map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="hover:text-white transition block">{service}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Solutions", "Blog", "Careers", "Contact Us"].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                >
                  <a href="#" className="hover:text-white transition block">{item}</a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-sky-400 flex-shrink-0" />
                <span>letstalk@twincles.com</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-sky-400 flex-shrink-0" />
                <span>+91 9391911699</span>
              </li>
              <li className="flex items-start">
                <svg className="mt-1 mr-3 text-sky-400 flex-shrink-0" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span>
                  221, 2nd floor, Manjeera Majestic Commercial,<br />
                  JNTU Rd, Kukatpally,<br />
                  Hyderabad, Telangana 500072
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sky-800 pt-8 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Twincles Tele Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "DLT Registration", "API Documentation"].map((item) => (
              <motion.a 
                key={item}
                href="#"
                className="hover:text-white transition"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;