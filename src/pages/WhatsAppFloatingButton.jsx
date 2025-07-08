// src/components/WhatsAppFloatingButton.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiUser, FiMail } from 'react-icons/fi';

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '9391911699';
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    setIsOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

// Close popup when clicking outside
React.useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
        const modal = document.getElementById('whatsapp-chat-modal');
        if (modal && !modal.contains(event.target)) {
            setIsOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

return (
    <>
        {/* Floating WhatsApp Button */}
        <motion.div
            className="fixed bottom-8 right-8 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <button
                onClick={() => setIsOpen(true)}
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                aria-label="Chat with us on WhatsApp"
            >
                <FiMessageSquare size={24} />
            </button>
        </motion.div>

        {/* Chat Modal */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="whatsapp-chat-modal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-24 right-8 z-50 w-80 bg-white rounded-t-lg rounded-bl-lg shadow-xl overflow-hidden"
                >
                    {/* Chat Header */}
                    <div className="bg-green-500 text-white p-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <FiMessageSquare />
                            <span className="font-semibold">WhatsApp Support</span>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="hover:text-green-200"
                            aria-label="Close chat"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="p-4 bg-gray-50 h-90 overflow-y-auto">
                        <div className="mb-4">
                            <div className="bg-green-100 text-gray-800 p-3 rounded-lg max-w-xs">
                                Hi there! How can we help you today?
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200">
                                <FiUser className="text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="flex-1 outline-none text-sm"
                                    required
                                />
                            </div>

                            <div className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-200">
                                <FiMail className="text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="flex-1 outline-none text-sm"
                                    required
                                />
                            </div>

                            <div className="bg-white p-2 rounded-lg border border-gray-200">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type your message here..."
                                    rows="3"
                                    className="w-full outline-none text-sm resize-none"
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2"
                            >
                                <FiSend size={16} />
                                <span>Send via WhatsApp</span>
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
);
};

export default WhatsAppFloatingButton;