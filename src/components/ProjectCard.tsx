import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import type { ProjectCardProps } from '../types';
import { Play, Sparkles } from 'lucide-react';

const ProjectCard = ({ title, description, rawSrc, editedSrc, type }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="bg-neo-base rounded-3xl p-8 shadow-neo mb-8 hover:shadow-neo-lg transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <motion.h3
            whileHover={{ x: 5 }}
            className="text-3xl font-bold text-neutral-800 font-serif mb-2"
          >
            {title}
          </motion.h3>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:block"
        >
          <Sparkles className="w-6 h-6 text-neo-accent" />
        </motion.div>
      </div>

      {type === 'video' ? (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Raw Video */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-neo-base text-red-500 rounded-full text-xs font-semibold shadow-neo-sm">RAW</span>
              <span className="text-neutral-500 font-medium">Original Footage</span>
            </div>
            <div className="video-container bg-neo-base aspect-video rounded-2xl overflow-hidden shadow-neo-inset">
              <ReactPlayer
                url={rawSrc}
                width="100%"
                height="100%"
                controls
                light
                playIcon={
                  <div className="flex items-center justify-center w-16 h-16 bg-neo-base rounded-full shadow-neo">
                    <Play className="w-8 h-8 text-neo-primary ml-1" />
                  </div>
                }
              />
            </div>
          </motion.div>

          {/* Edited Video */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-neo-base text-green-500 rounded-full text-xs font-semibold shadow-neo-sm">EDITED</span>
              <span className="text-neutral-500 font-medium">Final Output</span>
            </div>
            <div className="video-container bg-neo-base aspect-video rounded-2xl overflow-hidden shadow-neo-inset border-2 border-neo-primary/30">
              <ReactPlayer
                url={editedSrc}
                width="100%"
                height="100%"
                controls
                light
                playIcon={
                  <div className="flex items-center justify-center w-16 h-16 bg-neo-base rounded-full shadow-neo">
                    <Play className="w-8 h-8 text-neo-primary ml-1" />
                  </div>
                }
              />
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Raw Audio */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-neo-base text-red-500 rounded-full text-xs font-semibold shadow-neo-sm">RAW AUDIO</span>
              <span className="text-neutral-500 font-medium">Audio Source</span>
            </div>
            <div className="bg-neo-base rounded-2xl p-6 shadow-neo-inset">
              <audio controls className="w-full" preload="none">
                <source src={rawSrc} type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
              <div className="mt-4 h-16 bg-neo-base rounded-lg flex items-center justify-center overflow-hidden shadow-neo-inset-sm">
                <div className="flex items-end gap-1 h-12">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-neo-primary rounded-full"
                      animate={{
                        height: [10, 30, 20, 40, 15, 35, 10],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Edited Video */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-neo-base text-green-500 rounded-full text-xs font-semibold shadow-neo-sm">EDITED</span>
              <span className="text-neutral-500 font-medium">Visual Content</span>
            </div>
            <div className="video-container bg-neo-base aspect-video rounded-2xl overflow-hidden shadow-neo-inset border-2 border-neo-primary/30">
              <ReactPlayer
                url={editedSrc}
                width="100%"
                height="100%"
                controls
                light
                playIcon={
                  <div className="flex items-center justify-center w-16 h-16 bg-neo-base rounded-full shadow-neo">
                    <Play className="w-8 h-8 text-neo-primary ml-1" />
                  </div>
                }
              />
            </div>
          </motion.div>
        </div>
      )}

      {type === 'audio-video' && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 p-4 bg-neo-base rounded-xl shadow-neo border border-neo-primary/20"
        >
          <p className="text-sm text-neutral-600 italic flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-neo-accent" />
            Converted raw audio into engaging visual content using motion graphics, subtitles, and storytelling.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
