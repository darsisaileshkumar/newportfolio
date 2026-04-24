import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: 'Podcast Style Editing',
      description: 'Transformed raw 2-hour podcast footage into engaging 15-minute highlight reels with dynamic captions, B-roll, and sound design.',
      rawSrc: '/videos/Raw-1.mp4',
      editedSrc: '/videos/Edit_1.mp4',
      type: 'video' as const,
    },
    {
      title: 'Audio to Video Transformation',
      description: 'Special project converting raw audio into compelling visual content with motion graphics, subtitles, and storytelling.',
      rawSrc: '/videos/Audio-to-video.mpeg',
      editedSrc: '/videos/Edit-Audio-to-edit.mp4',
      type: 'audio-video' as const,
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-neo-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-neutral-800 font-serif">
            My Work
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Every project tells a story. Here's how I transform raw footage into compelling content that captivates audiences and drives results.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
