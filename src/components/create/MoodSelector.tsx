import { cn } from "@/lib/utils";

interface MoodSelectorProps {
  selected: string | null;
  onSelect: (mood: string) => void;
}

const moods = [
  { id: "energetic", label: "Energetic", emoji: "⚡" },
  { id: "calm", label: "Calm", emoji: "🧘" },
  { id: "dark", label: "Dark", emoji: "🌙" },
  { id: "uplifting", label: "Uplifting", emoji: "☀️" },
  { id: "melancholic", label: "Melancholic", emoji: "🌧️" },
  { id: "epic", label: "Epic", emoji: "🏔️" },
];

export const MoodSelector = ({ selected, onSelect }: MoodSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-muted-foreground">Mood (optional)</label>
      <div className="grid grid-cols-3 gap-2">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onSelect(selected === mood.id ? "" : mood.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all duration-200 text-sm",
              selected === mood.id
                ? "border-accent bg-accent/10 text-foreground"
                : "border-border bg-card hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground"
            )}
          >
            <span>{mood.emoji}</span>
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
