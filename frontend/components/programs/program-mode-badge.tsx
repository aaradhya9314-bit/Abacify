import { Laptop, MapPin } from "lucide-react";
import type { LearningMode } from "@/lib/programs";
import { cn } from "@/lib/utils";

const LABELS: Record<LearningMode, string> = {
  online: "Online",
  offline: "Offline",
};

const ICONS: Record<LearningMode, typeof Laptop> = {
  online: Laptop,
  offline: MapPin,
};

export function ProgramModeBadge({ mode, className }: { mode: LearningMode; className?: string }) {
  const Icon = ICONS[mode];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-200",
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {LABELS[mode]}
    </span>
  );
}
