import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.counter-projects',
        { innerText: 0 },
        {
          innerText: 150,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          onUpdate: function() {
            setCounters(prev => ({ ...prev, projects: Math.round(Number(this.targets()[0].innerText)) }));
          },
        }
      );

      gsap.fromTo(
        '.counter-clients',
        { innerText: 0 },
        {
          innerText: 80,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          onUpdate: function() {
            setCounters(prev => ({ ...prev, clients: Math.round(Number(this.targets()[0].innerText)) }));
          },
        }
      );

      gsap.fromTo(
        '.counter-years',
        { innerText: 0 },
        {
          innerText: 5,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          onUpdate: function() {
            setCounters(prev => ({ ...prev, years: Math.round(Number(this.targets()[0].innerText)) }));
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 bg-neo-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neo-base p-8 md:p-16 rounded-3xl shadow-neo"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold mb-8 text-neutral-800 font-serif"
          >
            About Me
          </motion.h2>
          <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
            I'm a passionate video editor and digital marketing specialist with over 5 years of experience 
            in creating content that doesn't just look good—it performs. My approach combines technical 
            expertise with creative storytelling to deliver videos that engage audiences and drive results.
          </p>
          <p className="text-neutral-600 text-lg mb-12 leading-relaxed">
            From podcasts to commercials, short-form content to cinematic documentaries, I bring the same 
            level of dedication and attention to detail to every project. I don't just edit videos; I craft 
            experiences that resonate with viewers and help brands achieve their marketing goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-neo-base p-8 rounded-2xl shadow-neo text-center hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-neo-base rounded-full flex items-center justify-center mx-auto mb-4 shadow-neo-sm">
                <Award className="w-8 h-8 text-neo-primary" />
              </div>
              <div className="text-5xl font-bold text-neo-primary mb-2 counter-projects font-serif">
                {counters.projects}+
              </div>
              <div className="text-neutral-600 font-medium">Projects Completed</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-neo-base p-8 rounded-2xl shadow-neo text-center hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-neo-base rounded-full flex items-center justify-center mx-auto mb-4 shadow-neo-sm">
                <Users className="w-8 h-8 text-neo-primary" />
              </div>
              <div className="text-5xl font-bold text-neo-primary mb-2 counter-clients font-serif">
                {counters.clients}+
              </div>
              <div className="text-neutral-600 font-medium">Happy Clients</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-neo-base p-8 rounded-2xl shadow-neo text-center hover:shadow-neo-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-neo-base rounded-full flex items-center justify-center mx-auto mb-4 shadow-neo-sm">
                <Clock className="w-8 h-8 text-neo-primary" />
              </div>
              <div className="text-5xl font-bold text-neo-primary mb-2 counter-years font-serif">
                {counters.years}+
              </div>
              <div className="text-neutral-600 font-medium">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
