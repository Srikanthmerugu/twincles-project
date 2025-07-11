// src/components/Services.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
// import { useParallax } from 'react-scroll-parallax';
import { 
  FiMessageSquare, 
  FiSmartphone, 
  FiCheckCircle, 
  FiHeadphones, 
  FiUsers, 
  FiVideo,
  FiGlobe,
  FiPhoneCall
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
  const sectionRef = useRef(null);
  
  // Parallax elements
//   const parallaxLeft = useParallax({
//     speed: -10,
//     targetElement: sectionRef.parallaxLeft 
//   });
  
//   const parallaxRight = useParallax({
//     speed: 10,
//     targetElement: sectionRef.current
//   });


// Mapping service titles to their paths
  const servicePaths = {
    "Bulk SMS": "/bulk-sms",
    "2 Way Messaging": "/two-wa-sms",
    "Smart Links": "/smart-links",
    "Voice Broadcast": "/voice-broadcasting",
    "WhatsApp Business API": "/whatsApp-business",
    "MMS Messaging": "/mms-messaging",
    "Verified Caller ID": "/truecaller-business",
    "Contact Center": "/contact-center-solutions"
  };

  const services = [
    {
      id: 1,
      title: "Bulk SMS",
      icon: <FiMessageSquare className="text-4xl text-white" />,
      description: "Send instant OTPs, bulk campaigns, and automated reminders with our integrated APIs and web interface.",
      features: ["Instant OTPs", "Campaign Management", "API Integration", "Web Interface"],
      color: "from-sky-500 to-indigo-600"
    },
    {
      id: 2,
      title: "2 Way Messaging",
      icon: <FiSmartphone className="text-4xl text-white" />,
      description: "Generate leads and collect feedback using dedicated long/short code messaging solutions.",
      features: ["Lead Generation", "Feedback Collection", "Dedicated Codes", "Real-time Interaction"],
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 3,
      title: "Smart Links",
      icon: <FiCheckCircle className="text-4xl text-white" />,
      description: "Share important information seamlessly through integrated APIs for structured communication.",
      features: ["Information Sharing", "API Integration", "Structured Communication", "Tracking"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Voice Broadcast",
      icon: <FiHeadphones className="text-4xl text-white" />,
      description: "Promote your brand efficiently through authentic voice calls and outbound dialers.",
      features: ["Brand Promotion", "Voice Campaigns", "Outbound Dialers", "Personalized Messages"],
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 5,
      title: "WhatsApp Business API",
      icon: <FiUsers className="text-4xl text-white" />,
      description: "Give your business a modern look with our WhatsApp Business API solutions.",
      features: ["Business Messaging", "Rich Media Support", "API Integration", "Customer Engagement"],
      color: "from-green-500 to-lime-500"
    },
    {
      id: 6,
      title: "MMS Messaging",
      icon: <FiVideo className="text-4xl text-white" />,
      description: "Engage customers with multimedia messages including images, videos, and GIFs.",
      features: ["Rich Media", "Image Support", "Video Messages", "GIF Support"],
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 7,
      title: "Verified Caller ID",
      icon: <FiGlobe className="text-4xl text-white" />,
      description: "Build trust with Truecaller verified business ID to improve call answer rates.",
      features: ["Brand Trust", "Identity Verification", "Increased Answer Rates", "Scam Protection"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 8,
      title: "Contact Center",
      icon: <FiPhoneCall className="text-4xl text-white" />,
      description: "Cloud-based contact center with IVR technology for personalized customer experiences.",
      features: ["Cloud-Based", "IVR Technology", "Remote Management", "Call Routing"],
      color: "from-indigo-500 to-violet-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-sky-50 to-white overflow-hidden"
      id="services"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Floating circles */}
        <motion.div
        //   ref={parallaxLeft.ref}
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-sky-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div
        //   ref={parallaxRight.ref}
          className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#c5d5e3_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 bg-sky-100 rounded-full mb-4"
          >
            <span className="text-sky-700 font-medium">Innovative Solutions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Tele Communication</span> Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-sky-700 max-w-3xl mx-auto"
          >
            Cutting-edge services to elevate your business outreach and customer engagement in Hyderabad
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full bg-white rounded-2xl border border-sky-100 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Card Header with Gradient */}
                <div className={`h-40 bg-gradient-to-r ${service.color} flex flex-col items-center justify-center p-6`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white text-center">{service.title}</h3>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <p className="text-sky-700 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-sky-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-sky-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={servicePaths[service.title]}
                    className={`block w-full py-3 px-4 bg-gradient-to-r ${service.color} text-white font-medium rounded-lg transition-all shadow-md text-center`}
                  >
                    Learn More
                  </Link>
                </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-lg">
            Ready to Transform Your Communication?
          </div>
          <p className="text-sky-700 mt-6 text-lg max-w-2xl mx-auto">
            Join 500+ businesses in Hyderabad that trust our telecommunication solutions for their growth
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <motion.button
            onClick={() => window.location.href = '/'}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
            <motion.button
            onClick={() => window.location.href = '/contact'}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-sky-700 border-2 border-sky-500 px-8 py-3 rounded-xl font-medium hover:bg-sky-50"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
    
  );
};


export default Services;