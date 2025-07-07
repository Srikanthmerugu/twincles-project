// src/components/Blog.jsx
import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "What are the 4 types of tele messaging?",
      excerpt: "Learn about different tele messaging types and how they can benefit your business.",
      category: "messaging",
      img: 'https://twincles.com/wp-content/uploads/2025/07/Add-a-heading.png'
    },
    {
      id: 2,
      title: "RCS vs SMS: What's the Difference?",
      excerpt: "Discover the key differences between RCS and traditional SMS messaging.",
      category: "technology",
            img: 'https://twincles.com/wp-content/uploads/2025/07/Add-a-heading.png'

    },
    {
      id: 3,
      title: "5 Tips for WhatsApp Business API Success",
      excerpt: "Maximize your business potential with these WhatsApp API implementation tips.",
      category: "business",
            img: 'https://twincles.com/wp-content/uploads/2025/07/Add-a-heading.png'

    },
  ];

  return (
    <section className="py-16 bg-sky-50" id="blog">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={0.1} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-sky-700 max-w-2xl mx-auto">
            Stay updated with the latest trends in telecommunication
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={0.2 + index * 0.1}>
              <motion.div 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
                whileHover={{ y: -10 }}
              >
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />

                {/* <div className="h-48 bg-gradient-to-r from-sky-500 to-sky-700 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </motion.div>
                </div> */}
                <div className="p-6">
                  <h3 className="text-xl font-bold my-3">{post.title}</h3>
                  <p className="text-sky-700 mb-4">{post.excerpt}</p>
                  <motion.a 
                    href="#" 
                    className="text-sky-600 font-semibold hover:text-sky-800 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <motion.button 
            className="bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Posts
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;