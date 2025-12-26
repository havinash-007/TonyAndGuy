import React, { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-2">Appointments</h3>
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-8">Book Your Visit</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider">Name</label>
                  <input required type="text" className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider">Phone</label>
                  <input required type="tel" className="w-full border-b border-gray-300 py-2 focus:border-black focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Service Interest</label>
                <select className="w-full border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none transition-colors">
                  <option>Haircut & Finish</option>
                  <option>Hair Colouring</option>
                  <option>Keratin Treatment</option>
                  <option>Men's Grooming</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">Preferred Branch</label>
                <select className="w-full border-b border-gray-300 py-2 bg-transparent focus:border-black focus:outline-none transition-colors">
                  <option>Indiranagar, 12th Main</option>
                  <option>UB City, Vittal Mallya Rd</option>
                  <option>Koramangala, 5th Block</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className={`bg-black text-white px-10 py-4 uppercase font-bold tracking-widest text-xs transition-all mt-8 w-full md:w-auto ${formState !== 'idle' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                {formState === 'submitting' ? 'Processing...' : formState === 'success' ? 'Request Sent' : 'Request Appointment'}
              </button>

              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full left-0 mt-4 flex items-center gap-2 text-green-600 font-bold"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! We'll call you shortly to confirm.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-6">Our Salons in Bangalore</h3>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-display text-xl uppercase font-bold">Indiranagar</h4>
                      <p className="text-gray-600 leading-relaxed">
                        12th Main Road, HAL 2nd Stage,<br/>
                        Indiranagar, Bengaluru, 560008
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm font-bold">
                        <Phone className="w-4 h-4" /> +91 80 4123 4567
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-display text-xl uppercase font-bold">UB City</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Level 2, The Collection, UB City,<br/>
                        Vittal Mallya Rd, Bengaluru, 560001
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-sm font-bold">
                        <Phone className="w-4 h-4" /> +91 80 4234 5678
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
               <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-display text-xl uppercase font-bold">Opening Hours</h4>
                    <p className="text-gray-600 mt-2">
                      <span className="block"><span className="font-bold w-24 inline-block">Mon - Sat:</span> 10:00 AM - 8:00 PM</span>
                      <span className="block"><span className="font-bold w-24 inline-block">Sun:</span> 11:00 AM - 7:00 PM</span>
                    </p>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;