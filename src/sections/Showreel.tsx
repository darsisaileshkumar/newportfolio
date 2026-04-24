import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ReactPlayer from 'react-player';

const Showreel = () => {
  const playerRef = useRef<ReactPlayer>(null);

  return (
    <section id="showreel" className="py-20 px-4 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            Showreel
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A highlight reel showcasing my best work across various genres and styles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neumorphic p-4"
        >
          <div className="video-container aspect-video neumorphic-inset">
            <ReactPlayer
              ref={playerRef}
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="100%"
              controls
              playing
              muted
              loop
              light={
                <div className="absolute inset-0 flex items-center justify-center bg-dark-900/80">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 neumorphic rounded-full flex items-center justify-center shadow-neon-purple"
                  >
                    <Play className="w-8 h-8 text-neon-purple fill-neon-purple" />
                  </motion.div>
                </div>
              }
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
