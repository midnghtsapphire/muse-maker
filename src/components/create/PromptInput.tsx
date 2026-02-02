import { Textarea } from "@/components/ui/textarea";
import { Lightbulb } from "lucide-react";

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
}

const examplePrompts = [
  "Uplifting electronic track with soaring synths",
  "Calm acoustic guitar for a sunset video",
  "Epic orchestral score for a film trailer",
  "Lo-fi hip hop beats for studying",
];

export const PromptInput = ({ value, onChange }: PromptInputProps) => {
  return (
    <div className="space-y-4">
      <div className="gradient-border rounded-2xl">
        <div className="p-1">
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Describe the music you want to create..."
            className="min-h-[140px] bg-card border-0 rounded-xl text-lg resize-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Lightbulb className="w-4 h-4 text-accent" />
          <span>Try:</span>
        </div>
        {examplePrompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onChange(prompt)}
            className="px-3 py-1.5 text-sm bg-secondary hover:bg-secondary/80 rounded-full text-muted-foreground hover:text-foreground transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};
