import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Creative Cut & Finish',
    description: 'Bespoke precision cutting tailored to your face shape and lifestyle. Includes consultation and styling.',
    priceRange: '₹2500 - ₹4500',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Advanced Colour',
    description: 'From balayage to creative toning, our experts master the art of colour placement and tone.',
    priceRange: '₹5000 - ₹12000',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Kerasilk Treatment',
    description: 'Transform unmanageable hair into perfectly smooth, soft silk with our premium keratin treatments.',
    priceRange: '₹8000+',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Men\'s Grooming',
    description: 'Sharp, tailored cuts and beard shaping for the modern gentleman. Precision meets style.',
    priceRange: '₹1500 - ₹3000',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1600&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  return (
    <section id="services" className="relative bg-tg-black overflow-hidden min-h-screen flex flex-col justify-center py-24">
      
      {/* --- DESKTOP BACKGROUND ANIMATION --- */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {services.map((service) => (
            service.id === activeService && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 md:mb-0">
          <div className="md:hidden mb-8">
            <h3 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Our Expertise</h3>
            <h2 className="font-display text-4xl text-white uppercase">Services</h2>
          </div>
        </div>

        {/* --- DESKTOP LIST --- */}
        <div className="hidden md:flex flex-col w-full max-w-4xl mx-auto">
           {services.map((service, index) => (
             <motion.div 
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className="group border-b border-white/20 py-8 cursor-pointer relative"
             >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-8">
                    <span className="text-xs font-mono text-white/50">0{index + 1}</span>
                    <h3 className={`font-display text-6xl uppercase transition-all duration-300 ${activeService === service.id ? 'text-white translate-x-4' : 'text-white/40 group-hover:text-white/70'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <motion.div 
                    animate={{ rotate: activeService === service.id ? 45 : 0 }}
                    className="text-white/50"
                  >
                    <ArrowUpRight className="w-8 h-8" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-16 pt-4 flex justify-between items-end max-w-2xl">
                        <p className="text-gray-300 leading-relaxed max-w-md">{service.description}</p>
                        <div className="text-right">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Starting from</p>
                          <p className="font-display text-2xl text-white">{service.priceRange}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </motion.div>
           ))}
        </div>

        {/* --- MOBILE CARDS --- */}
        <div className="md:hidden space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[250px] rounded-lg overflow-hidden group"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-display text-2xl uppercase text-white">{service.title}</h3>
                  <span className="text-white font-bold">{service.priceRange}</span>
                </div>
                <p className="text-gray-400 text-xs line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;