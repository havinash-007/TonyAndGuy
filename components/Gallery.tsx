import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596392927818-23b4260b02b6?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1580618672502-d2edcca98943?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-tg-black">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Portfolio</h3>
        <h2 className="font-display text-4xl md:text-5xl text-white uppercase">The Bangalore Collection</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group overflow-hidden rounded-sm"
            >
              <img 
                src={src} 
                alt="" 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;