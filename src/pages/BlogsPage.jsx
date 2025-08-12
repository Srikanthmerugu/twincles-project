import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import img from '../assets/Sample-blog.jpg'

const BlogsPage = () => {
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/single-blog/${id}`);
    };

    // State management
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const blogsPerPage = 6;

    // Fetch blog data from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('https://twincles.mavenerp.in/api/public/api/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                // Filter only published blogs
                const publishedBlogs = data.data.filter(blog => blog.status === 'published');
                setBlogData(publishedBlogs);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Format date to "Month Day, Year"
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    // Filter blogs based on search and date
    const filteredBlogs = blogData.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (blog.content && blog.content.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const blogDate = new Date(blog.published_at);
        const matchesDate = dateFilter === 'all' || 
                          (dateFilter === 'recent' && blogDate >= new Date('2025-01-01')) ||
                          (dateFilter === 'older' && blogDate < new Date('2025-01-01'));
        
        return matchesSearch && matchesDate;
    });

    // Pagination logic - reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, dateFilter]);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    // Pagination controls
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    // Default image URL
    const defaultImage = img
    // const defaultImage = "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4 flex justify-center items-center">
                <div className="text-white text-xl">Loading blogs...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4 flex justify-center items-center">
                <div className="text-white text-xl">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4 overflow-hidden">
            <div className="w-full max-w-[1800px] mx-auto z-10 px-[15px] py-20">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-50">
                            TWINCLES BLOGS
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl text-gray-300"
                    >
                        Insights and updates on communication technology and marketing strategies
                    </motion.p>
                </motion.div>

                {/* Filters */}
                <motion.div 
                    className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    <div className="relative w-full md:w-1/2">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    <div className="flex relative items-center gap-3 w-full md:w-auto">
                        <select
                            className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        >
                            <option value="all">All Dates</option>
                            <option value="recent">2025</option>
                            <option value="older">2024 & Earlier</option>
                        </select>
                    </div>
                </motion.div>

                {/* Blog Grid */}
                <AnimatePresence>
                    {currentBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {currentBlogs.map((blog) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all"
                                >
                                    <div className="relative h-atuto overflow-hidden">
                                        <motion.img
                                            src={blog.image || defaultImage}
                                            alt={blog.title}
                                            className="w-full h-full object-contain"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div> */}
                                        <div className="absolute bottom-1 left-2 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white px-3 py-1 rounded-full text-sm">
                                            {formatDate(blog.published_at)}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{blog.title}</h3>
                                        <p className="text-gray-300 mb-4 line-clamp-3">
                                            {blog.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                                        </p>
                                        <button
                                            onClick={() => handleNavigate(blog.id)}
                                            className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition"
                                        >
                                            Read More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <h3 className="text-2xl text-gray-300">No blogs found matching your criteria</h3>
                            <button 
                                onClick={() => {
                                    setSearchTerm('');
                                    setDateFilter('all');
                                }}
                                className="mt-4 text-blue-400 hover:text-blue-300"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pagination */}
                {filteredBlogs.length > blogsPerPage && (
                    <motion.div 
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex relative items-center gap-2">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition"
                            >
                                <FiChevronLeft className="w-5 h-5" />
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        currentPage === number 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    } transition`}
                                >
                                    {number}
                                </button>
                            ))}
                            
                            <button
                                onClick={nextPage}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition"
                            >
                                <FiChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default BlogsPage;