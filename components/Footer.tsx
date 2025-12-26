import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-display font-bold text-2xl tracking-widest uppercase">TONI&GUY</h2>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Bangalore</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="#" className="hover:text-gray-400 transition-colors"><Twitter className="w-5 h-5" /></a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} TONI&GUY Bangalore. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-700 mt-1">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;