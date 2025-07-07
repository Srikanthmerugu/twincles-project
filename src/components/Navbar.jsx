// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const handleNaginate = () => {
    navigate('/contact');
    // setMobileMenuOpen(false);

  }
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className={`${scrolled ? "w-32" : "w-36"} transition-all duration-500`}>
              <img 
                src="https://twincles.com/wp-content/uploads/2025/01/cropped-cropped-Untitled-design-33-300x100.png" 
                alt="Twincles Logo"
                className="w-full h-auto rounded-xs"
              />
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium px-4 py-2 rounded-lg transition-all ${
                  scrolled 
                    ? "text-sky-900 hover:bg-sky-50" 
                    : "text-white hover:bg-white/10"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.div 
              className="ml-4 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="tel:+919391911699"
                className={`flex items-center gap-2 font-medium px-4 py-2 rounded-lg transition-all ${
                  scrolled 
                    ? "text-amber-600 bg-amber-50 hover:bg-amber-100" 
                    : "text-white bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/30"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <FiPhone className="text-amber-500" />
                <span>+91 9391911699</span>
              </motion.a>
              
              <motion.button 
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  scrolled 
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:shadow-lg" 
                    : "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNaginate}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className={`lg:hidden p-2 rounded-lg ${
              scrolled 
                ? "text-sky-900 hover:bg-sky-50" 
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href}
                    className="font-medium text-sky-900 hover:text-sky-600 px-4 py-3 rounded-lg hover:bg-sky-50 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="pt-4 border-t mt-4">
                  <a
                    href="tel:+919391911699"
                    className="flex items-center gap-3 w-full px-4 py-3 bg-sky-50 text-sky-900 rounded-lg mb-4"
                  >
                    <div className="bg-sky-100 p-2 rounded-full">
                      <FiPhone className="text-sky-600" />
                    </div>
                    <span className="font-medium">+91 9391911699</span>
                  </a>
                  
                  <button className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-3.5 rounded-lg font-medium hover:shadow-md transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;