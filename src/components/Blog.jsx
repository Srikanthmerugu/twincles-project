import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What are the 4 types of tele messaging?",
      excerpt: "Learn about different tele messaging types and how they can benefit your business communication strategy.",
      category: "Messaging",
      img: 'https://twincles.com/wp-content/uploads/2025/07/Add-a-heading.png',
      date: "July 15, 2023"
    },
    {
      id: 2,
      title: "RCS vs SMS: What's the Difference?",
      excerpt: "Discover the key differences between RCS and traditional SMS messaging technologies.",
      category: "Technology",
      img: 'https://twincles.com/wp-content/uploads/2024/07/2-Factor-Authentication.jpg',
      date: "June 28, 2023"
    },
    {
      id: 3,
      title: "5 Tips for WhatsApp Business API Success",
      excerpt: "Maximize your business potential with these proven WhatsApp API implementation strategies.",
      category: "Business",
      img: 'https://twincles.com/wp-content/uploads/2024/07/WhatsApp-API.webp',
      date: "June 10, 2023"
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white" id="blog">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-4">
            <span className="px-4 py-1 bg-sky-100 text-sky-600 rounded-full text-sm font-medium">
              Insights & Updates
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-900 mb-4"
          >
            Latest From Our Blog
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-sky-700 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends and innovations in telecommunication
          </motion.p>
        </motion.div>
        
        {/* Blog Posts */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              variants={fadeInUp}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -10 }}
                initial={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)" }}
                whileHover={{ boxShadow: "0 20px 25px rgba(14, 165, 233, 0.1)" }}
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-semibold text-white bg-sky-500 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-2 text-sm text-sky-500">{post.date}</div>
                  <h3 className="text-xl font-bold text-sky-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sky-700 mb-4 flex-grow">{post.excerpt}</p>
                  
                  <motion.a 
                    href="#" 
                    className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-800 mt-auto"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button 
            className="relative px-8 py-3 bg-sky-600 text-white rounded-full font-semibold overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Articles
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;