import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-neo-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-800 font-serif">
            Get In Touch
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Ready to start your project? Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.a
              href="mailto:dskumardarsi@gmail.com"
              whileHover={{ scale: 1.05, x: 5 }}
              className="bg-neo-base p-6 rounded-2xl shadow-neo flex items-center gap-4 hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-neo-base rounded-xl flex items-center justify-center flex-shrink-0 shadow-neo-sm">
                <Mail className="w-7 h-7 text-neo-primary" />
              </div>
              <div>
                <div className="text-neutral-500 text-sm font-medium">Email</div>
                <div className="text-neutral-800 font-semibold">dskumardarsi@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/919100425378"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              className="bg-neo-base p-6 rounded-2xl shadow-neo flex items-center gap-4 hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-neo-base rounded-xl flex items-center justify-center flex-shrink-0 shadow-neo-sm">
                <MessageCircle className="w-7 h-7 text-neo-primary" />
              </div>
              <div>
                <div className="text-neutral-500 text-sm font-medium">WhatsApp</div>
                <div className="text-neutral-800 font-semibold">+91 91004 25378</div>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              className="bg-neo-base p-6 rounded-2xl shadow-neo flex items-center gap-4 hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-neo-base rounded-xl flex items-center justify-center flex-shrink-0 shadow-neo-sm">
                <MapPin className="w-7 h-7 text-neo-primary" />
              </div>
              <div>
                <div className="text-neutral-500 text-sm font-medium">Location</div>
                <div className="text-neutral-800 font-semibold">India</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-neo-base p-8 md:p-10 rounded-3xl shadow-neo space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-700 text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-neo-base text-neutral-800 rounded-xl shadow-neo-inset-sm focus:outline-none focus:shadow-neo-inset transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-neo-base text-neutral-800 rounded-xl shadow-neo-inset-sm focus:outline-none focus:shadow-neo-inset transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-neutral-700 text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-neo-base text-neutral-800 rounded-xl shadow-neo-inset-sm focus:outline-none focus:shadow-neo-inset transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-neutral-700 text-sm font-semibold mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neo-base text-neutral-800 rounded-xl shadow-neo-inset-sm focus:outline-none focus:shadow-neo-inset transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-neo-base text-neo-primary font-bold rounded-xl shadow-neo hover:shadow-neo-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
