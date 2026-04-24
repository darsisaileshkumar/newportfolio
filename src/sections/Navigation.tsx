import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(224, 229, 236, 0.8)', 'rgba(224, 229, 236, 0.95)']);
  const boxShadow = useTransform(scrollY, [0, 100], ['none', '0 4px 20px rgba(163, 177, 198, 0.3)']);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-neo-dark/20 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-neo-primary font-serif"
        >
          Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 text-neutral-600 hover:text-neo-primary transition-colors font-medium rounded-xl shadow-neo hover:shadow-neo-inset transition-all duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-neo-base text-neo-primary font-semibold rounded-xl text-sm shadow-neo hover:shadow-neo-inset transition-all duration-300"
        >
          Hire Me
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-neo-base border-t border-neo-dark/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-neutral-600 hover:text-neo-primary transition-colors font-medium rounded-xl shadow-neo hover:shadow-neo-inset transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="block w-full text-center px-6 py-3 bg-neo-base text-neo-primary font-semibold rounded-xl mt-4 shadow-neo hover:shadow-neo-inset transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
