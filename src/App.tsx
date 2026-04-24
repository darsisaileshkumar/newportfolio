import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation />
      <main id="home">
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Skills />
        <CTA />
        <Contact />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            href="https://wa.me/919100425378"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-neo-base rounded-full flex items-center justify-center shadow-neo hover:shadow-neo-lg transition-transform duration-300"
          >
            <MessageCircle className="w-7 h-7 text-neo-primary" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Quick Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-neo-base rounded-full flex items-center justify-center shadow-neo hover:shadow-neo-lg transition-transform duration-300"
      >
        {isChatOpen ? <X className="w-7 h-7 text-neo-accent" /> : <MessageCircle className="w-7 h-7 text-neo-accent" />}
      </motion.button>

      {/* Quick Chat Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 w-80 bg-neo-base rounded-2xl shadow-neo p-6"
          >
            <h3 className="text-xl font-bold text-neutral-800 mb-4 font-serif">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/919100425378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-neo-base rounded-xl shadow-neo-inset-sm hover:shadow-neo-inset transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-neo-accent" />
                <span className="text-neutral-700 font-medium">WhatsApp</span>
              </a>
              <a
                href="mailto:dskumardarsi@gmail.com"
                className="flex items-center gap-3 p-3 bg-neo-base rounded-xl shadow-neo-inset-sm hover:shadow-neo-inset transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-neo-primary" />
                <span className="text-neutral-700 font-medium">Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
