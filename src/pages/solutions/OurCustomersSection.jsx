import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/companies/img1.png'
import img2 from '../../assets/companies/img2.jpg'
import img3 from '../../assets/companies/img3.png'
import img4 from '../../assets/companies/img4.png'
import img5 from '../../assets/companies/img5.png'
import img6 from '../../assets/companies/img1.png'
import img8 from '../../assets/companies/img8.png'
import img7 from '../../assets/companies/img7.png'
import img9 from '../../assets/companies/img9.png'
import img10 from '../../assets/companies/img10.png'
import img11 from '../../assets/companies/img11.jpg'
import img12 from '../../assets/companies/img12.png'
import img13 from '../../assets/companies/img13.png'
import img14 from '../../assets/companies/img14.png'
import img15 from '../../assets/companies/img15.png'
import img16 from '../../assets/companies/img16.png'
import img17 from '../../assets/companies/img17.png'

const OurCustomersSection = () => {
  const sliderRef = useRef(null);
  
  // Sample customer logos - replace with your actual images
  const customers = [
    { id: 1, name: 'image', logo: img1, color: 'bg-gradient-to-r from-amber-500 to-orange-500' },
    { id: 2, name: 'image', logo: img2, color: 'bg-gradient-to-r from-blue-500 to-indigo-600' },
    { id: 3, name: 'image', logo: img3, color: 'bg-gradient-to-r from-green-500 to-emerald-600' },
    { id: 4, name: 'image', logo: img4, color: 'bg-gradient-to-r from-red-500 to-pink-600' },
    { id: 5, name: 'image', logo:img5, color: 'bg-gradient-to-r from-purple-500 to-fuchsia-600' },
    { id: 6, name: 'image', logo: img6, color: 'bg-gradient-to-r from-cyan-500 to-teal-600' },
    { id: 7, name: 'image', logo: img7, color: 'bg-gradient-to-r from-lime-500 to-green-600' },
    { id: 8, name: 'image', logo: img8, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 9, name: 'image', logo: img9, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 10, name: 'image', logo: img10, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 11, name: 'image', logo: img11, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 12, name: 'image', logo: img12, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 13, name: 'image', logo: img13, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 14, name: 'image', logo: img14, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 15, name: 'image', logo: img15, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 16, name: 'image', logo: img16, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
    { id: 17, name: 'image', logo: img17, color: 'bg-gradient-to-r from-rose-500 to-red-600' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Handle mouse wheel scrolling for the carousel
  useEffect(() => {
    const handleWheel = (e) => {
      if (sliderRef.current) {
        if (e.deltaY > 0) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }
    };

    const sliderElement = document.querySelector('.customer-slider');
    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-600 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mt-5 md:mt-15 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-6 shadow-lg"
          >
            Trusted by Industry Leaders
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Valued <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">Customers</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-indigo-200 max-w-3xl mx-auto"
          >
            At Twincles, our customers are more than just clients - they are our partners in innovation, 
            growth, and success. We take pride in fostering meaningful relationships and delivering exceptional solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-lg rounded-3xl p-8 border border-indigo-500/30 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl mr-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Partnership Approach</h3>
            </div>
            <p className="text-indigo-200 text-lg">
              We work hand-in-hand with our customers to create value, overcome challenges, and celebrate successes. 
              Your trust and collaboration inspire us to continuously push boundaries and redefine excellence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-900/80 to-pink-900/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl mr-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Diverse Community</h3>
            </div>
            <p className="text-indigo-200 text-lg">
              We take immense pride in serving a diverse community who trust us with their ambitions and dreams. 
              Together, we're shaping a brighter future through innovative communication solutions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text">
              Trusted Partners
            </span>
          </h3>
          
          <div className="customer-slider bg-gradient-to-r from-indigo-800/50 to-purple-800/50 backdrop-blur-sm p-8 rounded-4xl border border-white/10 shadow-2xl">
            <Slider ref={sliderRef} {...settings}>
              {customers.map((customer) => (
                <div key={customer.id} className="px-4">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: Math.random() > 0.5 ? 2 : -2,
                    //   boxShadow: "0 20px 30px rgba(0,0,0,0.3)"
                    }}
                    className={` rounded-2xl mt-3 p- flex flex-col items-center justify-center h-48 transition-all duration-500`}
                  >
                    <div className="bg-whp-3">
                      <img 
                        src={customer.logo} 
                        alt={customer.name} 
                        className="max-h-45 max-w-full rounded-3xl object-contain"
                      />
                    </div>
                    {/* <p className="text-center text-white font-bold text-lg">{customer.name}</p> */}
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              background: "linear-gradient(to right, #f59e0b, #ec4899)",
              boxShadow: "0 10px 25px rgba(236, 72, 153, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl relative overflow-hidden"
          >
            <span className="relative z-10">Join Our Growing Family</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-rose-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-indigo-200 text-lg"
          >
            <p>Ready to transform your communication strategy?</p>
            <p className="font-semibold mt-2 text-white flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 9391911699
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurCustomersSection;