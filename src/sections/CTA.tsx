import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-24 px-4 bg-neo-base relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neo-base p-12 md:p-16 rounded-3xl text-center shadow-neo"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-12 h-12 text-neo-accent" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-800 font-serif">
            Let's Turn Your Content Into a Growth Machine
          </h2>
          <p className="text-neutral-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your content? Let's discuss how we can work together to achieve your goals and create something extraordinary.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-neo-base text-neo-primary font-bold rounded-xl shadow-neo hover:shadow-neo-lg transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
