import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { MousePointer2 } from 'lucide-react';

interface DesktopMockupProps {
  image: string;
  title: string;
  category: string;
}

export default function DesktopMockup({ image, title, category }: DesktopMockupProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleInteraction = () => {
    setShowHint(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative"
      onMouseEnter={() => {
        setIsHovered(true);
        handleInteraction();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Monitor Frame */}
      <div className="relative">
        {/* Monitor Bezel */}
        <div className="relative bg-slate-800 rounded-t-2xl p-3 shadow-2xl">
          {/* Top Bar */}
          <div className="flex items-center gap-2 mb-2 px-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Screen Area with Scrolling Content */}
          <div className="relative bg-white rounded-lg overflow-hidden aspect-[16/10] shadow-inner">
            <motion.div
              className="absolute inset-0"
              animate={{
                y: isHovered ? '-50%' : '0%'
              }}
              transition={{
                duration: 3,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover object-top"
                style={{ height: '200%' }}
              />
            </motion.div>

            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/5 pointer-events-none" />

            {/* Screen reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            {/* Scrollbar Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.6 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-2 top-2 bottom-2 w-1.5 bg-slate-300 rounded-full overflow-hidden"
            >
              <motion.div
                className="w-full bg-blue-600 rounded-full"
                animate={{
                  height: '40%',
                  y: isHovered ? '100%' : '0%'
                }}
                transition={{
                  duration: 3,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="relative">
          <div className="w-24 h-4 bg-slate-700 mx-auto rounded-b-lg" />
          <div className="w-32 h-2 bg-slate-800 mx-auto rounded-lg" />
        </div>

        {/* Hover Info Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/60 to-transparent rounded-t-2xl flex items-end justify-center p-8 pointer-events-none"
        >
          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <div className="text-sm text-blue-300 mb-1 font-medium">{category}</div>
            <div className="text-2xl font-bold">{title}</div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-sm text-blue-200"
            >
              Hover to preview ↓
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Hint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showHint && !isHovered ? [0, 1, 1, 0] : 0,
          scale: showHint && !isHovered ? [0.8, 1, 1, 0.8] : 0.8,
          y: showHint && !isHovered ? [0, -10, -10, 0] : 0
        }}
        transition={{
          duration: 3,
          repeat: showHint ? Infinity : 0,
          repeatDelay: 1
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <div className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
          <MousePointer2 className="w-4 h-4" />
          <span className="text-sm font-medium">Hover to preview</span>
        </div>
      </motion.div>

      {/* Project Info Below */}
      <div className="mt-6 text-center">
        <div className="text-sm text-blue-600 font-medium mb-1">{category}</div>
        <div className="text-xl font-bold text-slate-900">{title}</div>
      </div>
    </motion.div>
  );
}
