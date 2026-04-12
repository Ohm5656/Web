import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Hand } from 'lucide-react';

interface MobileMockupProps {
  image: string;
  title: string;
  category: string;
}

export default function MobileMockup({ image, title, category }: MobileMockupProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const mouseY = useMotionValue(0);
  const scrollProgress = useTransform(mouseY, [0, 300], ['0%', '-60%']);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    mouseY.set(y);
  };

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
      onMouseMove={handleMouseMove}
    >
      {/* Mobile Phone Frame */}
      <div className="relative mx-auto w-64">
        {/* Phone Bezel */}
        <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-10" />

          {/* Screen Area with Scrolling Content */}
          <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5] shadow-inner">
            <motion.div
              className="absolute inset-0 w-full"
              style={{ y: scrollProgress }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover object-top"
                style={{ height: '200%' }}
              />
            </motion.div>

            {/* Scrollbar Indicator */}
            <motion.div
              className="absolute right-1 top-2 bottom-2 w-1 bg-slate-200 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.4 : 0 }}
            >
              <motion.div
                className="w-full bg-blue-600 rounded-full"
                style={{
                  height: '30%',
                  y: useTransform(mouseY, [0, 300], ['0%', '200%'])
                }}
              />
            </motion.div>

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/5 pointer-events-none" />

            {/* Screen reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
        </div>

        {/* Hover Info Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/50 to-transparent rounded-[2.5rem] flex items-end justify-center p-6 pointer-events-none"
        >
          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <div className="text-xs text-blue-300 mb-1 font-medium">{category}</div>
            <div className="text-lg font-bold">{title}</div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: isHovered ? 1 : 0.9, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-xs text-blue-200"
            >
              Move mouse to scroll ↕
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
      >
        <div className="bg-blue-600 text-white px-3 py-2 rounded-full shadow-xl flex items-center gap-2">
          <Hand className="w-4 h-4" />
          <span className="text-xs font-medium">Hover to scroll</span>
        </div>
      </motion.div>

      {/* Project Info Below */}
      <div className="mt-6 text-center">
        <div className="text-sm text-blue-600 font-medium mb-1">{category}</div>
        <div className="text-lg font-bold text-slate-900">{title}</div>
      </div>
    </motion.div>
  );
}
