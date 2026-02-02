import { useState } from "react";
import { Header } from "@/components/Header";
import { PromptInput } from "@/components/create/PromptInput";
import { GenreSelector } from "@/components/create/GenreSelector";
import { MoodSelector } from "@/components/create/MoodSelector";
import { GenerationProgress } from "@/components/create/GenerationProgress";
import { GeneratedTrack } from "@/components/create/GeneratedTrack";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, RotateCcw } from "lucide-react";

type GenerationState = "idle" | "generating" | "complete";

const Create = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [generationState, setGenerationState] = useState<GenerationState>("idle");
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setGenerationState("generating");
    setProgress(0);

    // Mock generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setGenerationState("complete");
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 400);
  };

  const handleReset = () => {
    setGenerationState("idle");
    setProgress(0);
  };

  const canGenerate = prompt.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Create Your <span className="gradient-text">Track</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Describe the music you want, and let AI bring it to life.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {generationState === "idle" && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <PromptInput value={prompt} onChange={setPrompt} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <GenreSelector selected={selectedGenre} onSelect={setSelectedGenre} />
                  <MoodSelector selected={selectedMood} onSelect={setSelectedMood} />
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    variant="hero"
                    size="xl"
                    onClick={handleGenerate}
                    disabled={!canGenerate}
                    className="min-w-[200px]"
                  >
                    <Sparkles className="w-5 h-5" />
                    Generate Track
                  </Button>
                </div>
              </motion.div>
            )}

            {generationState === "generating" && (
              <motion.div
                key="generating"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <GenerationProgress 
                  progress={Math.min(progress, 100)} 
                  prompt={prompt}
                  genre={selectedGenre}
                  mood={selectedMood}
                />
              </motion.div>
            )}

            {generationState === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                <GeneratedTrack 
                  prompt={prompt}
                  genre={selectedGenre}
                  mood={selectedMood}
                />
                
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleReset}
                  >
                    <RotateCcw className="w-4 h-4" />
                    Create Another
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
};

export default Create;
