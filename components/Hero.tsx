import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/433/1920/1080" 
          alt="Fashion Model" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tg-black via-transparent to-tg-black/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-gray-300 tracking-[0.5em] text-sm md:text-lg uppercase mb-4">
            World Class Hairdressing
          </h2>
          <h1 className="font-display text-6xl md:text-9xl font-bold uppercase text-white mb-6 leading-none">
            Style <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Defined</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
            Experience the legacy of London fashion in the heart of Bangalore. 
            From avant-garde cuts to bespoke coloring, we define the trends.
          </p>
          
          <motion.a 
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border border-white text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-colors"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;