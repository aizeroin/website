import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-lg">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-9xl font-bold text-primary mb-4"
                >
                    404
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl font-bold text-gray-800 mb-6"
                >
                    Page Not Found
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-600 text-lg mb-10"
                >
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="px-8 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 mr-4 shadow-md"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg shine-effect"
                    >
                        Back to Home
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default NotFound;
