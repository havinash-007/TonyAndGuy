import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1920&auto=format&fit=crop" 
            alt="Toni and Guy Fashion Model" 
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-tg-black"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h2 className="text-gray-300 tracking-[0.8em] text-xs md:text-sm uppercase mb-6 font-light">
              London &bull; Paris &bull; Milan &bull; <span className="text-white font-bold">Bangalore</span>
            </h2>
          </motion.div>
          
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="font-display text-7xl md:text-[10rem] font-bold uppercase text-white mb-2 leading-[0.9] tracking-tight mix-blend-overlay"
          >
            Iconic
          </motion.h1>
          
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="font-display text-7xl md:text-[10rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-800 mb-8 leading-[0.9] tracking-tight"
          >
            Hairdressing
          </motion.h1>

          <motion.p 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="max-w-md mx-auto text-gray-400 mb-12 text-sm leading-relaxed tracking-wide font-sans border-l-2 border-white pl-4 text-left"
          >
            Pushing the boundaries of hairdressing and delivering creativity, quality and consistency to every client in Bangalore.
          </motion.p>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-[0.2em] border border-white"
            >
              Book Appointment
            </motion.a>
            <motion.a 
              href="#ai-stylist"
              whileHover={{ scale: 1.05, borderColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-transparent text-white text-sm font-bold uppercase tracking-[0.2em] border border-white/30 hover:border-white transition-colors"
            >
              Consult AI Stylist
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;