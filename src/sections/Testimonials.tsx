import { motion } from 'framer-motion';
import type { Testimonial } from '../types';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      content: 'The video content transformed our brand presence. Engagement increased by 300% within the first month.',
    },
    {
      name: 'Michael Chen',
      role: 'Content Creator, 1M+ Subscribers',
      content: 'Best editor I\'ve worked with. Understands the algorithm and creates content that actually performs.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartupXYZ',
      content: 'Professional, creative, and always delivers on time. Our product videos have significantly boosted conversions.',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-neo-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-800 font-serif">
            Testimonials
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            What clients say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-neo-base p-8 rounded-2xl shadow-neo hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-neo-accent fill-neo-accent" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-neo-primary mb-4 opacity-50" />
              <p className="text-neutral-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-base rounded-full flex items-center justify-center shadow-neo-sm">
                  <span className="text-neo-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-neutral-800 font-semibold">{testimonial.name}</div>
                  <div className="text-neo-primary text-sm font-medium">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
