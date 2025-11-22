import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cloudComputing from "../../assets/cloudcomputing.jpg";
import managedIT from "../../assets/carousel3.jpg";
import Advisory from "../../assets/carousel2.jpg";

const carouselItems = [
  {
    image: cloudComputing,
    title: 'Cloud Computing',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore iusto saepe magnam laboriosam soluta reiciendis debitis iste cumque, quae inventore dolores consequuntur ut obcaecati ab illo quia eaque repudiandae.`,
  },
  {
    image: managedIT,
    title: 'Managed IT Services',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore iusto saepe magnam laboriosam soluta reiciendis debitis iste cumque, quae inventore dolores consequuntur ut obcaecati ab illo quia eaque repudiandae.`,
  },
  {
    image: Advisory,
    title: 'Technology Advisory Services',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem labore iusto saepe magnam laboriosam soluta reiciendis debitis iste cumque, quae inventore dolores consequuntur ut obcaecati ab illo quia eaque repudiandae.`,
  },
];

const ResponsiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="relative w-full bg-blue-50/50 h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${carouselItems[currentIndex].image})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-16 lg:px-24 max-w-4xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {carouselItems[currentIndex].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              {carouselItems[currentIndex].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 z-20 flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ResponsiveCarousel;