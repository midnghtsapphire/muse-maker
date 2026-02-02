import { cn } from "@/lib/utils";

interface GenreSelectorProps {
  selected: string | null;
  onSelect: (genre: string) => void;
}

const genres = [
  { id: "electronic", label: "Electronic", emoji: "🎹" },
  { id: "orchestral", label: "Orchestral", emoji: "🎻" },
  { id: "acoustic", label: "Acoustic", emoji: "🎸" },
  { id: "hip-hop", label: "Hip Hop", emoji: "🎤" },
  { id: "ambient", label: "Ambient", emoji: "🌊" },
  { id: "rock", label: "Rock", emoji: "🎸" },
];

export const GenreSelector = ({ selected, onSelect }: GenreSelectorProps) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-muted-foreground">Genre (optional)</label>
      <div className="grid grid-cols-3 gap-2">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onSelect(selected === genre.id ? "" : genre.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all duration-200 text-sm",
              selected === genre.id
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card hover:border-muted-foreground/50 text-muted-foreground hover:text-foreground"
            )}
          >
            <span>{genre.emoji}</span>
            <span>{genre.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
