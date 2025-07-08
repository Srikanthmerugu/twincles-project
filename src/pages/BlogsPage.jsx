import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const BlogsPage = () => {

    const navigate = useNavigate()
    const handleNavigate =() =>{
        navigate("/single-blog")
    } 

  // Updated blog data for Twincles
  const blogData = [
    {
      id: 1,
      title: "Bulk SMS Gateway Providers in India",
      date: new Date("2025-07-03"),
      excerpt: "Affordable, Reliable & Fast Messaging Solutions – Featuring Twincles Telesolutions Pvt. Ltd. Introduction In today's digital-first world, businesses need […]",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      title: "2FA Explained: All You Need to Know About Two-Factor Authentication",
      date: new Date("2024-07-08"),
      excerpt: "In an era where cyber threats are increasingly sophisticated, safeguarding your digital accounts has never been more crucial.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      title: "Powerful SMS Templates to Enhance Your eCommerce Revenue",
      date: new Date("2024-07-08"),
      excerpt: "In the competitive world of eCommerce, effective communication with your customers can make a significant difference in your revenue.",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      title: "Enhancing Customer Engagement with WhatsApp Business API",
      date: new Date("2024-07-06"),
      excerpt: "WhatsApp Business API offers powerful tools for businesses to increase customer engagement through personalized and direct communication.",
      image: "https://images.unsplash.com/photo-1636051028886-0059ad2383c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      title: "Innovative Uses of WhatsApp Business API in Various Industries",
      date: new Date("2024-07-06"),
      excerpt: "WhatsApp Business API has revolutionized communication for businesses across diverse sectors, offering unique opportunities for engagement and marketing.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      title: "Mastering SMS Marketing: Top Strategies and Tools for 2024",
      date: new Date("2024-07-06"),
      excerpt: "In 2024, SMS marketing continues to be a powerful tool for businesses to connect with customers in a direct and effective way.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 7,
      title: "Effective SMS Marketing Strategies for Higher Engagement",
      date: new Date("2024-07-06"),
      excerpt: "Different segments engage with content in unique ways and require tailored messaging approaches for maximum impact.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Filter blogs based on search and date
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = dateFilter === 'all' || 
                       (dateFilter === 'recent' && blog.date >= new Date('2025-01-01')) ||
                       (dateFilter === 'older' && blog.date < new Date('2025-01-01'));
    
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

  // Format date to "Month Day, Year"
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Pagination controls
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className=" px-5 w-full bg-gradient-to-br from-blue-700 to-indigo-900  min-h-screen overflow-hidden relative">
      {/* relative overflow-hidden */}
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">
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
          className="flex flex- md:flex-row justify-between items-center mb-12 gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="relative w-full md:w-1/2">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white transition placeholder-gray-400"
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
              <option value="all">            <FiCalendar className="text-gray-400" />All Dates</option>
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
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500/50  transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      {formatDate(blog.date)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{blog.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                    <button
                    onClick={handleNavigate} className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition">
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