import { motion } from 'framer-motion';
import { Video, TrendingUp, Palette, Zap, MessageSquare, Scissors, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional editing for all formats—from cinematic films to viral social content.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Strategic content marketing that drives engagement and grows your audience.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Color Grading',
      description: 'Cinematic color correction and grading that sets the perfect mood.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Motion Graphics',
      description: 'Eye-catching animations and visual effects that elevate your content.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Sound Design',
      description: 'Professional audio mixing, sound effects, and music integration.',
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Content Strategy',
      description: "Data-driven strategies to maximize your content's impact and reach.",
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-neo-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-800 font-serif">
            Services
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Comprehensive video and marketing solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-neo-base p-8 rounded-2xl shadow-neo hover:shadow-neo-lg transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-neo-base rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neo-sm">
                <div className="text-neo-primary">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-neutral-800 font-serif">{service.title}</h3>
              <p className="text-neutral-600 leading-relaxed mb-4">{service.description}</p>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-neo-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
