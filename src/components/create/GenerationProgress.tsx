import { motion } from "framer-motion";
import { AudioWaveform } from "@/components/AudioWaveform";
import { Loader2 } from "lucide-react";

interface GenerationProgressProps {
  progress: number;
  prompt: string;
  genre: string | null;
  mood: string | null;
}

const stages = [
  { threshold: 0, label: "Analyzing your prompt..." },
  { threshold: 20, label: "Selecting instruments..." },
  { threshold: 40, label: "Composing melody..." },
  { threshold: 60, label: "Adding harmonies..." },
  { threshold: 80, label: "Mixing and mastering..." },
  { threshold: 95, label: "Finalizing track..." },
];

export const GenerationProgress = ({ progress, prompt, genre, mood }: GenerationProgressProps) => {
  const currentStage = [...stages].reverse().find(s => progress >= s.threshold) || stages[0];

  return (
    <div className="gradient-border rounded-2xl p-8">
      <div className="text-center space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
        >
          <Loader2 className="w-4 h-4 animate-spin text-primary" />
          <span className="text-sm font-medium text-primary">{currentStage.label}</span>
        </motion.div>

        <div className="py-6">
          <AudioWaveform barCount={50} />
        </div>

        <div className="max-w-md mx-auto space-y-3">
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Generating</span>
            <span>{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <p className="text-muted-foreground text-sm">Creating track based on:</p>
          <p className="text-foreground font-medium">&ldquo;{prompt}&rdquo;</p>
          {(genre || mood) && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              {genre && <span className="px-2 py-1 bg-secondary rounded-md capitalize">{genre}</span>}
              {mood && <span className="px-2 py-1 bg-secondary rounded-md capitalize">{mood}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
