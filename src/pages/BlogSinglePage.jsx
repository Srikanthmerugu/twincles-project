import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiShare2, FiBookmark, FiClock } from 'react-icons/fi';

const BlogSinglePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Default image URL
    const defaultImage = "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

    // Format date to "Month Day, Year"
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    // Calculate reading time
    const calculateReadingTime = (content) => {
        const text = content.replace(/<[^>]*>/g, '');
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
        return `${readingTime} min read`;
    };

    // Fetch blog data from API
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                // Fetch the current blog
                const blogResponse = await fetch(`https://twincles.mavenerp.in/api/public/api/posts/${id}`);
                if (!blogResponse.ok) {
                    throw new Error('Failed to fetch blog');
                }
                const blogData = await blogResponse.json();
                setBlog(blogData);

                // Fetch related blogs (all published blogs except current one)
                const blogsResponse = await fetch('https://twincles.mavenerp.in/api/public/api/posts');
                if (!blogsResponse.ok) {
                    throw new Error('Failed to fetch related blogs');
                }
                const blogsData = await blogsResponse.json();
                const publishedBlogs = blogsData.data.filter(b => b.status === 'published' && b.id !== parseInt(id));
                setRelatedBlogs(publishedBlogs.slice(0, 4)); // Get first 4 related blogs

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4 flex justify-center items-center">
                <div className="text-white text-xl">Loading blog...</div>
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

    if (!blog) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4 flex justify-center items-center">
                <div className="text-white text-xl">Blog not found</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 px-4">
            <div className="w-full max-w-[1800px] mx-auto z-10 px-[15px] py-10">
                {/* Back button */}
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
                >
                    <FiChevronLeft className="mr-2" />
                    Back to Blogs
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Blog Content */}
                    <div className="lg:w-2/3">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700 mb-8"
                        >
                            {/* Blog Image */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={blog.image || defaultImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                                        <FiClock className="mr-1" />
                                        {calculateReadingTime(blog.content)}
                                    </div>
                                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                                        {formatDate(blog.published_at)}
                                    </div>
                                </div>
                            </div>

                            {/* Blog Title and Content */}
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white">{blog.title}</h1>
                                    <div className="flex space-x-2">
                                        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-white">
                                            <FiShare2 />
                                        </button>
                                        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition text-white">
                                            <FiBookmark />
                                        </button>
                                    </div>
                                </div>
                                
                                <div 
                                    className="prose prose-invert max-w-none text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />

                                {/* CTA Button */}
                                <div className="mt-12 text-center">
                                    <button 
                                        onClick={() => navigate('/contact')}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
                                    >
                                        Contact Us for More Information
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar - Made sticky with top-8 (which is equivalent to 32px) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-20 space-y-8">
                            {/* About Author - Removed as per previous code */}
                            
                            {/* Related Blogs */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700 p-6"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
                                <div className="space-y-4">
                                    {relatedBlogs.map((relatedBlog) => (
                                        <motion.div
                                            key={relatedBlog.id}
                                            whileHover={{ x: 5 }}
                                            className="bg-gray-700/50 rounded-lg p-4 cursor-pointer transition-all"
                                            onClick={() => navigate(`/single-blog/${relatedBlog.id}`)}
                                        >
                                            <h4 className=" text-blue-500 font-medium mb-2 line-clamp-2">{relatedBlog.title}</h4>
                                            <p className="text-gray-400 text-sm line-clamp-2">
                                                {relatedBlog.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                                            </p>
                                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                                <FiClock className="mr-1" />
                                                <span>{calculateReadingTime(relatedBlog.content)}</span>
                                                <span className="mx-2">•</span>
                                                <span>{formatDate(relatedBlog.published_at)}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSinglePage;