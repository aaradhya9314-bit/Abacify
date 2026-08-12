import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Program } from "@/lib/programs";
import { enquireHref } from "@/lib/programs";
import { getAccent } from "@/lib/program-accent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgramModeBadge } from "@/components/programs/program-mode-badge";

export function ProgramCard({ program }: { program: Program }) {
  const accent = getAccent(program.accentToken);
  const Icon = program.icon;

  return (
    <Card
      className={`flex h-full flex-col p-7 transition duration-200 hover:-translate-y-1.5 ${accent.borderHover} ${accent.glowShadowHover}`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accent.border} ${accent.bgSoft}`}
      >
        <Icon className={`h-6 w-6 ${accent.text}`} />
      </span>

      <h3 className="mt-6 font-heading text-2xl font-semibold text-white">{program.name}</h3>
      {program.ageOrClassRange ? (
        <p className="mt-1 text-sm font-medium text-slate-400">{program.ageOrClassRange}</p>
      ) : null}
      <p className="mt-4 text-sm leading-6 text-slate-300">{program.tagline}</p>

      <ul className="mt-5 grid gap-2">
        {program.themes.slice(0, 4).map((theme) => (
          <li key={theme} className="flex items-center gap-2 text-sm text-slate-300">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.bgDot}`} />
            {theme}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {program.modes.map((mode) => (
          <ProgramModeBadge key={mode} mode={mode} />
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={program.href}>
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="sm" className="flex-1">
          <Link href={enquireHref(program.slug)}>{program.ctaLabel}</Link>
        </Button>
      </div>
    </Card>
  );
}
