import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import img from '../assets/Sample-blog.jpg';

const LatestBlogs = () => {
    const navigate = useNavigate();
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blog data from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://twincles.mavenerp.in/api/public/api/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                const latestBlogs = data.data
                    .filter(blog => blog.status === 'published')
                    .sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
                    .slice(0, 3);
                setBlogData(latestBlogs);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleNavigate = (id) => {
        navigate(`/single-blog/${id}`);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const defaultImage = img;

    if (loading) {
        return (
            <div className="py-20 flex justify-center items-center">
                <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-4 h-4 bg-blue-700 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 flex justify-center items-center">
                <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg max-w-md">
                    Error loading blogs: {error}
                </div>
            </div>
        );
    }

    if (blogData.length === 0) {
        return (
            <div className="py-20 flex justify-center items-center">
                <div className="bg-blue-50 border border-blue-200 text-blue-600 px-6 py-4 rounded-lg max-w-md">
                    No blogs available at the moment
                </div>
            </div>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with blue accent */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block"
                    >
                        Latest Insights
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform translate-y-2"></span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover our newest articles and expert perspectives
                    </motion.p>
                </div>

                {/* Blog Cards Grid with blue accents */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {blogData.map((blog, index) => (
                        <motion.div 
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                        >
                            {/* Image with blue overlay on hover */}
                            <div className="h-56 overflow-hidden relative group">
                                <img 
                                    src={blog.image || defaultImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            {/* Content area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-blue-600 mb-3">
                                    <FiCalendar className="mr-2" />
                                    <span className="text-sm font-medium">{formatDate(blog.published_at)}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {blog.title}
                                </h3>
                                
                                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                                </p>
                                
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    onClick={() => handleNavigate(blog.id)}
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 group transition-colors mt-auto self-start"
                                >
                                    Read full article
                                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button with animated gradient */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                >
                    <motion.button 
                        whileHover={{ 
                            scale: 1.05,
                            background: 'linear-gradient(45deg, #3B82F6, #2563EB)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate('/all-blogs')}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                        <span className="relative z-10">Explore All Articles</span>
                        <motion.span 
                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                        ></motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default LatestBlogs; 