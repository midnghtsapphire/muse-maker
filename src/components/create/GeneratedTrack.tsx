import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Pause, Download, Share2, Heart, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface GeneratedTrackProps {
  prompt: string;
  genre: string | null;
  mood: string | null;
}

export const GeneratedTrack = ({ prompt, genre, mood }: GeneratedTrackProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState([75]);
  const duration = 180; // 3 minutes mock duration

  // Mock playback progress
  useState(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const generateTrackName = () => {
    const words = prompt.split(" ").slice(0, 3);
    return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="gradient-border rounded-2xl overflow-hidden"
    >
      <div className="p-6 space-y-6">
        {/* Success badge */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Track Generated Successfully</span>
          </div>
        </div>

        {/* Track info */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">{generateTrackName()}</h3>
          <p className="text-muted-foreground">Generated • {formatTime(duration)}</p>
          <div className="flex items-center justify-center gap-2">
            {genre && <span className="px-2 py-1 bg-secondary rounded-md text-xs capitalize">{genre}</span>}
            {mood && <span className="px-2 py-1 bg-secondary rounded-md text-xs capitalize">{mood}</span>}
          </div>
        </div>

        {/* Waveform visualization */}
        <div className="relative h-24 bg-secondary/50 rounded-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center gap-[2px] px-4">
            {Array.from({ length: 80 }).map((_, i) => {
              const height = 20 + Math.sin(i * 0.3) * 30 + Math.random() * 25;
              const isActive = (i / 80) * 100 <= (currentTime / duration) * 100;
              return (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-colors ${
                    isActive ? "bg-gradient-to-t from-accent to-primary" : "bg-muted-foreground/30"
                  }`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
        </div>

        {/* Playback controls */}
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="space-y-2">
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={([value]) => setCurrentTime(value)}
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-muted-foreground" />
              <Slider
                value={volume}
                max={100}
                step={1}
                onValueChange={setVolume}
                className="w-24"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Heart className="w-4 h-4" />
              </Button>

              <Button
                variant="hero"
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Prompt reference */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Created from: &ldquo;{prompt}&rdquo;
          </p>
        </div>
      </div>
    </motion.div>
  );
};
