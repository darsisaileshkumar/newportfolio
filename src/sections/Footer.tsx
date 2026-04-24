import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-neo-base py-12 px-4 border-t border-neo-dark/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-neo-primary font-serif mb-4">Portfolio</h3>
          <p className="text-neutral-600 mb-6">
            Video Editor & Digital Marketing
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="mailto:dskumardarsi@gmail.com" className="text-neutral-600 hover:text-neo-primary transition-colors">
              dskumardarsi@gmail.com
            </a>
            <span className="text-neutral-400">|</span>
            <a href="https://wa.me/919100425378" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neo-primary transition-colors">
              +91 91004 25378
            </a>
          </div>
          <p className="text-neutral-500 text-sm">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
