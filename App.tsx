import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIStylist from './components/AIStylist';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-100 bg-tg-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <AIStylist />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;