// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown, FiChevronRight, FiChevronUp } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
    setMobileMenuOpen(false);
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

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(dropdown === activeDropdown ? null : dropdown);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown(subDropdown === activeSubDropdown ? null : subDropdown);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Products", 
      path: null,
      dropdown: [
        { 
          name: "SMS", 
          subItems: [
            { name: "Bulk Messaging", path: "/bulk-sms" },
            { name: "2 Way Messaging", path: "/two-wa-sms" },
            { name: "Smart Links", path: "/smart-links" }
          ]
        },
        { name: "Voice", path: "/voice-broadcasting" },
        { name: "WhatsApp for Business", path: "/whatsApp-business" },
        { name: "Email Service", path: "/otp-services" },
        { name: "MMS Messaging", path: "/mms-messaging" },
        { name: "Contact Center", path: "/contact-center-solutions" },
        { name: "True Caller API", path: "/truecaller-business" }
      ]
    },
    { 
      name: "Solutions", 
      path: null,
      dropdown: [
        { name: "API Documentation", path: "/api-documentation" },
        { name: "What is DLT Registration", path: "/dlt-registration" },
        { name: "Use Cases SMS & WhatsApp Users", path: "/use-cases" },
        { name: "Our Customers", path: "/our-customers" }
      ]
    },
    { name: "Blog", path: "/all-blogs" },
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
            <Link to="/" className={`${scrolled ? "w-20 md:w-32" : "w-27 md:w-36"} transition-all duration-500`}>
              <img 
                src="https://twincles.com/wp-content/uploads/2025/01/cropped-cropped-Untitled-design-33-300x100.png" 
                alt="Twincles Logo"
                className="w-full h-auto rounded-xs"
              />
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative"
                onHoverStart={() => item.path === null && setActiveDropdown(item.name)}
                onHoverEnd={() => item.path === null && setActiveDropdown(null)}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`font-medium px-4 py-2 rounded-lg transition-all relative group ${
                      scrolled 
                        ? "text-sky-900 hover:bg-sky-50" 
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    <motion.span 
                      className="absolute bottom-0 left-1/2 h-0.5 bg-amber-500"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "80%", transition: { duration: 0.3 } }}
                    />
                  </Link>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-1 relative group ${
                        scrolled 
                          ? "text-sky-900 hover:bg-sky-50" 
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      <FiChevronDown className={`transition-transform ${
                        activeDropdown === item.name ? "transform rotate-180" : ""
                      }`} />
                      <motion.span 
                        className="absolute bottom-0 left-1/2 h-0.5 bg-amber-500"
                        initial={{ width: 0, x: "-50%" }}
                        animate={{ 
                          width: activeDropdown === item.name ? "80%" : "0%",
                          x: "-50%",
                          transition: { duration: 0.3 }
                        }}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute left-0 mt-2 w-64 rounded-lg shadow-lg py-2 ${
                            scrolled ? "bg-white" : "bg-white"
                          }`}
                          onHoverStart={() => setActiveDropdown(item.name)}
                          onHoverEnd={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem, idx) => (
                            <React.Fragment key={dropdownItem.name}>
                              {dropdownItem.subItems ? (
                                <div className="relative">
                                  <button
                                    onClick={() => toggleSubDropdown(dropdownItem.name)}
                                    className="w-full text-left px-4 py-2 hover:bg-sky-50 flex items-center justify-between group"
                                  >
                                    <span className="text-sky-900">{dropdownItem.name}</span>
                                    <FiChevronRight className="text-sky-500" />
                                    <motion.span 
                                      className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                                      initial={{ width: 0 }}
                                      whileHover={{ width: "100%", transition: { duration: 0.3 } }}
                                    />
                                  </button> 
                                  
                                  <AnimatePresence>
                                    {activeSubDropdown === dropdownItem.name && (
                                      <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-full top-0 ml-1 w-64 bg-white  rounded-lg shadow-lg py-2 z-10"
                                      >
                                        {dropdownItem.subItems.map((subItem) => (
                                          <Link
                                            key={subItem.name}
                                            to={subItem.path}
                                            className="block px-4 py-2 text-sm text-blue-800 hover:bg-sky-50 group relative"
                                            onClick={() => {
                                              setActiveDropdown(null);
                                              setActiveSubDropdown(null);
                                            }}
                                          >
                                            {subItem.name}
                                            <motion.span 
                                              className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                                              initial={{ width: 0 }}
                                              whileHover={{ width: "100%", transition: { duration: 0.3 } }}
                                            />
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ) : (
                                <Link
                                  to={dropdownItem.path}
                                  className="block px-4 py-2 text-blue-800 hover:bg-sky-50 relative group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {dropdownItem.name}
                                  <motion.span 
                                    className="absolute bottom-0 left-0 h-0.5 bg-amber-400"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%", transition: { duration: 0.3 } }}
                                  />
                                </Link>
                              )}
                            </React.Fragment>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
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
                onClick={handleNavigate}
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
                  <div key={item.name}>
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="font-medium text-sky-900 hover:text-sky-600 px-4 py-3 rounded-lg hover:bg-sky-50 transition flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                        <motion.span 
                          className="ml-auto h-0.5 w-4 bg-amber-500"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1, originX: 0 }}
                        />
                      </Link>
                    ) : (
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="font-medium text-sky-900 hover:text-sky-600 px-4 py-3 rounded-lg hover:bg-sky-50 transition flex items-center justify-between"
                        >
                          {item.name}
                          {activeDropdown === item.name ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-6 overflow-hidden"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <div key={dropdownItem.name} className="flex flex-col">
                                  {dropdownItem.subItems ? (
                                    <>
                                      <button
                                        onClick={() => toggleSubDropdown(dropdownItem.name)}
                                        className="text-left px-4 py-2 text-sky-800 hover:bg-sky-50 flex items-center justify-between"
                                      >
                                        {dropdownItem.name}
                                        <FiChevronRight className={`text-sky-500 transition-transform ${
                                          activeSubDropdown === dropdownItem.name ? "transform rotate-90" : ""
                                        }`} />
                                      </button>
                                      
                                      <AnimatePresence>
                                        {activeSubDropdown === dropdownItem.name && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="pl-4"
                                          >
                                            {dropdownItem.subItems.map((subItem) => (
                                              <Link
                                                key={subItem.name}
                                                to={subItem.path}
                                                className="block px-4 py-2 text-sm text-sky-700 hover:bg-sky-50 transition flex items-center"
                                                onClick={() => {
                                                  setMobileMenuOpen(false);
                                                  setActiveDropdown(null);
                                                  setActiveSubDropdown(null);
                                                }}
                                              >
                                                {subItem.name}
                                                <motion.span 
                                                  className="ml-auto h-0.5 w-3 bg-amber-400"
                                                  initial={{ scaleX: 0 }}
                                                  whileHover={{ scaleX: 1, originX: 0 }}
                                                />
                                              </Link>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link
                                      to={dropdownItem.path}
                                      className="block px-4 py-2 text-sky-800 hover:bg-sky-50 transition flex items-center"
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {dropdownItem.name}
                                      <motion.span 
                                        className="ml-auto h-0.5 w-3 bg-amber-400"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1, originX: 0 }}
                                      />
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
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
                  
                  <button 
                    className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-4 py-3.5 rounded-lg font-medium hover:shadow-md transition"
                    onClick={handleNavigate}
                  >
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