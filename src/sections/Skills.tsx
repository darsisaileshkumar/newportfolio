import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Adobe Premiere Pro', level: 95 },
    { name: 'After Effects', level: 90 },
    { name: 'DaVinci Resolve', level: 85 },
    { name: 'Final Cut Pro', level: 80 },
    { name: 'Social Media Strategy', level: 88 },
    { name: 'SEO & Analytics', level: 82 },
    { name: 'Motion Graphics', level: 85 },
    { name: 'Sound Design', level: 78 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      skills.forEach((skill, index) => {
        gsap.fromTo(
          `.pie-chart-${index}`,
          { strokeDashoffset: 314 },
          {
            strokeDashoffset: 314 - (314 * skill.level) / 100,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const createPieChart = (level: number, index: number) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (circumference * level) / 100;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#e0e5ec"
            strokeWidth="12"
          />
          <motion.circle
            className={`pie-chart-${index}`}
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#6366f1"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-neo-primary font-serif">{level}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 bg-neo-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-800 font-serif">
            Skills
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Technical expertise across video production and digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neo-base p-6 rounded-2xl shadow-neo flex flex-col items-center justify-center gap-4 hover:shadow-neo-lg transition-all duration-300"
            >
              {createPieChart(skill.level, index)}
              <span className="text-neutral-800 font-semibold text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
