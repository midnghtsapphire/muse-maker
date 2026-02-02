import { motion } from "framer-motion";

interface AudioWaveformProps {
  barCount?: number;
  className?: string;
}

export const AudioWaveform = ({ barCount = 40, className = "" }: AudioWaveformProps) => {
  return (
    <div className={`flex items-center justify-center gap-[3px] h-32 ${className}`}>
      {Array.from({ length: barCount }).map((_, i) => {
        const delay = i * 0.05;
        const height = 20 + Math.sin(i * 0.5) * 60 + Math.random() * 40;
        
        return (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-accent to-primary"
            initial={{ height: 4, opacity: 0.3 }}
            animate={{
              height: [height * 0.3, height, height * 0.5, height * 0.8, height * 0.3],
              opacity: [0.4, 1, 0.7, 0.9, 0.4],
            }}
            transition={{
              duration: 1.5 + Math.random() * 0.5,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
